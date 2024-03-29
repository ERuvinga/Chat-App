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
    for (let i = 0; i < tabLastMesg.length; i++) {
        if ((userContext.OwnerUser.userId === tabLastMesg[i].members[0]) || (userContext.OwnerUser.userId === tabLastMesg[i].members[1])) { // search owenUser
            if ((idUser === (tabLastMesg[i].members[0])) || (idUser === tabLastMesg[i].members[1])) { // if ownerUser and Otheer user available in dataBase
                message = tabLastMesg[i].messages.content; // if conrespond return content message
                break;
            }
        }
    }

    return message;
}

const getHourMsg = (idUser: any, tabLastMsg:any)=>{
    let hour = 0;
    for(let i = 0; i< tabLastMsg.length; i++){
        if ((userContext.OwnerUser.userId === tabLastMsg[i].members[0]) || (userContext.OwnerUser.userId === tabLastMsg[i].members[1])) { // search owenUser
            if ((idUser === (tabLastMsg[i].members[0])) || (idUser === tabLastMsg[i].members[1])) { // if ownerUser and Otheer user available in dataBase
                hour = tabLastMsg[i].hour; // if conrespond return content hour
            break;
            };
        };
    };

    return hour;
}


const getNoReadMsgs = (idUser: any, tabLastMesg: any) => { // return number of the no read message of User
    let numberOfMsd = 0;
    for (let i = 0; i < tabLastMesg.length; i++) {
        if ((userContext.OwnerUser.userId === tabLastMesg[i].members[0]) || (userContext.OwnerUser.userId === tabLastMesg[i].members[1])) { // search owenUser
            if ((idUser === (tabLastMesg[i].members[0])) || (idUser === tabLastMesg[i].members[1])) { // if ownerUser and Otheer user available in dataBase
                tabLastMesg[i].noReadMesgs.map((val:any)=>{
                    if(val.user === userContext.OwnerUser.userId)
                    numberOfMsd = val.val; // if conrespond return number of noRead messages
                }); 
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
    const [dataUsers, setDataUser] = useState([{ email: '', picture: '', contentMessage: '', _id: null,  name:'' ,status:false}]);
    const [LastMsg, setLastMsg] = useState([{
        members: [],
        messages: {
            content: '',
            type: ''
        },
        hour: 0,
        noReadMesgs:[],
    }]);

    // Search data Of users
    const reloadingUserDatas = () =>{
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
                return null;
            });
    };

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
            SocketContext.socketIo.on('New_Message', (idUser: any) => {
                if (idUser.other === userContext.OwnerUser.userId || idUser.owner === userContext.OwnerUser.userId) { //limit a event to 2 users 
                    reloadingUserDatas(); // reloading DataOfUser
                }
            });

            // principal events : newMessage, Connection, disconnection
            SocketContext.socketIo.on('New_Message', (users:any) => { // connected event of user

                if(users.other === userContext.OwnerUser.userId){
                    // if other user is owner in this display
                    ChatContext.setMsgBlocReload(1 - ChatContext.msgBlocReload);
                }
                console.log("New message");
        });


            SocketContext.socketIo.on('user_Connected', (newUser: any) => { // connected event of user
                    reloadingUserDatas(); // reloading DataOfUser
                    console.log("New User Connected : ");
                    console.log(newUser);
            });

            SocketContext.socketIo.on('user_disconnected', (logoutUser: any) =>{ // disconnect event of user
                reloadingUserDatas(); // reloading DataOfUser
                console.log(" User disconnected : ");
                console.log(logoutUser);
            });
    }
}, [SocketContext.socketIo]);



    if (LoadinPage) {
        return <Loading />
    }

    return (
        <div className="flex flex-col py-3 px-1 items-center justify-start mx-auto w-[100%] max-h-[85vh] TabletPoint:max-h-[77vh] TabletPoint:max-w-[98%] ListFriendContainer">
            {
                dataUsers.map((value, index) =>
                    <Friends
                        key={index}
                        name={value.name !== ''? value.name : value.email}
                        _idUser={value._id}
                        indexUser={index}
                        picture={value.picture}
                        checked={getNoReadMsgs(value._id, LastMsg) ? false : true}
                        contentMessage={getLastMsgConversat(value._id, LastMsg)}
                        noReadMessage={getNoReadMsgs(value._id, LastMsg)}
                        timeHour ={getHourMsg(value._id,LastMsg)}
                        online={value.status}
                    />
                )
            }
        </div>
    )

};

export default ListFriend;