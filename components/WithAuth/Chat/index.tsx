import React, { useState } from 'react';
import Head from '../../../components/CommonComponents/Head';
import UserChat from '../../CommonComponents/Chat/UsersChat'
import DesciptionFriend from '../../CommonComponents/Chat/DescriptionUser'
import Message from '../../CommonComponents/Chat/MessagesBloc';
import ListFriend from '../../CommonComponents/Chat/ListFriends';

interface dataUser {
    Datas: any
}

const Index = (User: dataUser) => {
    const [user, setUser] = useState(User.Datas);
    const [toogleDescription, setToogleDescription] = useState(true); // chage a users description
    return (
        <>
            <Head />
            <div className=' mx-auto radius h-screen bg-[#F9F9FC] flex flex-col sm:flex-row justify-between '>
                <section className='w-[97%] list-users sm:w-[25%] h-screen space-y-5'>
                    <div className='space-y-5'>
                        <UserChat Name={user.name} descriptions={user.email} picture={user.picture} />
                        <input name='searchUser' type='text' className='w-[80%] SearchUser' placeholder="Search user" />
                        <ListFriend email={User.Datas.email} actionsEvent={setToogleDescription} />
                    </div>
                </section>
                <section className='hidden sm:block w-[50%] h-screen chat-contents bg-[#fff] space-y-1'>
                    <Message indexPage={toogleDescription} />
                </section>

                <aside className='hidden w-[25%] md:flex justify-center items-center h-screen '>
                    <section className='w-[100%]' >
                        <DesciptionFriend idUser={toogleDescription} name={user.name} function={user.email} picture={user.picture} />
                    </section>
                </aside>
            </div>
        </>
    );
};

export default Index;