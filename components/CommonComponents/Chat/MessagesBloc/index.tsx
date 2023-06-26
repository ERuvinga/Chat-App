import { useContext, useEffect, useState } from 'react';
import HeadChat from '../HeadChat'
import BtnMessages from '../../../CommonComponents/Chat/SendMessageBtn'
import MessageComponent from '../MessageCompoonents';
import LoadingComponent from '../LoadinComponent';

//import Context of App
import { contextChat } from '../../../Context/ChatContext';
import { UsersChatContext } from '../../../Context/UserContext';

//incones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperPlane, faPaperclip, faMessage } from '@fortawesome/free-solid-svg-icons';

//variables for Context
let ChatContext: any;
let UserContext: any;

const Message = () => {
    ChatContext = useContext(contextChat);
    UserContext = useContext(UsersChatContext);
    const [messagesDatas, setMessagesDatas] = useState([{ message: '', senderId: '', LastMsgInConver: false }]);

    useEffect(() => {
        setMessagesDatas(ChatContext.messageContent);
    }, [ChatContext.messageContent])

    return (
        <>
            {
                !ChatContext.tooglePage ?
                    <div className=' w-[100%]'>
                        <div className='w-[95%] mx-auto Chat-Header flex items-center'>
                            <HeadChat name={UserContext.OtherUser.email} picture={UserContext.OtherUser.picture} />
                        </div>
                        <div className=' w-[95%] h-[78vh] TabletPoint:h-[76vh] mx-auto flex justify-center items-center'>
                            {
                                ChatContext.loadingMessages ? <LoadingComponent /> :
                                    ((ChatContext.messageContent.length <= 0) ?
                                        <div className='flex flex-col justify-center items-center space-y-2'>
                                            <p className='text-[#8186A0] text-2xl font-bold'>No message, Write SomeThing... </p>
                                            <FontAwesomeIcon className='text-[#8186A0] text-4xl' icon={faMessage} />
                                        </div>
                                        :
                                        <div className=' containerMessage flex flex-col space-y-[5px]'>
                                            {
                                                messagesDatas.map((value, index) => (
                                                    <MessageComponent messageContent={value.message} SenderId={value.senderId} lastMesgInConver={value.LastMsgInConver} key={index} />)
                                                )
                                            }
                                        </div>
                                    )
                            }


                        </div>

                        <div className='border w-[95%] mx-auto Chat-Footer flex flex-col sm:flex-row justify-center items-center space-x-3'>
                            <div className='flex justify-center items-center border'>
                                <BtnMessages icone={faSmile} />
                                <BtnMessages icone={faPaperclip} />
                            </div>

                            <div className='flex justify-center items-center border w-[70%]'>
                                <textarea name='message' id='ContentMessage'
                                    rows={1}
                                    className='InputMessage mobile:w-[50%]'
                                    placeholder="write something ..."
                                    onBlur={(event) => {
                                        ChatContext.setMessageSender(event.target.value);
                                        ChatContext.setInputMessage(event.target); //save a Input element
                                        console.log("Value charged");
                                    }} />
                                <BtnMessages icone={faPaperPlane} full={true} _idOtherUser={!ChatContext.tooglePage ? UserContext.OtherUser._id : null} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className=' w-[100%]'>
                        <div className=' w-[95%] mx-auto h-[86vh] flex justify-center items-center'>
                            <img src='home-illustration.svg' alt='Chat' className='w-[75%] h-[75%]' />
                        </div>
                        <div className='flex justify-center '>
                            <p className='font-bold text-[#8186A0]'> Catch news from others with Chat-App ...</p>
                        </div>

                    </div>
            }
        </>
    )
}

export default Message;