import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

interface user {
    picture: string,
    Name: string,
    descriptions: string
}

const index = (datas: user) => {
    return (
        <div className='flex flex-row justify-between Container-user items-center mt-3'>
            <div className=' w-5/6 flex justify-start items-center'>
                <img src={datas.picture ? datas.picture : 'profile.png'} className='imgUser' alt='user' />
                <p className='Names'>
                    <span className=' NameUser'>{datas.Name != '' ? datas.Name : '~'}</span>
                    <span className=' descriptionUser'>{datas.descriptions}</span>
                </p>
            </div>
        </div>
    );
};

export default index;