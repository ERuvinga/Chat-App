import React from 'react';

interface user {
    picture: string,
    Name: string,
    descriptions: string
}

const index = (datas: user) => {
    return (
        <div className='hidden TabletPoint:flex flex-row justify-between Container-user items-center my-4 md_lg:ml-3'>
            <div className=' w-5/6 flex justify-start items-center'>
                <img src={datas.picture ? datas.picture : 'profile.png'} className='imgUser' alt='user' />
                <p className='Names'>
                    <span className=' NameUser'>{datas.Name !== '' ? datas.Name : '~'}</span>
                    <span className=' descriptionUser'>{datas.descriptions}</span>
                </p>
            </div>
        </div>
    );
};

export default index;