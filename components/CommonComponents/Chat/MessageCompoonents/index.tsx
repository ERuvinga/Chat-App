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
            <div className="BlocMessage max-w-[90%] md:max-w-[60%] flex items-end space-x-1">
                <div className="mb-3 w-[22px] h-[22px]">
                    <img src={UserContext.OtherUser.picture ? UserContext.OtherUser.picture : 'profile.png'} alt="imageUser" className={datas.lastMesgInConver ? "imageMessage" : "hidden"} />
                </div>
                <span className={datas.lastMesgInConver ? 'mb-3 otherUser text-[.9em]' :'otherUser text-[.9em]'}>{datas.messageContent}</span>
            </div>
            :
            <div className=" BlocMessage max-w-[90%] md:max-w-[60%] mr-2 flex items-end justify-end space-x-1 self-end ">
                <span  className={datas.lastMesgInConver ? " mb-3 OwnerUser text-[.9em] " :" OwnerUser text-[.9em] "}>{datas.messageContent}</span>
                <div className=" mb-3 w-[22px] h-[22px] ">
                    <img src={UserContext.OwnerUser.picture ? UserContext.OwnerUser.picture : 'profile.png'} alt="imageUser" className={datas.lastMesgInConver ? "imageMessage" : "hidden"} />
                </div>
            </div>
    )
}

export default MessageComponent;