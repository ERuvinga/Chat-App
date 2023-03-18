import { createContext, useState } from "react";

export const contextChat = createContext(null);

const ChatProviderContext = ({ children }) => {
    const [messaContent, setMessageContent] = useState([]);
    const [_idConversation, set_idConversation] = useState(0);
    const [tooglePage, setTooglePage] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [_idOtherUser, set_idOtherUser] = useState(0);
    return <contextChat.Provider value={{ tooglePage, setTooglePage, selectedUser, setSelectedUser, _idOtherUser, set_idOtherUser, messaContent, setMessageContent, _idConversation, set_idConversation }}>{children}</contextChat.Provider>
};

export default ChatProviderContext;