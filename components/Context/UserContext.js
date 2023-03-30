import React from "react";
import { createContext, useState } from "react";

export const UsersChatContext = createContext(null);

function UserContext({ children }) {
    const [OwnerUser, setOwnerUser] = useState(null);
    const [OtherUser, setOtherUser] = useState({});
    return <UsersChatContext.Provider value={{ OwnerUser, setOwnerUser, OtherUser, setOtherUser }}>{children}</UsersChatContext.Provider>
}

export default UserContext;