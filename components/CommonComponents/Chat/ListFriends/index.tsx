// list of users of message,
import { useEffect, useState, useContext } from "react";
import Friends from '../FriendMessages';
import Loading from "../../Loading";

//context
import { UsersChatContext } from "../../../Context/UserContext";
import { socketIoContext } from "../../../Context/socket";

let userContext: any;
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

    useEffect(() => {

        if (SocketContext.socketIo != null) {
            SocketContext.socketIo.on('message', () => {
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
            });
        }

        else {
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
        }
    }, [SocketContext.socketIo]);



    if (LoadinPage) {
        return <Loading />
    }

    return (
        <div className=" ListFriendContainer">
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