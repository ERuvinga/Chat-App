import React from 'react';
import Link from 'next/link';
import InputText from '../../components/CommonComponents/InputText'
import Nav from '../../components/NavBar/Nav'
import LoginRegistertitle from '../../components/LoginRegistertitle'
import Head from '../../components/CommonComponents/Head'
import Button from '../../components/CommonComponents/Buttons'

const HandleChange = () =>{

}


const index = () => {
    return (
        <>        
               <Head/>
               < div className='containerG'>
                    <Nav/>
                        <form onSubmit={(e)=>{e.preventDefault}} className=" container mx-auto flex flex-col items-center justify-center">
                            <div className='ContainerForm'>
                                <LoginRegistertitle title='Register' url='./profile.png' />
                                <InputText type= "input" name= "mail"  fieldContent= "e-mail" HandleChange= {HandleChange} addLabel={true}/>
                                <InputText type= "password" name= "passWord"  fieldContent= "passWord" HandleChange= {HandleChange} addLabel={true}/>
                                <InputText type= "password" name= "confirm passWord"  fieldContent= "confirm-passWord" HandleChange= {HandleChange} addLabel={true}/>
                                <Button type='button' name='btn' fieldContent='Register' />
                                <p className=" text-center my-10 ">
                                    Have you an account?{"      "}
                                    <span className="hover:opacity-[0.8] font-bold text-underline">
                                        <Link href={"/Login"}>Please Login</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                </div>
        </>
    );
};

export default index;