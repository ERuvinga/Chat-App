import { createContext, useState } from 'react';
export const socketIoContext = createContext(null);

function SocketContext({ children }) {
    const [io, setIo] = useState(null);
    return <socketIoContext.Provider value={{ io, setIo }}>{children}</socketIoContext.Provider>
}

export default SocketContext;