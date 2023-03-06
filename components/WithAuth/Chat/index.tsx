import React, { useEffect, useState } from 'react';
import Head from '../../../components/CommonComponents/Head';
import ChatUSer from '../../../components/UsersChat'
import DesciptionFriend from '../../CommonComponents/Chat/DescriptionUser'
import HeadChat from '../../../components/HeadChat'
import Friends from '../../CommonComponents/Chat/FriendMessages'
import BtnMessages from '../../CommonComponents/Chat/SendMessageBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faMessage, faUserFriends, faHeartCirclePlus, faSmile, faPaperPlane, faPaperclip, faPhone } from '@fortawesome/free-solid-svg-icons';

interface dataUser {
    Datas: any
}

const Index = (User: dataUser) => {
    const [user, setUser] = useState(User.Datas);
    useEffect(() => {

    }, []);

    return (
        <>
            <Head />
            <div className=' mx-auto radius h-screen bg-[#F9F9FC] flex flex-col sm:flex-row justify-between '>
                <section className='w-[97%] list-users sm:w-[40%] h-screen space-y-5'>
                    <div className='space-y-5'>
                        <ChatUSer Name={user.name} descriptions={user.email} picture={user.picture} />
                        <input name='searchUser' type='text' className='SearchUser' placeholder="Search user" />
                        <Friends name='Mio legat' picture='' contentMessage='bonjour Elie Nous sommes etudiant a la meme universite et nous allons reussir' checked={false} />
                        <Friends name='Sophie Ng' picture='' contentMessage='salut' checked={true} />
                        <Friends name='Leaetitia Ng' picture='' contentMessage="Non c'est pas correct" checked={false} />
                        <Friends name='Rachel Ng' picture='' contentMessage="Courage " checked={true} />
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
                    <section className='w-[100%]' >
                        <DesciptionFriend idUser={true} name={user.name} function={user.email} picture={user.picture} />
                    </section>
                </aside>
            </div>
        </>
    );
};

export default Index;