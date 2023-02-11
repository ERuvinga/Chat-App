import React from 'react';
import Link from 'next/link';
import InputText from '../../components/CommonComponents/InputText'
import Nav from '../../components/NavBar/Nav'
import LoginRegistertitle from '../../components/LoginRegistertitle'
import Button from '../../components/CommonComponents/Buttons'
import Head from '../../components/CommonComponents/Head'

const HandleChange = () => {

}


const index = () => {
    return (
        <>
            <Head />
            <div className='containerG'>
                <Nav />
                <form onSubmit={(e) => { e.preventDefault }} className=" container mx-auto flex flex-col items-center justify-center">
                    <div className='w-[95%] md:w-[60%] lg:w-[40%]'>
                        <LoginRegistertitle title='Login' url='./profile.png' />
                        <InputText type="input" name="mail" fieldContent="e-mail" HandleChange={HandleChange} addLabel={true} />
                        <InputText type="password" name="passWord" fieldContent="passWord" HandleChange={HandleChange} addLabel={true} />
                        <Button type='button' name='btn' fieldContent='Login' />

                        <p className=" text-center my-10 mx-auto w-[90%] ">
                            Connect to your account . Don`t have an account? {"      "}
                            <span className="hover:opacity-[0.8] font-bold text-underline">
                                <Link href={"/Register"}>Register here</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default index;