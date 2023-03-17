import React from "react";

interface contentMessage {
    messageContent: String,
    SenderId?: String,
}

const MessageComponent = (datas: contentMessage) => {
    return (
        <>
            <div className="border ">{datas.messageContent}</div>
        </>
    )
}

export default MessageComponent;