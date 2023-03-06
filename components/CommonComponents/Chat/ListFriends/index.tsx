// list of users of message,
import { useEffect, useState } from "react";
import Friends from '../../../CommonComponents/Chat/FriendMessages'
import Loading from "../../Loading";

const ListFriend = () => {
    const [dataUsers, setDataUser] = useState([]);
    const [LoadinPage, setLoadingPage] = useState(true);

    useEffect(() => {
        fetch(`${process.env.API_LINK}/api/Auth`)
            .then(datafetching => {
                if (datafetching.ok) {
                    datafetching.json()
                        .then(users => {
                            setDataUser(users);
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

    return <Friends name='Sophie Ng' picture='' contentMessage='salut' noReadMessage={3} checked={false} />

};

export default ListFriend;