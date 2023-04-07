// list of users of message,
import { useEffect, useState, useContext } from "react";
import Friends from '../FriendMessages';
import Loading from "../../Loading";

//context
import { UsersChatContext } from "../../../Context/UserContext";
let userContext: any;

const getLastMsgConversat = (idUser: any, tabLastMesg: any) => {
    let message = '';
    let i;
    for (i = 0; i < tabLastMesg.length; i++) {
        if ((idUser === tabLastMesg[i].members[0]) || (idUser === tabLastMesg[i].members[1])) {
            message = tabLastMesg[i].messages.content;
            break;
        }
    }

    return message;
}
const ListFriend = () => {

    userContext = useContext(UsersChatContext);
    const [LoadinPage, setLoadingPage] = useState(true);
    const [dataUsers, setDataUser] = useState([{ email: '', picture: '', contentMessage: '', _id: null }]);
    const [LastMsg, setLastMsg] = useState([{
        members: [],
        messages: {
            content: '',
            type: ''
        },
        Hours: '',
    }]);

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
                        checked={false}
                        contentMessage={getLastMsgConversat(value._id, LastMsg)}
                        noReadMessage={2} />
                )
            }
        </div>
    )

};

export default ListFriend;