import React, { useState, useContext, useEffect } from 'react';
import { io } from 'socket.io-client' // add socket api

import { contextChat } from '../../Context/ChatContext';
import { UsersChatContext } from '../../Context/UserContext'
import { socketIoContext } from '../../Context/socket';

import Head from '../../../components/CommonComponents/Head';
import UserChat from '../../CommonComponents/Chat/UsersChat'
import DesciptionFriend from '../../CommonComponents/Chat/DescriptionUser'
import Message from '../../CommonComponents/Chat/MessagesBloc';
import ListFriend from '../../CommonComponents/Chat/ListFriends';

interface dataUser {
    Datas: any,
    _id: String
}

// link socket server
const LinkApi = 'http://127.0.0.1:4002';
const RemoteLinkApi = 'https://chatapp-wq8r.onrender.com'

let ContexChat: any;
let ContextUser: any;
let ContextSocket: any;

const Index = (User: dataUser) => {

    const [user, setUser] = useState(User.Datas);
    ContexChat = useContext(contextChat);
    ContextUser = useContext(UsersChatContext);
    ContextSocket = useContext(socketIoContext);

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

    useEffect(() => {
        ContextSocket.setIo(io(LinkApi).emit('New_Connection', { user }));
    }, []);

    return (
        <>
            <Head />
            {
                <div className='mx-auto  w-[100%] h-screen bg-[#F9F9FC] flex flex-col justify-between TabletPoint:flex-row '>
                    <section className=' mx-auto w-[99%] sm:w-[80%] list-users TabletPoint:w-[30%] md_lg:w-[25%] TabletPoint:h-screen'>
                        <div className='flex flex-col justify-center'>
                            <div className=' min-h-[5vh] relative '>
                                <UserChat Name={user.name} descriptions={user.email} picture={user.picture} />
                                <div className='flex  items-center justify-center mt-6'>
                                    <input name='searchUser' type='text' className='w-[80%] SearchUser' placeholder="Search user" />
                                </div>
                            </div>
                            <span className='Line mt-4'></span>
                            <ListFriend />
                        </div>
                    </section>
                    <section className='hidden w-[99%] sm:w-[80%] TabletPoint:flex TabletPoint:w-[70%] md_lg:w-[50%] mx-auto h-screen chat-contents bg-[#fff] space-y-1'>
                        <Message />
                    </section>

                    <aside className=' hidden  w-[25%] md_lg:flex justify-center items-center h-screen '>
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