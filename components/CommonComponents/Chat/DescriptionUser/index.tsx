import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUserFriends, faHeartCirclePlus, faPhone, faCircle, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';


interface friendDesciption {
    picture: string,
    name: string,
    function: string
    idUser: boolean
}

const index = (datas: friendDesciption) => {
    return (
        <>

            <div className=' flex flex-col justify-center Container-user items-center space-y-1'>
                <img src={datas.picture != '' ? datas.picture : 'profile.png'} className='imgFriend' alt='user' />
                <p className='descriptionFriends'>
                    <span className=' nameFriend'>{datas.name != '' ? datas.name : '~'}</span>
                    <span className=' functionFriend'>{datas.function}</span>
                </p>
                {datas.idUser ?
                    <>
                        <div className=' flex flex-col w-[90%] mx-auto space-y-6 '>
                            <div className='flex justify-center items-center space-x-2'>
                                <FontAwesomeIcon className='w-[14px] text-[#00aa00]' icon={faCircle} />
                                <span className=' text-center text-[#8186A0] text-[.7em]'>En ligne</span>
                            </div>
                            <div className=''>
                                <span className=' flex justify-center items-center space-y-2'>
                                    <FontAwesomeIcon className='ViewFriends' icon={faUserPlus} />
                                    <span className=' text-center text-[#8186A0] text-[.9em]'>View Friends</span>
                                </span>
                                <span className=' flex justify-center items-baseline'>
                                    <FontAwesomeIcon className='addFavorite' icon={faUserEdit} />
                                    <span className=' text-center text-[#8186A0] text-[.9em]'>View Uprofile</span>
                                </span>
                            </div>
                        </div>
                    </>
                    :
                    <div className=' w-[90%] flex flex-col space-y-3'>
                        <div className='flex justify-center items-center space-x-2'>
                            <FontAwesomeIcon className='w-[14px] text-[#00aa00]' icon={faCircle} />
                            <span className=' text-center text-[#8186A0] text-[.7em]'>En ligne</span>
                        </div>
                        <div className=" chatAndCall flex justify-around items-center">
                            <span className=' flex flex-col'>
                                <FontAwesomeIcon className='btn_chat' icon={faMessage} />
                                <span className=' text-center text-[#8186A0] text-[.8em] mt-1'>Chat</span>
                            </span>
                            <div className='line'>
                            </div>
                            <span className='flex flex-col'>
                                <FontAwesomeIcon className='btn_call' icon={faPhone} />
                                <span className='text-center text-[#8186A0] text-[.8em] mt-1'>Call</span>
                            </span>
                        </div>
                        <div className=' w-[90%] mx-auto space-y-2'>
                            <span className=' flex justify-start items-baseline'>
                                <FontAwesomeIcon className='ViewFriends' icon={faUserFriends} />
                                <span className=' text-center text-[#8186A0] text-[.9em]'>View Friends</span>
                            </span>
                            <span className=' flex justify-start items-baseline'>
                                <FontAwesomeIcon className='addFavorite' icon={faHeartCirclePlus} />
                                <span className=' text-center text-[#8186A0] text-[.9em]'>Add to favorite</span>
                            </span>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default index;