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

let router: any;
let ErrorData: any;
let dataOfContext: any;

let userDataLogin = {
    email: "",
    password: "",
}

let userDataRegister = {
    firstName: "",
    lastName:"",
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

const resetDataofRegisterForm = () => {
    // initialise data send from login
    userDataRegister.email = '';
    userDataRegister.password = '';
    userDataRegister.confirmPassword = '';
    userDataRegister.firstName = '';
    userDataRegister.lastName = '';

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
                        switch (datas.idField ) {// verify a field that generate this event 
                            case 0:
                                userDataLogin.email = event.target.value;
                                handleChange(event.target.value);
                                break;
                            case 1:
                                userDataLogin.password = event.target.value;
                                break;
                        }
                        console.log(userDataLogin);
                    }} /> :

                <input
                    name={datas.name}
                    type={datas.type}
                    id={datas.name}
                    className='InputField'
                    onChange={(event: any) => {

                        switch (datas.idField) { // verify a field that generate this event 
                            case 0:
                                userDataRegister.email = event.target.value;
                                handleChange(event.target.value);
                                break;
                            case 1:
                                userDataRegister.firstName = event.target.value;
                                break;
                            case 2:
                                userDataRegister.lastName = event.target.value;
                                break;
                            case 3:
                                userDataRegister.password = event.target.value;
                                break;
                            case 4:
                                userDataRegister.confirmPassword = event.target.value;
                                break;
                        };
                        console.log(userDataRegister);
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
        fetch(`${process.env.API_LINK}/api/Auth/login`, {
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
                            localStorage.setItem('Token', datas.token);

                            // redirect to a chat page
                            router.push('/Chat-App');
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
            fetch(`${process.env.API_LINK}/api/Auth/register`, {
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

                    else {
                        dataOfContext.setLaoding(false); // if error, rerender a login form
                        user.json()
                            .then(messageError => {
                                ErrorData.setData({
                                    stateError: true,
                                    MessageError: messageError.message
                                })
                            })

                    }
                })

                .catch(error => {
                    console.log(error);
                });
        }
    }
}
