import React, { useState, useContext, useEffect } from 'react';
import { contextChat } from '../../Context/ChatContext';

import Head from '../../../components/CommonComponents/Head';
import UserChat from '../../CommonComponents/Chat/UsersChat'
import DesciptionFriend from '../../CommonComponents/Chat/DescriptionUser'
import Message from '../../CommonComponents/Chat/MessagesBloc';
import ListFriend from '../../CommonComponents/Chat/ListFriends';
import Loading from '../../CommonComponents/Loading';


interface dataUser {
    Datas: any
}

let ContexChat: any;
let otherUser: any;

const Index = (User: dataUser) => {
    const [user, setUser] = useState(User.Datas);
    const [LoadingComp, setLoadingComp] = useState(true);

    ContexChat = useContext(contextChat);

    useEffect(() => {
        if (ContexChat._idOtherUser != null) {
            fetch(`${process.env.API_LINK}/api/users/:${ContexChat._idOtherUser}`)
                .then(dataUser => {
                    if (dataUser.ok) {
                        dataUser.json()
                            .then(dataOtherUser => {
                                console.log(dataOtherUser);
                                otherUser = dataOtherUser;
                                setLoadingComp(false);
                            })
                    }
                })
                .catch(error => {
                    console.error(error)
                }
                );
        }
    }, [ContexChat.selectedUser]);

    if (!ContexChat.tooglePage && LoadingComp) {
        return <Loading />
    }
    else {
        return (
            <>
                <Head />
                <div className=' mx-auto radius h-screen bg-[#F9F9FC] flex flex-col sm:flex-row justify-between '>
                    <section className='w-[97%] list-users sm:w-[25%] h-screen space-y-5'>
                        <div className='space-y-5'>
                            <UserChat Name={user.name} descriptions={user.email} picture={user.picture} />
                            <input name='searchUser' type='text' className='w-[80%] SearchUser' placeholder="Search user" />
                            <ListFriend email={User.Datas.email} />
                        </div>
                    </section>
                    <section className='hidden sm:block w-[50%] h-screen chat-contents bg-[#fff] space-y-1'>
                        <Message OtherUser={otherUser} />
                    </section>

                    <aside className='hidden w-[25%] md:flex justify-center items-center h-screen '>
                        <section className='w-[100%]' >
                            <DesciptionFriend idUser={ContexChat.tooglePage} name={user.name} function={user.email} picture={user.picture} />
                        </section>
                    </aside>
                </div>
            </>
        );
    }
};

export default Index