import React, { useEffect, useState } from "react";
import Router from "next/router";
import ChatApp from '../../components/WithAuth/Chat'
import Loading from "../../components/CommonComponents/Loading";



const WithAuth = (Localtoken: any, setPage: any) => {

    fetch("http://127.0.0.1:4002/api/Auth", {
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
                        console.log(user);
                        setPage(false);
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
    let page: any;
    useEffect(() => {
        WithAuth(localStorage.getItem('Token'), setStatePage);
    }, []);

    if (!statePage) { // withAuth is a function check if user is login
        return <ChatApp />;
    }
    return <Loading />;
};

export default IndexWithAuth;