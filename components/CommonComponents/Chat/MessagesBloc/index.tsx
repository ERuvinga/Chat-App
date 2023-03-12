import HeadChat from '../HeadChat'
import BtnMessages from '../../../CommonComponents/Chat/SendMessageBtn'
import { faSmile, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { contextChat } from '../../../Context/ChatContext';

interface datas {
    OtherUser: any
}

let ChatContext: any;

const Message = (datasOfUser: datas) => {
    ChatContext = useContext(contextChat);
    console
    return (
        <>
            {
                !ChatContext.tooglePage ?
                    <>
                        <div className='w-[95%] mx-auto Chat-Header flex items-center'>
                            <HeadChat name={datasOfUser.OtherUser.email} picture={datasOfUser.OtherUser.picture} />
                        </div>
                        <div className=' w-[95%] mx-auto Chat-Body'>

                        </div>
                    </>
                    :
                    <div className=' w-[95%] mx-auto h-[86vh] flex justify-center items-center'>
                        <img src='home-illustration.svg' alt='Chat' className='w-[75%] h-[75%]' />
                    </div>
            }




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
    )
}

export default Message;