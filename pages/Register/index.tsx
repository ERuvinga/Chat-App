import React from 'react';
import Link from 'next/link';
import InputText from '../../components/CommonComponents/InputText'
import Nav from '../../components/NavBar/Nav'
import LoginRegistertitle from '../../components/LoginRegistertitle'
import Head from '../../components/CommonComponents/Head'
import Button from '../../components/CommonComponents/Buttons'
import ErrorLog from '../../components/CommonComponents/ErrorLog';
import ContextError from '../../components/Context/LogdataContext'

const index = () => {
    return (
        <>
            <Head />
            <div className='containerG'>
                <Nav />
                <ContextError>
                    <form onSubmit={(e) => { e.preventDefault }} className=" container mx-auto flex flex-col items-center justify-center">
                        <div className=' w-[95%] md:w-[60%] lg:w-[40%] '>
                            <ErrorLog />
                            <LoginRegistertitle title='Register' url='./profile.png' />
                            <InputText type="input" name="mail" fieldContent="e-mail" idField={0} addLabel={true} page="Register" />
                            <InputText type="password" name="passWord" fieldContent="passWord" idField={1} addLabel={true} page="Register" />
                            <InputText type="password" name="confirm passWord" fieldContent="confirm-passWord" idField={2} addLabel={true} page="Register" />
                            <Button type='button' name='btn' fieldContent='Register' />

                            <p className=" text-center mt-12 mx-auto w-[90%]">
                                Have you an account?{"      "}
                                <span className="hover:opacity-[0.8] font-bold text-underline">
                                    <Link href={"/Login"}>Please Login</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </ContextError>
            </div>
        </>
    );
};

export default index;