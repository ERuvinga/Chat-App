import React, { useEffect, useState } from "react";
import Router from "next/router";
import ChatApp from '../../components/WithAuth/Chat'
import Loading from "../../components/CommonComponents/Loading";

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
    const [datasOfUser, setDatasOfUser] = useState({});

    useEffect(() => {
        WithAuth(localStorage.getItem('Token'), setStatePage, setDatasOfUser);
    }, []);

    if (!statePage) { // withAuth is a function check if user is login
        return <ChatApp Datas={datasOfUser} />;
    }
    return <Loading />;
};

export default IndexWithAuth;