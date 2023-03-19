import React from 'react';

interface UserDatas {
    picture: string,
    name: string,

}
const index = (datas: UserDatas) => {
    return (
        <div className='mx-2 flex justify-start items-center py-2'>
            <img src={datas.picture ? datas.picture : 'profile.png'} className='imgChat' alt='user' />
            <span className='font-bold text-2 text-[#5843E4]'>{datas.name}</span>
        </div>
    );
};

export default index;