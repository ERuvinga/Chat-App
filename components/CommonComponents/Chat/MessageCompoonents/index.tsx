import React, { useContext } from "react";
import { contextChat } from "../../../Context/ChatContext";

interface contentMessage {
    messageContent: String,
    SenderId?: String,
}
let ChatContext: any;

const MessageComponent = (datas: contentMessage) => {
    ChatContext = useContext(contextChat);
    console.log(`${ChatContext._idOwnerUser}, ${datas.SenderId}`);
    return (
        <span className={(ChatContext._idOwnerUser === datas.SenderId) ? " OwnerUser p-1 text-[.74em] font-normal" : "border otherUser p-1 text-[.74em] font-normal"}>{datas.messageContent}</span>
    )
}

export default MessageComponent;