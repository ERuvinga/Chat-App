// list of users of message,
import { useEffect, useState } from "react";
import Friends from '../FriendMessages';
import Loading from "../../Loading";

interface OwenUser {
    email: String,
}

const ListFriend = (OwenrUser: OwenUser) => {
    const [dataUsers, setDataUser] = useState([{ email: '', picture: '', contentMessage: '' }]);
    const [LoadinPage, setLoadingPage] = useState(true);

    useEffect(() => {
        fetch(`${process.env.API_LINK}/api/Auth`)
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
                    (value.email != OwenrUser.email) ? <Friends name={value.email} picture="" contentMessage="Salut les gars" checked={true} noReadMessage={2} key={index} /> : null
                )
            }
        </span>
    )

};

export default ListFriend;