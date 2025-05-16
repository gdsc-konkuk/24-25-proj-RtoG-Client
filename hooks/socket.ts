"use client";

import useLiveStore from "@/store/lives";
import { useEffect, useRef, useState } from "react";
import { wsUrl } from "./url";

export type SocketResponse = {
  status: "danger" | "normal" | "hazardous";
  description: string;
  streamId?: string;
};

const useWebSocket = (streamId?: string): SocketResponse | null => {
  const url = wsUrl;
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

// New hook to receive all messages regardless of streamId
const useAllMessagesSocket = (): SocketResponse[] => {
  const url = wsUrl;
  const [messages, setMessages] = useState<SocketResponse[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  const { updateLive } = useLiveStore();

  useEffect(() => {
    if (!url) return;

    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      console.log(`Global WebSocket connection opened to ${url}`);
    };

    socketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data as string) as SocketResponse;
        if (data.status && data.description) {
          console.log("Global message received:", data);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              status: data.status,
              description: data.description,
              streamId: data.streamId,
            },
          ]);

          if (data.streamId) {
            updateLive(data.streamId, (live) => ({
              ...live,
              status: data.status,
            }));
            console.log(
              `Updated live store for streamId: ${data.streamId} with status: ${data.status}`,
            );
          }
        } else {
          console.warn("Received global message with unexpected format:", data);
        }
      } catch (error) {
        console.error(
          "Error parsing global WebSocket message:",
          error,
          event.data,
        );
      }
    };

    socketRef.current.onerror = (error) => {
      console.error("Global WebSocket error:", error);
    };

    socketRef.current.onclose = (event) => {
      console.log(
        "Global WebSocket connection closed:",
        event.code,
        event.reason,
      );
    };

    return () => {
      if (socketRef.current) {
        console.log("Closing global WebSocket connection");
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, [url, updateLive]);

  return messages;
};

export { useAllMessagesSocket, useWebSocket };
