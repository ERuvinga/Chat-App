import HeadChat from '../HeadChat'
import BtnMessages from '../../../CommonComponents/Chat/SendMessageBtn'
import { faSmile, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface statePage {
    indexPage: boolean
}

const Message = (UserState: statePage) => {
    const [indexPage, setPage] = useState(UserState.indexPage);
    return (
        <>
            {
                !indexPage ?
                    <>
                        <div className='w-[95%] mx-auto Chat-Header flex items-center'>
                            <HeadChat name='Dianne Vanhorn' picture='' />
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
                <input name='message' type='text' className='InputMessage' placeholder="Write something ..." />
                <BtnMessages icone={faPaperPlane} full={true} />
            </div>
        </>
    )
}

export default Message;