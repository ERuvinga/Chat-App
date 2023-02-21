import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface textInput {
    type: string,
    name: string,
    fieldContent: string,
    addLabel: boolean,
    page: string
    idField: number // value in field (email and password)
}

const remoteApi = 'https://funny-daifuku-d525e2.netlify.app/'

let emailOrPassword: number;
let router: any;
let userDataLogin = {
    email: "",
    password: "",
}

let userDataRegister = {
    email: "",
    password: "",
    confirmPassword: ""
}


export const sendLoginData = (e: any) => {
    e.preventDefault();

    if (userDataLogin.email === "" || userDataLogin.password === "") {
        console.error('invalid user datas');
        router.push('/');
    }

    else {
        fetch('http://127.0.0.1:4002/api/Auth/login', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(userDataLogin)

        })
            .then(user => {
                if (user.ok) {
                    user.json()
                        .then(datas => {
                            console.info(datas.message);
                        })
                }

            })

            .catch(error => {
                console.log(error);
            });
    }
}

export const sendRegisterData = (e: any) => {
    e.preventDefault();

    if (userDataRegister.confirmPassword === "" || userDataRegister.email === "" || userDataRegister.password === "") {
        console.error("invalid user datas");
        router.push('/');
    }

    else {
        if (userDataRegister.password !== userDataRegister.confirmPassword) {
            //router.push("/");
            return false;
        }
        fetch('http://127.0.0.1:4002/api/Auth/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=UTF-8'
            },

            body: JSON.stringify(userDataRegister)
        })
            .then(user => {
                if (user.ok) {
                    user.json()
                        .then(datas => {
                            console.info(datas.message);
                        })
                }
            })

            .catch(error => {
                console.log(error);
            });
    }
}

const Index = (datas: textInput) => {
    router = useRouter(); // define a router methode
    return (
        <div className='InputText w-[90%] '>
            {datas.addLabel ? <label htmlFor={datas.name} className='LabelField'>{datas.fieldContent}</label> : null}
            {datas.page === "Login" ?
                <input
                    name={datas.name}
                    type={datas.type}
                    id={datas.name}
                    className='InputField'
                    onChange={(event: any) => {
                        emailOrPassword = datas.idField ? 1 : 0; // verify a field that generate this event 
                        switch (emailOrPassword) {
                            case 0:
                                userDataLogin.email = event.target.value;
                                break;
                            case 1:
                                userDataLogin.password = event.target.value;
                                break;
                        }
                    }} /> :

                <input
                    name={datas.name}
                    type={datas.type}
                    id={datas.name}
                    className='InputField'
                    onChange={(event: any) => {

                        switch (datas.idField) { // verify a field that generate this event 
                            case 0:
                                emailOrPassword = 0;
                                break;
                            case 1:
                                emailOrPassword = 1;
                                break;
                            case 2:
                                emailOrPassword = 2;
                                break;
                        };

                        switch (emailOrPassword) { // find and save value a available in field switched
                            case 0:
                                userDataRegister.email = event.target.value;
                                break;
                            case 1:
                                userDataRegister.password = event.target.value;
                                break;
                            case 2:
                                userDataRegister.confirmPassword = event.target.value;
                                break;
                        };
                    }} />
            }
        </div>
    );
};

export default Index;