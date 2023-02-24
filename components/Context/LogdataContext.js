import React from "react";
import { createContext, useState } from "react";

export const ErrorLogContext = createContext(null);

function ErrorLog({ children }) {
    const [Error, setError] = useState({});
    return <ErrorLogContext.Provider value={{ Error, setError }}>{children}</ErrorLogContext.Provider>
}

export default ErrorLog;