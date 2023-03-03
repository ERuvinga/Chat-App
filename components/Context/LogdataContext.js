import React from "react";
import { createContext, useState } from "react";

export const ContextUser = createContext(null);

function ErrorLog({ children }) {
    const [data, setData] = useState({ stateError: false, MessageError: 'Error' });
    const [Loading, setLaoding] = useState(false);
    const [disableBtn, setDisablebtn] = useState(true);
    return <ContextUser.Provider value={{ data, setData, Loading, setLaoding, disableBtn, setDisablebtn }}>{children}</ContextUser.Provider>
}

export default ErrorLog;