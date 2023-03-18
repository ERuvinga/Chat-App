import HeadChat from '../HeadChat'
import BtnMessages from '../../../CommonComponents/Chat/SendMessageBtn'
import MessageComponent from '../MessageCompoonents';
import { faSmile, faPaperPlane, faPaperclip, faMessage } from '@fortawesome/free-solid-svg-icons';

import { useContext, useEffect, useState } from 'react';
import { contextChat } from '../../../Context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface datas {
    OtherUser: any
}

let ChatContext: any;

const Message = (datasOfUser: datas) => {
    ChatContext = useContext(contextChat);
    const [messagesDatas, setMessagesDatas] = useState([{ message: '', senderId: '' }]);

    useEffect(() => {
        setMessagesDatas(ChatContext.messaContent);
    }, [ChatContext.messaContent])

    return (
        <>
            {
                !ChatContext.tooglePage ?
                    <>
                        <div className='w-[95%] mx-auto Chat-Header flex items-center'>
                            <HeadChat name={datasOfUser.OtherUser.email} picture={datasOfUser.OtherUser.picture} />
                        </div>
                        <div className=' w-[95%] h-[76vh] mx-auto flex justify-center items-center Chat-Body'>
                            {
                                (ChatContext.messaContent.length === 0) ?
                                    <div className='flex flex-col justify-center items-center space-y-2'>
                                        <p className='text-[#8186A0] text-2xl font-bold'>No message, Write SomeThing... </p>
                                        <FontAwesomeIcon className='text-[#8186A0] text-4xl' icon={faMessage} />
                                    </div>
                                    :
                                    <div>
                                        {
                                            messagesDatas.map((value, index) => <MessageComponent messageContent={value.message} SenderId={value.senderId} key={index} />)
                                        }
                                    </div>

                            }

                        </div>

                        <div className=' w-[95%] mx-auto Chat-Footer flex justify-center items-center space-x-2'>
                            <BtnMessages icone={faSmile} />
                            <BtnMessages icone={faPaperclip} />
                            <input name='message' type='text' className='InputMessage'
                                placeholder="Write something ..."
                                onChange={(event) => {
                                    ChatContext.setMessageContent(event.target.value);
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