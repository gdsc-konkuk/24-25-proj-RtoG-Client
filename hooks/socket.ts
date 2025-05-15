"use client";

import { useEffect, useState } from "react";
import { serverIp } from "./url";

export type SocketResponse = {
  status: "dangerous" | "normal" | "hazardous";
  description: string;
  cctvId: string;
};

const useWebSocket = (streamId: string): SocketResponse | null => {
  const [response, setResponse] = useState<SocketResponse | null>(null);
  const url = `wss://${serverIp}/ws`;

  useEffect(() => {
    console.log('Connecting to WebSocket:', url);
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log('WebSocket connected successfully');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('WebSocket message received:', data);
      setResponse(data);  // 모든 메시지를 받아서 처리
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);  // streamId 의존성 제거

  return response;
};

export { useWebSocket };