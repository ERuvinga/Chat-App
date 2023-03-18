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
        <>
            <div className={(ChatContext._idOwnerUser === datas.SenderId) ? "border OwnerUser p-1 text-[.9em] font-normal" : "border otherUser p-1 text-[.9em] font-normal"}>{datas.messageContent}</div>
        </>
    )
}

export default MessageComponent;