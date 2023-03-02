import React from 'react';
import Head from '../../components/CommonComponents/Head';
import ChatUSer from '../../components/UsersChat'
import DesciptionFriend from '../../components/CommonComponents/Friend'
import HeadChat from '../../components/HeadChat'
import Messages from '../../components/CommonComponents/NewMessages'
import BtnMessages from '../../components/CommonComponents/SendMessageBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faMessage, faUserFriends, faHeartCirclePlus, faSmile, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const index = () => {
    return (
        <>
            <Head />
            <div className=' mx-auto radius h-screen bg-[#F9F9FC] flex flex-col sm:flex-row justify-between '>
                <section className='w-[97%] list-users sm:w-[40%] h-screen space-y-5'>
                    <div className='space-y-5'>
                        <ChatUSer Name='Elie Ruvinga' descriptions='Developper' picture='' />
                        <input name='searchUser' type='text' className='SearchUser' placeholder="Search user" />
                        <Messages name='Mio legat' picture='' contentMessage='bonjour Elie Nous sommes etudiant a la meme universite et nous allons reussir' checked={false} />
                        <Messages name='Sophie Ng' picture='' contentMessage='salut' checked={true} />
                        <Messages name='Leaetitia Ng' picture='' contentMessage="Non c'est pas correct" checked={false} />
                        <Messages name='Rachel Ng' picture='' contentMessage="Courage " checked={true} />
                    </div>
                </section>
                <section className='hidden sm:block h-screen chat-contents bg-[#fff] space-y-1'>
                    <div className='w-[95%] mx-auto Chat-Header flex items-center'>
                        <HeadChat name='Dianne Vanhorn' picture='' />
                    </div>

                    <div className=' w-[95%] mx-auto Chat-Body'>

                    </div>

                    <div className=' w-[95%] mx-auto Chat-Footer flex justify-center items-center space-x-2'>
                        <BtnMessages icone={faSmile} />
                        <BtnMessages icone={faPaperclip} />
                        <input name='message' type='text' className='InputMessage' placeholder="Write something ..." />
                        <BtnMessages icone={faPaperPlane} full={true} />
                    </div>
                </section>

                <aside className='hidden md:flex justify-center items-center description-users h-screen '>
                    <section className='space-y-4 w-[100%]' >
                        <DesciptionFriend name='Dianne Vanhorn' function='Junior Developper' picture='' />
                        <div className=" chatAndCall flex justify-around items-center">
                            <span className=' flex flex-col'>
                                <FontAwesomeIcon className='btn_chat' icon={faMessage} />
                                <span className=' text-center text-[#8186A0] text-[.8em] mt-1'>Chat</span>
                            </span>
                            <div className='line'>
                            </div>
                            <span className='flex flex-col'>
                                <FontAwesomeIcon className='btn_call' icon={faVideoCamera} />
                                <span className='text-center text-[#8186A0] text-[.8em] mt-1'>Video</span>
                            </span>
                        </div>
                        <div className=' w-[90%] mx-auto space-y-2'>
                            <span className=' flex justify-start items-baseline'>
                                <FontAwesomeIcon className='ViewFriends' icon={faUserFriends} />
                                <span className=' text-center text-[#8186A0] text-[.9em]'>View Friends</span>
                            </span>
                            <span className=' flex justify-start items-baseline'>
                                <FontAwesomeIcon className='addFavorite' icon={faHeartCirclePlus} />
                                <span className=' text-center text-[#8186A0] text-[.9em]'>Add to favorite</span>
                            </span>
                        </div>
                    </section>
                </aside>
            </div>
        </>
    );
};

export default index;