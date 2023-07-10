import React from "react";
import { createContext, useState } from "react";

export const ContextUser = createContext(null);

function ErrorLog({ children }) {
    const [data, setData] = useState({ stateError: false, MessageError: 'Error', validateError: false });
    const [Loading, setLaoding] = useState(false);
    const [disableBtn, setDisablebtn] = useState(true);
    let idSetTimeOut = null;
    return <ContextUser.Provider 
                value={
                        { 
                            data, setData, 
                            Loading, setLaoding,
                            disableBtn, setDisablebtn,
                            idSetTimeOut, 
                        }
                    }>
                {children}
            </ContextUser.Provider>
}

export default ErrorLog;