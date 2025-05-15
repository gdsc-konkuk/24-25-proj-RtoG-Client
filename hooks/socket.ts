"use client";

import { useEffect, useRef, useState } from "react";
import { useWsUrl } from "./url";

export type SocketResponse = {
  status: "dangerous" | "normal" | "hazardous";
  description: string;
  streamId?: string;
};

const useWebSocket = (streamId: string): SocketResponse | null => {
  const url = useWsUrl("ws");
  const [socketData, setSocketData] = useState<SocketResponse | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!url) return;

    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      console.log(
        `WebSocket connection opened for streamId: ${streamId} to ${url}`,
      );
    };

    socketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data as string);
        if (data.streamId === streamId && data.status && data.description) {
          console.log("Message received:", data);
          setSocketData({
            status: data.status,
            description: data.description,
            streamId: data.streamId,
          });
        } else if (data.streamId === streamId) {
          console.warn(
            "Received data for streamId but with unexpected format:",
            data,
          );
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error, event.data);
      }
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current.onclose = (event) => {
      console.log("WebSocket connection closed:", event.code, event.reason);
      setSocketData(null);
    };

    return () => {
      if (socketRef.current) {
        console.log(`Closing WebSocket connection for streamId: ${streamId}`);
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, [streamId, url]);

  return socketData;
};

export { useWebSocket };
