import { createContext, useState } from "react";

export const contextChat = createContext(null);

const ChatProviderContext = ({ children }) => {
    const [messaContent, setMessageContent] = useState("");
    const [tooglePage, setTooglePage] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [_idOtherUser, set_idOtherUser] = useState(0);
    return <contextChat.Provider value={{ tooglePage, setTooglePage, selectedUser, setSelectedUser, _idOtherUser, set_idOtherUser, messaContent, setMessageContent }}>{children}</contextChat.Provider>
};

export default ChatProviderContext;