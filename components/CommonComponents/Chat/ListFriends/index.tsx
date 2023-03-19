// list of users of message,
import { useEffect, useState } from "react";
import Friends from '../FriendMessages';
import Loading from "../../Loading";

const ListFriend = () => {
    const [dataUsers, setDataUser] = useState([{ email: '', picture: '', contentMessage: '', _id: null }]);
    const [LoadinPage, setLoadingPage] = useState(true);

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
                    <Friends name={value.email} _idUser={value._id} indexUser={index} picture={value.picture} contentMessage="Salut à vous!" checked={false} noReadMessage={2} key={index} />
                )
            }
        </div>
    )

};

export default ListFriend;