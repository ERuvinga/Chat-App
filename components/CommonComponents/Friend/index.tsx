import React from 'react';

interface friendDesciption{
    picture: string,
    name : string,
    function: string
}

const index = (datas: friendDesciption) => {
    return (
        <div className='border flex flex-col justify-center Container-user items-center space-y-3'>    
                <img src={datas.picture ? datas.picture : 'profile.png' } className='imgFriend' alt='user'/> 
                <p className='descriptionFriends'>
                    <span className=' nameFriend'>{datas.name}</span>
                    <span className=' functionFriend'>{datas.function}</span>
                </p>
            </div>
    );
};

export default index;