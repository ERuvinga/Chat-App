import React from 'react';
import Head from '../../components/CommonComponents/Head';
import ChatUSer from '../../components/UsersChat'
import HeadChat from '../../components/HeadChat'
import Messages from '../../components/CommonComponents/NewMessages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const index = () => {
    return (
        <>
            <Head/>
            <div className=' container mx-auto h-screen bg-[#F9F9FC] flex flex-row justify-between border'>
                <aside className=' list-users h-screen space-y-5 border'>
                    <div className='space-y-5'>
                        <ChatUSer Name='Elie Ruvinga' descriptions='Developper' picture='/4.jpeg'/>
                        <input name='searchUser' type='text' className='SearchUser' placeholder="Search user"/>
                        <Messages name='Leaetitia Ng' picture='' contentMessage='bonjour Elie Nous sommes etudiant a la meme universite et nous allons reussir'/>
                    </div>
                </aside>
                <section className=' h-screen chat-contents bg-[#fff] m'>
                    <HeadChat/>
                </section>
            </div>
        </>
    );
};

export default index;