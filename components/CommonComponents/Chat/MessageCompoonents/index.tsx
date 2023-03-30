import React, { useContext, useState } from "react";
import { contextChat } from "../../../Context/ChatContext";

interface contentMessage {
    messageContent: String,
    SenderId?: String,
    lastMesgInConver: boolean
}
let ChatContext: any;

const MessageComponent = (datas: contentMessage) => {
    ChatContext = useContext(contextChat);
    console.log(ChatContext);
    return (
        (ChatContext._idOwnerUser !== datas.SenderId) ?
            <div className="border BlocMessage flex items-end space-x-1">
                <div className=" w-[15px]">
                    <img src="profile.png" alt="imageUser" className={datas.lastMesgInConver ? "imageMessage" : "hidden"} />
                </div>
                <span className='otherUser text-[.74em]'>{datas.messageContent}</span>
            </div>
            :
            <div className="border BlocMessage mr-2 flex items-end justify-end space-x-1 self-end ">
                <span className=" OwnerUser text-[.74em] ">{datas.messageContent}</span>
                <div className=" w-[15px]">
                    <img src="profile.png" alt="imageUser" className={datas.lastMesgInConver ? "imageMessage" : "hidden"} />
                </div>
            </div>
    )
}

export default MessageComponent;