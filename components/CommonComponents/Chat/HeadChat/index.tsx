import { useContext, useEffect } from 'react';
import { faBell, faHeart, faCircle, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Context Datas
import { contextChat } from '../../../Context/ChatContext';
import { socketIoContext } from '../../../Context/socket';
import { UsersChatContext } from '../../../Context/UserContext';

// date Functions 
import { DescriptionUserTime } from '../../../../lib/Date';

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
    
    useEffect(()=>{
        SocketContext.socketIo.on('user_Connected', (newUser: any)=>{
            try{
                if(newUser.userId === UsersContext.OtherUser._id){
                    ChatContext.setReloadStatusOtherUser(1 - ChatContext.ReloadStatusOtherUser); // updating ReloadStatusOtherUser to reloading data of user
                }
            }
            catch{
                console.log("Error in App");
            }

        });

        SocketContext.socketIo.on('user_disconnected', (logoutUser: any)=>{
            try{
                if(logoutUser.userId === UsersContext.OtherUser._id){
                    ChatContext.setReloadStatusOtherUser(1 - ChatContext.ReloadStatusOtherUser); // updating ReloadStatusOtherUser to reloading data of user
                }
            }
            catch{
                console.log("Error in App");
            }
        })
    
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
                                <div className='OnlineClass flex items-center space-x-2'>
                                    <FontAwesomeIcon className='w-[14px] text-[#00aa00]' icon={faCircle} />
                                    <span className=' text-center text-[#8186A0] text-[.7em]'>En ligne</span>
                                </div>            
                            </>:
                            <>
                                <div className='containerOffLine'>
                                    <span className='OfflineClass text-[#8186A0] text-[.7em]'>{DescriptionUserTime(datas.lastOnline)}</span>
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