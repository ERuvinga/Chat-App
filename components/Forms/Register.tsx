import React, { useContext } from "react";
import Link from 'next/link';

import { ContextUser } from "../Context/LogdataContext";
import Loading from '../../components/CommonComponents/Loading';
import Button from '../CommonComponents/Chat/Buttons'
import ErrorLog from '../../components/CommonComponents/ErrorLog';
import LoginRegistertitle from '../../components/LoginRegistertitle'
import InputText from '../../components/CommonComponents/InputText'

const Register = () => {
    let datas: any;
    datas = useContext(ContextUser);

    if (datas.Loading)
        return <Loading />

    else {
        return (
            <form onSubmit={(e) => { e.preventDefault }} className=" container mx-auto flex flex-col items-center justify-center">
                <div className=' w-[95%] md:w-[60%] lg:w-[40%] '>
                    <ErrorLog />
                    <LoginRegistertitle title='Register' url='./profile.png' />
                    <InputText type="input" name="mail" fieldContent="e-mail" idField={0} addLabel={true} page="Register" />
                    <InputText type="input" name="firstName" fieldContent="firstName" idField={1} addLabel={true} page="Register" />
                    <InputText type="input" name="lastName" fieldContent="lastName" idField={2} addLabel={true} page="Register" />
                    <InputText type="password" name="passWord" fieldContent="passWord" idField={3} addLabel={true} page="Register" />
                    <InputText type="password" name="confirm passWord" fieldContent="confirm-passWord" idField={4} addLabel={true} page="Register" />
                    <Button type='button' name='btn' fieldContent='Register' />

                    <p className=" flex justify-center items-center space-x-3 text-center my-10 mx-auto w-[99%] text-[.8em] text-[#8186A0]">
                        <span>Have you an account?</span>
                        <span className="hover:opacity-[0.8] font-bold text-underline text-[#5843E4]">
                            <Link href={"/Login"}>Please Login</Link>
                        </span>
                    </p>
                </div>
            </form>
        )
    }

};

export default Register;