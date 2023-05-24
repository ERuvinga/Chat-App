// list of users of message,
import { useEffect, useState, useContext } from "react";
import Friends from '../FriendMessages';
import Loading from "../../Loading";

//context
import { UsersChatContext } from "../../../Context/UserContext";
import { socketIoContext } from "../../../Context/socket";
import { contextChat } from "../../../Context/ChatContext";

let userContext: any;
let ChatContext: any;
let SocketContext: any;

const getLastMsgConversat = (idUser: any, tabLastMesg: any) => {
    let message = '';
    let i;
    for (i = 0; i < tabLastMesg.length; i++) {
        if ((userContext.OwnerUser.userId === tabLastMesg[i].members[0]) || (userContext.OwnerUser.userId === tabLastMesg[i].members[1])) { // search owenUser
            if ((idUser === (tabLastMesg[i].members[0])) || (idUser === tabLastMesg[i].members[1])) { // if ownerUser and Otheer user available in dataBase
                message = tabLastMesg[i].messages.content; // if conrespond return content message
                break;
            }
        }
    }

    return message;
}

const getNoReadMsgs = (idUser: any, tabLastMesg: any) => { // return number of the no read message of User
    let numberOfMsd = 0;
    let i;
    for (i = 0; i < tabLastMesg.length; i++) {
        if ((userContext.OwnerUser.userId === tabLastMesg[i].members[0]) || (userContext.OwnerUser.userId === tabLastMesg[i].members[1])) { // search owenUser
            if ((idUser === (tabLastMesg[i].members[0])) || (idUser === tabLastMesg[i].members[1])) { // if ownerUser and Otheer user available in dataBase
                numberOfMsd = tabLastMesg[i].noReadMesgs; // if conrespond return number of noRead messages
                break;
            }
        }
    }

    return numberOfMsd;
}

const ListFriend = () => {
    //contexts
    userContext = useContext(UsersChatContext);
    SocketContext = useContext(socketIoContext);
    ChatContext = useContext(contextChat);

    //states
    const [LoadinPage, setLoadingPage] = useState(true);
    const [dataUsers, setDataUser] = useState([{ email: '', picture: '', contentMessage: '', _id: null, noReadMesgs: 0 }]);
    const [LastMsg, setLastMsg] = useState([{
        members: [],
        messages: {
            content: '',
            type: ''
        },
        Hours: '',
        noReadMesgs: 0
    }]);

    // Search data One time
    useEffect(() => {
        fetch(`${process.env.API_LINK}/api/user`, {
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(datafetching => {
                if (datafetching.ok) {
                    datafetching.json()
                        .then(Users => {
                            setDataUser(Users.users);
                            setLastMsg(Users.lastMesg);
                            setLoadingPage(false);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    //when Send Message Search it 
    useEffect(() => {
        if (ChatContext._idConversation !== null) {
            fetch(`${process.env.API_LINK}/api/conversations`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json;charset=UTF-8',
                    "Autorization": `Bearer ${localStorage.getItem('Token')}`
                },

                body: JSON.stringify({ _idOtherUser: userContext.OtherUser._id })
            })
                .then((response) => {
                    if (response.ok) {
                        response.json()
                            .then(conversation => {
                                ChatContext.setMessageContent(conversation.messages);
                            })
                    }
                })
                .catch((error) => console.log(error));
        }
    }, [ChatContext.msgBlocReload]);

    useEffect(() => {

        if (SocketContext.socketIo != null) {
            SocketContext.socketIo.on('New_Message', (idUser: String) => {
                if (idUser === userContext.OtherUser._id || idUser === userContext.OwnerUser.userId) {
                    console.log("is me");
                    fetch(`${process.env.API_LINK}/api/user`, {
                        headers: {
                            "Accept": 'application/json',
                            "Content-type": 'application/json; charset=UTF-8',
                            "Autorization": `Bearer ${localStorage.getItem('Token')}`
                        }
                    })
                        .then(datafetching => {
                            if (datafetching.ok) {
                                datafetching.json()
                                    .then(Users => {
                                        setDataUser(Users.users);
                                        setLastMsg(Users.lastMesg);
                                    })
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });

            SocketContext.socketIo.on('New_Message', (idUser: String) => {
                if (idUser === userContext.OwnerUser.userId) {
                    console.log("Socket search New message");
                    ChatContext.setMsgBlocReload(1 - ChatContext.msgBlocReload)
                }
            });
        }
    }, [SocketContext.socketIo]);



    if (LoadinPage) {
        return <Loading />
    }

    return (
        <div className={!ChatContext.tooglePage ? 'hidden TabletPoint:flex flex-col py-3 px-1 items-center justify-start mx-auto w-[100%] max-h-[85vh] TabletPoint:max-h-[77vh] TabletPoint:max-w-[98%] ListFriendContainer' : "flex flex-col py-3 px-1 items-center justify-start mx-auto w-[100%] max-h-[85vh] TabletPoint:max-h-[77vh] TabletPoint:max-w-[98%] ListFriendContainer"}>
            {
                dataUsers.map((value, index) =>
                    <Friends
                        key={index}
                        name={value.email}
                        _idUser={value._id}
                        indexUser={index}
                        picture={value.picture}
                        checked={getNoReadMsgs(value._id, LastMsg) ? false : true}
                        contentMessage={getLastMsgConversat(value._id, LastMsg)}
                        noReadMessage={getNoReadMsgs(value._id, LastMsg)} />
                )
            }
        </div>
    )

};

export default ListFriend;