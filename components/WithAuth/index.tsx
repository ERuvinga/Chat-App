import { NextPage } from "next";
import Router from "next/router";
import loading from "../CommonComponents/Loading";

//this component check a if user as login
const WithAuth = (Page: NextPage, token: any) => {

    fetch("http://127.0.0.1:4002/api/Auth", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-type": 'application/json; charset=UTF-8',
            "Autorization": `Bearer ${token}`
        }
    })
        .then((datas) => {
            datas.json()
                .then((user: any) => {
                    if (!user.userId) { // if not user find, redirect to login page
                        Router.push('/Login');
                    }
                    console.log(user);

                })

        })
        .catch(error => {
            console.error(error)
        })
    return Page;
};

export default WithAuth;