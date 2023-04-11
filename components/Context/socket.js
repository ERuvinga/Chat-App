import { createContext, useState } from 'react';
export const socketIoContext = createContext(null);

function SocketContext({ children }) {
    const [socketIo, setIo] = useState(null);
    return <socketIoContext.Provider value={{ socketIo, setIo }}>{children}</socketIoContext.Provider>
}

export default SocketContext;