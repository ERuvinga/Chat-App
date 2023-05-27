import React, { useContext, useState } from "react";
import { contextChat } from "../../../Context/ChatContext";
import { UsersChatContext } from "../../../Context/UserContext";

interface contentMessage {
    messageContent: String,
    SenderId?: String,
    lastMesgInConver: boolean
}
let ChatContext: any;
let UserContext: any;

const MessageComponent = (datas: contentMessage) => {
    ChatContext = useContext(contextChat);
    UserContext = useContext(UsersChatContext);

    return (
        (ChatContext._idOwnerUser !== datas.SenderId) ?
            <div className=" BlocMessage max-w-[75%] md:max-w-[40%] flex items-end space-x-1">
                <div className="w-[17px] h-[17px]">
                    <img src={UserContext.OtherUser.picture ? UserContext.OtherUser.picture : 'profile.png'} alt="imageUser" className={datas.lastMesgInConver ? "imageMessage" : "hidden"} />
                </div>
                <span className='otherUser text-[.74em]'>{datas.messageContent}</span>
            </div>
            :
            <div className=" BlocMessage max-w-[75%] md:max-w-[40%] mr-2 flex items-end justify-end space-x-1 self-end ">
                <span className=" OwnerUser text-[.74em] ">{datas.messageContent}</span>
                <div className="w-[17px] h-[17px] ">
                    <img src={UserContext.OwnerUser.picture ? UserContext.OwnerUser.picture : 'profile.png'} alt="imageUser" className={datas.lastMesgInConver ? "imageMessage" : "hidden"} />
                </div>
            </div>
    )
}

export default MessageComponent;