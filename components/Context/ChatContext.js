import { createContext, useState } from "react";

export const contextChat = createContext(null);

const ChatProviderContext = ({ children }) => {
    const [tooglePage, setTooglePage] = useState(true);
    const [selectedUser, setSelectedUser] = useState(0);
    return <contextChat.Provider value={{ tooglePage, setTooglePage, selectedUser, setSelectedUser }}>{children}</contextChat.Provider>
};

export default ChatProviderContext;