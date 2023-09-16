import { useContext, useEffect } from 'react';
import { faBell, faHeart, faCircle, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Context Datas
import { contextChat } from '../../../Context/ChatContext';
import { socketIoContext } from '../../../Context/socket';
import { UsersChatContext } from '../../../Context/UserContext';

interface UserDatas {
    picture: string,
    name: string,
    status:boolean,
    lastOnline:any,
}

let ChatContext: any;
let SocketContext: any;
let UsersContext: any;

const Index = (datas: UserDatas) => {
    ChatContext = useContext(contextChat);
    SocketContext = useContext(socketIoContext);
    UsersContext = useContext(UsersChatContext);

    const dataTime = new Date(datas.lastOnline);
    console.log(ChatContext);

    useEffect(()=>{
        console.log("Reloading data");
        fetch(`${process.env.API_LINK}/api/user/${ChatContext._idOtherUser}`, {
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json; charset=UTF-8',
                "Autorization": `Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(dataUser => {
                if (dataUser.ok) {
                    dataUser.json()
                        .then(dataOtherUser => {
                            UsersContext.setOtherUser(dataOtherUser.datas); // reload dataof any user whene disconnected
                            console.log(dataOtherUser)
                        })
                }
            })
            .catch(error => {
                console.error(error);
            });
    
    },[SocketContext.socketIo])

    return (
        <div className=' w-[100%] flex items-center justify-between'>
            <div className=' ml-2 flex justify-start items-center space-x-3 py-2'>
                <div className='flex items-center text-[#8186A0] text-[1em] space-x-3'>
                    <FontAwesomeIcon className="ChatHeadBtns" icon={faAngleLeft} onClick={() => {
                        ChatContext.set_idOtherUser(0);
                        ChatContext.setSelectedUser(null);
                        ChatContext.setTooglePage(true);
                    }} />
                    <img src={datas.picture ? datas.picture : 'profile.png'} className='imgChat' alt='user' />                    
                </div>

                <div>
                    <span className='font-bold text-2 text-[#5843E4]'>{datas.name}</span>
                    {
                        datas.status?
                            <>
                                <div className='flex items-center space-x-2'>
                                    <FontAwesomeIcon className='w-[14px] text-[#00aa00]' icon={faCircle} />
                                    <span className=' text-center text-[#8186A0] text-[.7em]'>En ligne</span>
                                </div>            
                            </>:
                            <>
                                <div className='flex items-center space-x-2'>
                                    <span className=' text-center text-[#8186A0] text-[.7em]'>{dataTime.toLocaleDateString()}</span>
                                </div>            
                            </>            
                    }

                </div>
            </div>

            <div className='flex mr-2 text-[#8186A0] text-[1em]  space-x-4'>
                <FontAwesomeIcon className='ChatHeadBtns' icon={faHeart} />
                <FontAwesomeIcon className='ChatHeadBtns' icon={faBell} />
            </div>
        </div>
    );
};

export default Index;