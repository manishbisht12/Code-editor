import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity, // corrected key, use number Infinity instead of string
        timeout: 10000,
        transports: ['websocket'],
    };
    // Use env variable or fallback to localhost
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    return io(backendUrl, options);
};
