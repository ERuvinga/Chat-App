import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { ContextUser } from '../../Context/LogdataContext';

interface textInput {
    type: string,
    name: string,
    fieldContent: string,
    addLabel: boolean,
    page: string,
    idField: number // value in field (email and password)
}


let emailOrPassword: number;
let router: any;
let ErrorData: any;
let dataOfContext: any;

let userDataLogin = {
    email: "",
    password: "",
}

let userDataRegister = {
    email: "",
    password: "",
    confirmPassword: ""
}

const resetDataofLoginForm = () => {
    // initialise data send from login
    userDataLogin.email = '';
    userDataLogin.password = '';

    // disabled button whene refresh a login and register components
    dataOfContext.setDisablebtn(true);

}


const Index = (datas: textInput) => {
    router = useRouter(); // define a router methode
    ErrorData = useContext(ContextUser);
    dataOfContext = useContext(ContextUser);


    const handleChange = (data: String) => {
        if (data.match(/@[a-zA-Z0-9]{5,}(.com$)/)) {
            dataOfContext.setDisablebtn(false);
            ErrorData.setData({
                stateError: false,
                MessageError: ''
            });
        }
        else {
            dataOfContext.setDisablebtn(true);
            ErrorData.setData({
                stateError: true,
                MessageError: 'Invalid email of User'
            });
        }
    }

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
                                handleChange(event.target.value);
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
                                handleChange(event.target.value);
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


export const sendLoginData = (e: any) => {
    e.preventDefault();

    if (userDataLogin.email === "" || userDataLogin.password === "") {
        ErrorData.setData({
            stateError: true,
            MessageError: 'Invalid data of User'
        });
    }

    else {
        dataOfContext.setLaoding(true);
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
                        .then(datas => { // if user ok, redierct this on index page of chat
                            console.info(datas.message);
                            // adding a token and user id in localstorage data
                            localStorage.setItem('userId', datas.userId);
                            localStorage.setItem('Token', datas.token);

                            // redirect to a chat page
                            router.push('/Chat');
                        })
                }
                else {
                    user.json()
                        .then(datas => {
                            dataOfContext.setLaoding(false); // if error, rerender a login form
                            ErrorData.setData({
                                stateError: true,
                                MessageError: datas.message
                            });
                        });
                }

            })

            .catch(error => {
                console.log(error);
            });
    }
    // after sending data, reset values in field
    resetDataofLoginForm();
}

export const sendRegisterData = (e: any) => {
    e.preventDefault();

    if (userDataRegister.confirmPassword === "" || userDataRegister.email === "" || userDataRegister.password === "") {
        ErrorData.setData({
            stateError: true,
            MessageError: 'Invalid datas of user'
        })
    }

    else {
        if (userDataRegister.password !== userDataRegister.confirmPassword) {
            ErrorData.setData({
                stateError: true,
                MessageError: 'passWord/confirmPassword unwise'
            })
        }

        else {
            dataOfContext.setLaoding(true);
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
