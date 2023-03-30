import React from "react";
import { createContext, useState } from "react";

export const UsersChatContext = createContext(null);

function ErrorLog({ children }) {
    const [OwnerUser, setOwnerUser] = useState({});
    const [OtherUser, setOtherUser] = useState({});
    return <UsersChatContext.Provider value={{ OwnerUser, setOwnerUser, OtherUser, setOtherUser }}>{children}</UsersChatContext.Provider>
}

export default ErrorLog;