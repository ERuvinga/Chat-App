import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUserFriends, faHeartCirclePlus, faPhone, faCircle, faUserEdit } from '@fortawesome/free-solid-svg-icons';

// manager of DateTime
import { DescriptionUserTime } from '../../../../lib/Date';

interface friendDesciption {
    picture: string,
    name: string,
    function: string,
    me: boolean,
    status?:boolean,
    lastOnline?: any
}

const index = (datas: friendDesciption) => {
    const DateTimeNow = new Date(Date.now());
    return (
        <>

            <div className='flex flex-col justify-center Container-user items-center space-y-1'>
                <img src={datas.picture != '' ? datas.picture : 'profile.png'} className='imgFriend' alt='user' />
                <p className='descriptionFriends'>
                    <span className=' nameFriend'>{datas.name != '' ? datas.name : '~'}</span>
                    <span className=' functionFriend'>{datas.function}</span>
                </p>
                {datas.me ?
                    <>
                        <div className='flex flex-col items-center w-[90%] mx-auto space-y-6 '>
                            <div className=' w-[95%] flex justify-around'>
                            </div>
                        </div>
                    </>
                    :
                    <div className=' w-[90%] flex flex-col items-center space-y-5'>
                        <div>
                                { datas.status ?
                                    <div className='flex OnlineClass space-x-1'>
                                        <FontAwesomeIcon className='w-[14px] text-[#00aa00]' icon={faCircle} />
                                        <span className='statusUser'>En ligne</span>
                                    </div> :

                                    <div className='statusUser'>
                                        {DescriptionUserTime(datas.lastOnline)}
                                    </div>
                                    
                                }
                        </div>
                        <div className=" chatAndCall flex justify-around items-center">
                            <span className=' text-[.8em] flex flex-col'>
                                <FontAwesomeIcon className='btn_chat' icon={faMessage} />
                                <span className=' text-center text-[#8186A0] mt-1'>Chat</span>
                            </span>
                            <div className='line'>
                            </div>
                            <span className='flex flex-col'>
                                <FontAwesomeIcon className='btn_call' icon={faPhone} />
                                <span className='text-center text-[#8186A0] text-[.8em] mt-1'>Call</span>
                            </span>
                        </div>
                        <div className=' w-[95%] flex justify-around space-x-1 text-[#8186A0]'>
                            <span className='OtherBtns flex justify-around items-center text-[.78em] '>
                                <FontAwesomeIcon icon={faUserFriends} />
                                <span className='ml-2 text-center'>View Friends</span>
                            </span>
                            <span className='OtherBtns flex justify-around items-center text-[.78em] '>
                                <FontAwesomeIcon icon={faHeartCirclePlus} />
                                <span className='ml-2 text-center '>Add to favorite</span>
                            </span>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default index;