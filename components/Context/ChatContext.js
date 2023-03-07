import { createContext, useState } from "react";

export const contextChat = createContext(null);

const ChatProviderContext = ({ children }) => {
    const [tooglePage, setTooglePage] = useState(true);
    return <contextChat.Provider value={{ tooglePage, setTooglePage }}>{children}</contextChat.Provider>
};

export default ChatProviderContext;