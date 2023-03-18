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
        <span className={(ChatContext._idOwnerUser === datas.SenderId) ? " OwnerUser self-end text-[.74em] font-normal" : " otherUser text-[.74em] font-normal"}>{datas.messageContent}</span>
    )
}

export default MessageComponent;