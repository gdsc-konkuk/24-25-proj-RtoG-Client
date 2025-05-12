'use client';

import { useEffect, useState } from 'react';

const useSocket = (streamId: string) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [progress, setProgress] = useState<number | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    
    useEffect(() => {
        const socket = new WebSocket(
            `wss://localhost:3000/api/v1/video/ws/${streamId}`
        );

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setImageSrc(data.imageSrc);
            setStatus(data.status);
            setProgress(data.progress);
            setMessage(data.message);
        };

        return () => {
            socket.close();
        };
    }, [streamId]);

    return { imageSrc, status, progress, message };
};

export default useSocket;
