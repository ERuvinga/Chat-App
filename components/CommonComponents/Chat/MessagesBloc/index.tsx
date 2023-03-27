import { useContext, useEffect, useState } from 'react';
import HeadChat from '../HeadChat'
import BtnMessages from '../../../CommonComponents/Chat/SendMessageBtn'
import MessageComponent from '../MessageCompoonents';
import LoadingComponent from '../LoadinComponent';
import { contextChat } from '../../../Context/ChatContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperPlane, faPaperclip, faMessage } from '@fortawesome/free-solid-svg-icons';
interface datas {
    OtherUser: any
}

let ChatContext: any;

const Message = (datasOfUser: datas) => {
    ChatContext = useContext(contextChat);
    const [messagesDatas, setMessagesDatas] = useState([{ message: '', senderId: '', LastMsgInConver: false }]);
    let lastSender = [''];

    useEffect(() => {
        setMessagesDatas(ChatContext.messageContent);
    }, [ChatContext.messageContent])

    return (
        <>
            {
                !ChatContext.tooglePage ?
                    <>
                        <div className='w-[95%] mx-auto Chat-Header flex items-center'>
                            <HeadChat name={datasOfUser.OtherUser.email} picture={datasOfUser.OtherUser.picture} />
                        </div>
                        <div className=' w-[95%] h-[76vh] mx-auto flex justify-center items-center'>
                            {
                                ChatContext.loadingMessages ? <LoadingComponent /> :
                                    ((ChatContext.messageContent.length <= 0) ?
                                        <div className='flex flex-col justify-center items-center space-y-2'>
                                            <p className='text-[#8186A0] text-2xl font-bold'>No message, Write SomeThing... </p>
                                            <FontAwesomeIcon className='text-[#8186A0] text-4xl' icon={faMessage} />
                                        </div>
                                        :
                                        <div className='containerMessage flex flex-col space-y-4'>
                                            {
                                                messagesDatas.map((value, index) => (
                                                    <MessageComponent messageContent={value.message} SenderId={value.senderId} lastMesgInConver={value.LastMsgInConver} key={index} />)
                                                )
                                            }
                                        </div>
                                    )
                            }


                        </div>

                        <div className=' w-[95%] mx-auto Chat-Footer flex justify-center items-center space-x-3'>
                            <BtnMessages icone={faSmile} />
                            <BtnMessages icone={faPaperclip} />
                            <textarea name='message' id='ContentMessage'
                                rows={1}
                                className='InputMessage'
                                placeholder="write something ..."
                                onChange={(event) => {
                                    ChatContext.setMessageSender(event.target.value);
                                    ChatContext.setInputMessage(event.target); //save a Input element
                                }} />
                            <BtnMessages icone={faPaperPlane} full={true} _idOtherUser={!ChatContext.tooglePage ? datasOfUser.OtherUser._id : null} />
                        </div>
                    </>
                    :
                    <>
                        <div className=' w-[95%] mx-auto h-[86vh] flex justify-center items-center'>
                            <img src='home-illustration.svg' alt='Chat' className='w-[75%] h-[75%]' />
                        </div>
                        <div className='flex justify-center '>
                            <p className='font-bold text-[#8186A0]'> Catch news from others with Chat-App ...</p>
                        </div>

                    </>
            }
        </>
    )
}

export default Message;