// list of users of message,
import { useEffect, useState } from "react";
import Friends from '../FriendMessages';
import Loading from "../../Loading";

interface OwenUser {
    email: String,
}

const ListFriend = (OwenrUser: OwenUser) => {
    const [dataUsers, setDataUser] = useState([{ email: '', picture: '', contentMessage: '', _id: null }]);
    const [LoadinPage, setLoadingPage] = useState(true);

    useEffect(() => {
        fetch(`${process.env.API_LINK}/api/user`)
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
        <span>
            {
                dataUsers.map((value, index) =>
                    (value.email != OwenrUser.email) ? <Friends name={value.email} _idUser={value._id} indexUser={index} picture={value.picture} contentMessage="Salut les gars" checked={false} noReadMessage={2} key={index} /> : null
                )
            }
        </span>
    )

};

export default ListFriend;