// list of users of message,
import { useEffect, useState } from "react";
import Friends from '../../../CommonComponents/Chat/FriendMessages'

const ListFriend = () => {
    const [dataUsers, setDataUser] = useState();

    useEffect(() => {

    }, []);
    console.log(dataUsers);
    return (
        <>
            <Friends name='Sophie Ng' picture='' contentMessage='salut' noReadMessage={3} checked={false} />
        </>
    )

};

export default ListFriend;