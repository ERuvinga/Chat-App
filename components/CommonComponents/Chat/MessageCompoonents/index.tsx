import React from "react";

interface contentMessage {
    messageContent: String,
    SenderId?: String,
}

const MessageComponent = (datas: contentMessage) => {
    return (
        <>
            <div className="border p-1 text-[.9em] font-normal">{datas.messageContent}</div>
        </>
    )
}

export default MessageComponent;