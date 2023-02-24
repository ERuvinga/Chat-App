import React from "react";
import { createContext, useState } from "react";

export const ErrorLogContext = createContext(null);

function ErrorLog({ children }) {
    const [data, setData] = useState({ stateError: true, MessageError: 'Error' });
    return <ErrorLogContext.Provider value={{ data, setData }}>{children}</ErrorLogContext.Provider>
}

export default ErrorLog;