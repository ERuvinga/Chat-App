import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

interface user{
    picture: string ,
    Name : string ,
    descriptions: string
}

const index = (datas: user) => {
    return (
        <div className='flex flex-row justify-between items-center'>    
            <div className=' Container-user flex  justify-start items-center px-5'>
                <img src={datas.picture ? datas.picture : 'profile.png' } className='border imgUser ' alt='user'/> 
                <p className='Names'>
                    <span className=' NameUser'>{datas.Name}</span>
                    <span className=' descriptionUser'>{datas.descriptions}</span>
                </p>
            </div>
            <FontAwesomeIcon icon={faUserEdit} className='Editprofil'/>
        </div>
    );
};

export default index;