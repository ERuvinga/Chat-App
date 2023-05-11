import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

//contexts
import { contextChat } from '../../../Context/ChatContext';
import { socketIoContext } from '../../../Context/socket';

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
}

let ChatContxt: object | any;
let ioContext: any;

const Index = (datas: NewMessages) => {
    ChatContxt = useContext(contextChat);
    ioContext = useContext(socketIoContext);

    return (
        <div className='flex flex-row w-auto TabletPoint:w-[95%] justify-between Container-user items-center my-6 border'
            onClick={() => {
                ChatContxt.setLoadingMessage(true);
                ChatContxt.setSelectedUser(datas.indexUser);
                ChatContxt.set_idOtherUser(datas._idUser);

                if (ChatContxt.InputMessage !== null) { // if available
                    ChatContxt.InputMessage.value = '' // delete any content in  Input Elelment
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
                    .catch((error) => console.log(error))
            }
            } >
            <div className={(ChatContxt.selectedUser == datas.indexUser) ? 'border ContainerUserSelected flex flex-col TabletPoint:flex-row TabletPoint:justify-between TabletPoint:items-center' : 'ContainerMessage flex justify-between flex-col TabletPoint:flex-row items-center'}>
                <img src={datas.picture ? datas.picture : 'profile.png'} className='border w-[25px] h-[25%] TabletPoint:w-[50px] TabletPoint:h-[50px] imgUserMessage ' alt='user' />
                <p className='MessageContent flex flex-col justify-center'>
                    <span className='border text-[.55em] TabletPoint:text-[.8em] UsersendMessage'>{datas.name}</span>
                    <span className='hidden TabletPoint:flex messages'>{datas.contentMessage}</span>
                </p>
                <div className='border hidden TabletPoint:flex w-1/6 flex-col justify-center items-center space-y-2 mx-auto'>
                    <span className='Date'>18.32</span>
                    {
                        datas.checked ? <FontAwesomeIcon className='MessageView' icon={faCheck} />
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