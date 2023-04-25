import React, { useContext } from "react";
import Link from 'next/link';

// module creates
import InputText from '../../components/CommonComponents/InputText';
import LoginRegistertitle from '../../components/LoginRegistertitle';
import Button from '../CommonComponents/Chat/Buttons';
import Loading from '../../components/CommonComponents/Loading';
import ErrorLog from '../../components/CommonComponents/ErrorLog';
import { ContextUser } from '../../components/Context/LogdataContext';

const Login = () => {
    let datas: any;
    datas = useContext(ContextUser);

    if (datas.Loading)
        return <Loading />

    else {
        return (
            < form method='post' onSubmit={e => e.preventDefault} className=" container mx-auto flex flex-col items-center justify-center" >
                <div className=' w-[95%] md:w-[60%] lg:w-[40%]'>
                    <ErrorLog />
                    <LoginRegistertitle title='Login' url='./profile.png' />
                    <InputText type="email" name="mail" fieldContent="e-mail" idField={0} addLabel={true} page="Login" />
                    <InputText type="password" name="passWord" fieldContent="password" idField={1} addLabel={true} page="Login" />
                    <Button name='btn' fieldContent='Login' />

                    <p className="flex justify-center items-center space-x-3 text-center my-10 mx-auto w-[99%] text-[.8em] text-[#8186A0]">
                        <span>Don`t have an account?</span>
                        <span className="hover:opacity-[0.8] font-bold text-underline text-[#5843E4]">
                            <Link href={"/Register"}>Register here</Link>
                        </span>
                    </p>
                </div>
            </form >
        );
    }
};

export default Login;