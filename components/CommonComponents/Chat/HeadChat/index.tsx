import React, { useContext } from 'react';
import { faBell, faClose, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contextChat } from '../../../Context/ChatContext';

interface UserDatas {
    picture: string,
    name: string,
}

let ChatContext: any;
const Index = (datas: UserDatas) => {
    ChatContext = useContext(contextChat);

    return (
        < div className=' w-[100%] flex items-center justify-between'>
            <div className=' ml-2 flex justify-start items-center py-2'>
                <img src={datas.picture ? datas.picture : 'profile.png'} className='imgChat' alt='user' />
                <span className='font-bold text-2 text-[#5843E4]'>{datas.name}</span>
            </div>
            <div className='flex mr-2 text-[#8186A0] text-[1em]  space-x-4'>
                <FontAwesomeIcon className="ChatHeadBtns" icon={faClose} onClick={() => {
                    ChatContext.setSelectedUser(null);
                    ChatContext.set_idOtherUser(0);
                    ChatContext.setTooglePage(true);
                }} />
                <FontAwesomeIcon className='ChatHeadBtns' icon={faHeart} />
                <FontAwesomeIcon className='ChatHeadBtns' icon={faBell} />
            </div>
        </div>
    );
};

export default Index;