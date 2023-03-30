import React, { useState, useContext, useEffect } from 'react';
import { contextChat } from '../../Context/ChatContext';
import { UsersChatContext } from '../../Context/UserContext'

import Head from '../../../components/CommonComponents/Head';
import UserChat from '../../CommonComponents/Chat/UsersChat'
import DesciptionFriend from '../../CommonComponents/Chat/DescriptionUser'
import Message from '../../CommonComponents/Chat/MessagesBloc';
import ListFriend from '../../CommonComponents/Chat/ListFriends';


interface dataUser {
    Datas: any,
    _id: String
}

let ContexChat: any;
let ContextUser: any;

const Index = (User: dataUser) => {
    const [user, setUser] = useState(User.Datas);
    ContexChat = useContext(contextChat);
    ContextUser = useContext(UsersChatContext);


    useEffect(() => {
        // save Owenr User
        ContextUser.setOwnerUser(User.Datas);
        ContexChat.set_idOwnerUser(User._id);


        if (ContexChat._idOtherUser !== 0) {
            fetch(`${process.env.API_LINK}/api/user/${ContexChat._idOtherUser}`, {
                headers: {
                    "Accept": 'application/json',
                    "Content-type": 'application/json; charset=UTF-8',
                    "Autorization": `Bearer ${localStorage.getItem('Token')}`
                }
            })
                .then(dataUser => {
                    if (dataUser.ok) {
                        dataUser.json()
                            .then(dataOtherUser => {
                                ContextUser.setOtherUser(dataOtherUser.datas)
                                ContexChat.setTooglePage(false);
                            })
                    }
                })
                .catch(error => {
                    console.error(error);
                }
                );
        }

    }, [ContexChat.selectedUser]);


    return (
        <>
            <Head />
            {
                <div className=' mx-auto radius h-screen bg-[#F9F9FC] flex flex-col sm:flex-row justify-between '>
                    <section className='w-[97%] list-users sm:w-[25%] h-screen'>
                        <div className='flex flex-col  justify-center'>
                            <div className='min-h-[10vh] relative '>
                                <UserChat Name={user.name} descriptions={user.email} picture={user.picture} />
                                <input name='searchUser ' type='text' className='w-[80%] SearchUser' placeholder="Search user" />
                            </div>
                            <span className='Line mt-4'></span>
                            <ListFriend />
                        </div>
                    </section>
                    <section className='hidden sm:block w-[50%] h-screen chat-contents bg-[#fff] space-y-1'>
                        <Message OtherUser={''} />
                    </section>

                    <aside className='hidden w-[25%] md:flex justify-center items-center h-screen '>
                        <section className='w-[100%]' >
                            {
                                ContexChat.tooglePage ?
                                    <DesciptionFriend me={ContexChat.tooglePage} name={user.name} function={user.email} picture={user.picture} />
                                    :
                                    <DesciptionFriend me={ContexChat.tooglePage} name={ContextUser.OtherUser.name} function={ContextUser.OtherUser.email} picture={ContextUser.OtherUser.picture} />
                            }
                        </section>
                    </aside>
                </div>
            }
        </>
    );
}
export default Index