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
    const [chatWithUser, setChatWithUser] = useState(null);
    const [LoadingComp, setLoadingComp] = useState(true);
    ContexChat = useContext(contextChat);

    useEffect(() => {
        if (ContexChat._idOtherUser !== 0) {
            fetch(`${process.env.API_LINK}/api/user/${ContexChat._idOtherUser}`)
                .then(dataUser => {
                    if (dataUser.ok) {
                        dataUser.json()
                            .then(dataOtherUser => {
                                setLoadingComp(false);
                                otherUser = dataOtherUser.datas;
                                setChatWithUser(dataOtherUser.datas)
                            })
                    }
                })
                .catch(error => {
                    console.error(error)
                }
                );
        }
    }, [ContexChat.selectedUser]);


    return (
        <>
            <Head />
            {
                (!ContexChat.tooglePage && LoadingComp) ? <Loading /> :

                    <div className=' mx-auto radius h-screen bg-[#F9F9FC] flex flex-col sm:flex-row justify-between '>
                        <section className='w-[97%] list-users sm:w-[25%] h-screen space-y-5'>
                            <div className='space-y-5'>
                                <UserChat Name={user.name} descriptions={user.email} picture={user.picture} />
                                <input name='searchUser' type='text' className='w-[80%] SearchUser' placeholder="Search user" />
                                <ListFriend email={User.Datas.email} />
                            </div>
                        </section>
                        <section className='hidden sm:block w-[50%] h-screen chat-contents bg-[#fff] space-y-1'>
                            <Message OtherUser={chatWithUser} />
                        </section>

                        <aside className='hidden w-[25%] md:flex justify-center items-center h-screen '>
                            <section className='w-[100%]' >
                                {
                                    ContexChat.tooglePage ?
                                        <DesciptionFriend me={ContexChat.tooglePage} name={user.name} function={user.email} picture={user.picture} />
                                        :
                                        <DesciptionFriend me={ContexChat.tooglePage} name={otherUser.name} function={otherUser.email} picture={otherUser.picture} />
                                }
                            </section>
                        </aside>
                    </div>
            }
        </>
    );
}
export default Index