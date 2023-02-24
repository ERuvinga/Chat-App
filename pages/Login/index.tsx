import React from 'react';
import Link from 'next/link';
import InputText from '../../components/CommonComponents/InputText'
import Nav from '../../components/NavBar/Nav'
import LoginRegistertitle from '../../components/LoginRegistertitle'
import Button from '../../components/CommonComponents/Buttons'
import Head from '../../components/CommonComponents/Head'
import ErrorLog from '../../components/CommonComponents/ErrorLog'
import ContextError from '../../components/Context/LogdataContext'


const Login = () => {

    return (
        <>
            <Head />
            <div className='containerG'>
                <Nav />
                <ContextError>
                    <form method='post' onSubmit={e => e.preventDefault} className=" container mx-auto flex flex-col items-center justify-center">
                        <div className=' w-[95%] md:w-[60%] lg:w-[40%]'>
                            <LoginRegistertitle title='Login' url='./profile.png' />
                            <InputText type="email" name="mail" fieldContent="e-mail" idField={0} addLabel={true} page="Login" />
                            <InputText type="password" name="passWord" fieldContent="password" idField={1} addLabel={true} page="Login" />
                            <ErrorLog />
                            <Button name='btn' fieldContent='Login' />

                            <p className=" text-center my-10 mx-auto w-[90%] ">
                                Connect to your account . Don`t have an account? {"      "}
                                <span className="hover:opacity-[0.8] font-bold text-underline">
                                    <Link href={"/Register"}>Register here</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </ContextError>
            </div>
        </>
    );
};

export default Login; 