import React, { useEffect, useState } from "react";
import Router from "next/router";
import ChatApp from '../../components/WithAuth/Chat'
import Loading from "../../components/CommonComponents/Loading";
import ChatProvider from '../../components/Context/ChatContext'
import UserProvider from '../../components/Context/UserContext'
import SocketProvider from '../../components/Context/socket'

const WithAuth = (Localtoken: any, setPage: any, setData: any) => {

    fetch(`${process.env.API_LINK}/api/Auth`, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-type": 'application/json; charset=UTF-8',
            "Autorization": `Bearer ${Localtoken}`
        }
    })
        .then((datas) => {
            datas.json()
                .then((user: any) => {
                    if (!user.userId) { // if not user find, redirect to login page
                        Router.push('/Login');
                    }
                    else {
                        setPage(false);
                        setData(user);
                    }

                })

        })
        .catch(error => {
            console.error(error);
            Router.push('/Login');
        })
}

const IndexWithAuth = () => {
    const [statePage, setStatePage] = useState(true);
    const [datasOfUser, setDatasOfUser] = useState({ userId: '' });

    useEffect(() => {
        WithAuth(localStorage.getItem('Token'), setStatePage, setDatasOfUser);
    }, []);

    if (!statePage) { // withAuth is a function check if user is login
        return (
            <SocketProvider>
                <ChatProvider>
                    <UserProvider>
                        <ChatApp Datas={datasOfUser} _id={datasOfUser.userId} />
                    </UserProvider>
                </ChatProvider>
            </SocketProvider>
        )
    }
    return <Loading />;
};

export default IndexWithAuth;