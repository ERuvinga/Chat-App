import React, { useContext } from "react";
import { contextChat } from "../../../Context/ChatContext";

interface contentMessage {
    messageContent: String,
    SenderId?: String,
}
let ChatContext: any;

const MessageComponent = (datas: contentMessage) => {
    ChatContext = useContext(contextChat);

    return (
        (ChatContext._idOwnerUser === datas.SenderId) ?
            <div className="border flex items-end space-x-1">
                <img src="profile.png" alt="imageUser" className="imageMessage " />
                <span className='otherUser text-[.74em]'>{datas.messageContent}</span>
            </div>
            :
            <>
                <span className=" OwnerUser text-[.74em] self-end ">{datas.messageContent}</span>
            </>
    )
}

export default MessageComponent;