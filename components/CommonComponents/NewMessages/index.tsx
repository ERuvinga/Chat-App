import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0 } from '@fortawesome/free-solid-svg-icons';

interface NewMessages{
    name: string,
    picture: string,
    contentMessage: string
}

const index = ( datas: NewMessages) => {
    return (
        <div className='flex flex-row justify-between Container-user items-center my-6'>    
            <div className=' ContainerMessage flex  justify-start items-center '>
                <img src={datas.picture ? datas.picture : 'profile.png' } className=' imgUserMessage ' alt='user'/> 
                <p className='MessageContent flex flex-col '>
                    <span className='UsersendMessage'>{datas.name}</span>
                    <span className=' messages'>{datas.contentMessage}</span>
                </p>
                <div className=' w-1/6 flex flex-col justify-center items-center space-y-3 mx-auto'>
                    <span className='Date'>18.32 AM</span>
                    <span className='numberMessages'>1</span>
                </div>
            </div>
        </div>
    );
};

export default index;