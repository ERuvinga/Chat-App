import { createContext, useState } from "react";

export const contextChat = createContext(null);

const ChatProviderContext = ({ children }) => {
    //messages
    const [loadingMessages, setLoadingMessage] = useState(true); //state of loading messages in database
    const [messageSender, setMessageSender] = useState(''); // state content all messages in one conversation
    const [messageContent, setMessageContent] = useState([]); // state content all messages in one conversation
    const [msgBlocReload, setMsgBlocReload] = useState(0); // state reload message
    const [_idConversation, set_idConversation] = useState(null); // state save a id of one Conversation
    //page
    const [tooglePage, setTooglePage] = useState(true); // state of pages
    const [InputMessage, setInputMessage] = useState(null); // state content a texteare Element
    //Users
    const [_idOwnerUser, set_idOwnerUser] = useState();
    const [selectedUser, setSelectedUser] = useState(null); //state of user selected for conversation
    const [_idOtherUser, set_idOtherUser] = useState(0); //save a id of an other user
    return <contextChat.Provider
        value={{
            InputMessage, setInputMessage,
            _idOwnerUser, set_idOwnerUser,
            _idOtherUser, set_idOtherUser,
            selectedUser, setSelectedUser,
            tooglePage, setTooglePage,

            _idConversation, set_idConversation,
            messageSender, setMessageSender,
            messageContent, setMessageContent,
            msgBlocReload, setMsgBlocReload,
            loadingMessages, setLoadingMessage

        }}>{children}</contextChat.Provider>
};

export default ChatProviderContext;