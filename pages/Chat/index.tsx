import React from 'react';
import Head from '../../components/CommonComponents/Head';
import ChatUSer from '../../components/UsersChat'
import DesciptionFriend from '../../components/CommonComponents/Friend'
import HeadChat from '../../components/HeadChat'
import Messages from '../../components/CommonComponents/NewMessages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faVideoCamera, faMessage } from '@fortawesome/free-solid-svg-icons';


const index = () => {
    return (
        <>
            <Head/>
            <div className=' container mx-auto radius h-screen bg-[#F9F9FC] flex flex-row justify-between '>
                <section className=' list-users h-screen space-y-5'>
                    <div className='space-y-5'>
                        <ChatUSer Name='Elie Ruvinga' descriptions='Developper' picture='/4.jpeg'/>
                        <input name='searchUser' type='text' className='SearchUser' placeholder="Search user"/>
                        <Messages name='Mio legat' picture='' contentMessage='bonjour Elie Nous sommes etudiant a la meme universite et nous allons reussir'/>
                        <Messages name='Sophie Ng' picture='5.jpeg' contentMessage='salut'/>
                        <Messages name='Leaetitia Ng' picture='' contentMessage="Non c'est pas correct"/>
                        <Messages name='Rachel Ng' picture='' contentMessage="Courage "/>
                    </div>
                </section>
                <section className=' h-screen chat-contents bg-[#fff] m'>
                </section>

                <aside className=' description-users space-y-4 h-screen border'>
                    <DesciptionFriend name='Dianne Vanhorn' function='Junior Developper' picture='/12.jpeg'/>
                    <div className=" chatAndCall flex justify-around items-center border">
                        <span className=' flex flex-col'>
                             <FontAwesomeIcon className= 'btn_chat' icon={faMessage}/>
                             <span className=' text-center text-[#8186A0] text-[.8em] mt-1'>Chat</span>
                        </span>
                        <div className='line '>
                        </div>
                        <span className='flex flex-col'>
                             <FontAwesomeIcon className='btn_call' icon={faVideoCamera}/>
                             <span className= ' text-center text-[#8186A0] text-[.8em] mt-1'>Video</span>
                        </span>
                       
                    </div>
                </aside>
            </div>
        </>
    );
};

export default index;