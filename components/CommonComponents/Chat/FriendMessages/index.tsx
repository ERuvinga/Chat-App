import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

//contexts
import { contextChat } from '../../../Context/ChatContext';
import { socketIoContext } from '../../../Context/socket';
import Indicator from '../IndicatorOnline';

// Date manager
import { LastMessageTime } from '../../../../lib/Date';

interface NewMessages {
    name: string,
    picture: string,
    contentMessage: any,
    checked: boolean,
    noReadMessage: number,
    //
    _idUser: any,
    indexUser: number,
    values?: any,
    timeHour: number,
    online: boolean
}

let ChatContxt: object | any;
let ioContext: any;

const Index = (datas: NewMessages) => {
    ChatContxt = useContext(contextChat);
    ioContext = useContext(socketIoContext);

    return (
        <div className='flex flex-row h-[100%] w-[95%] justify-center items-center my-3'
            onClick={() => {
                ChatContxt.setLoadingMessage(true);
                ChatContxt.setSelectedUser(datas.indexUser);
                ChatContxt.set_idOtherUser(datas._idUser);

                if (ChatContxt.InputMessage !== null) { // if available
                    ChatContxt.InputMessage.value = null // delete any content in  Input Elelment
                    ChatContxt.messageSender = null; //delete content value of message wen change user
                }

                //check conversation _id
                fetch(`${process.env.API_LINK}/api/conversations`, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json;charset=UTF-8',
                        "Autorization": `Bearer ${localStorage.getItem('Token')}`
                    },
                    body: JSON.stringify({ _idOtherUser: datas._idUser })
                })
                    .then((response) => {
                        if (response.ok) {
                            response.json()
                                .then(conversation => {
                                    ChatContxt.set_idConversation(conversation._idConv);
                                    ChatContxt.setMessageContent(conversation.messages);
                                    ChatContxt.setLoadingMessage(false);
                                })
                        }
                    })
                    .catch((error) => console.log(error));
            }

        } >
            <div className={(ChatContxt.selectedUser == datas.indexUser) ? 'ContainerUserSelected flex justify-between' : 'ContainerMessage flex justify-between'}>
                <div className='blocImgMsg'>
                     <img src={datas.picture ? datas.picture : 'profile.png'} className='w-[50px] h-[50px] imgUserMessage ' alt='user' />
                     { 
                        datas.online && <Indicator/> // display Indicator inline if user are Online
                    }
                </div>
                <p className='flex flex-col justify-center items-start w-[54%] ml-[8px] '>
                    <span className='w-[80%] truncate UsersendMessage'>{datas.name}</span>
                    <span className='messages truncate'>{datas.contentMessage}</span>
                </p>
                <div className='flex w-[26%] flex-col justify-center items-center space-y-2 mx-auto'>
                    <span className='Date'>{datas.timeHour ? LastMessageTime(datas.timeHour): ' '}</span>
                    {
                        datas.checked ? (datas.timeHour ? <FontAwesomeIcon className='MessageView' icon={faCheck} />: ' ')
                            :
                            <span className={(datas.noReadMessage < 10) ? 'numberMessages' : ''}>
                                {(datas.noReadMessage > 9) ? <FontAwesomeIcon className=' text-[.85em] text-[#5843E4]' icon={faPlusCircle} />
                                    : datas.noReadMessage}
                            </span>}
                </div>
            </div>
        </div >
    );
};

export default Index;