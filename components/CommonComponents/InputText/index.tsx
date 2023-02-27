import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { ErrorLogContext } from '../../Context/LogdataContext';

interface textInput {
    type: string,
    name: string,
    fieldContent: string,
    addLabel: boolean,
    page: string
    idField: number // value in field (email and password)
}

let emailOrPassword: number;
let router: any;
let ErrorData: any;

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
        ErrorData.setData({
            stateError: true,
            MessageError: 'Invalid data of User'
        });
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
                            router.push('/Chat');
                        })
                }
                else {
                    user.json()
                        .then(datas => {
                            ErrorData.setData({
                                stateError: true,
                                MessageError: datas.message
                            });
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
        ErrorData.setData({
            stateError: true,
            MessageError: 'Invalid user datas'
        })
    }

    else {
        if (userDataRegister.password !== userDataRegister.confirmPassword) {
            console.error("invalid user datas");
            ErrorData.setData({
                stateError: true,
                MessageError: 'passWord/confirmPassword unwise'
            })
        }

        else {
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
                                router.push("/Login"); // whene create a new user succed you are redirect to Login page
                                console.info(datas.message);
                            })
                    }
                })

                .catch(error => {
                    console.log(error);
                });
        }
    }
}

const Index = (datas: textInput) => {
    router = useRouter(); // define a router methode
    ErrorData = useContext(ErrorLogContext);

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