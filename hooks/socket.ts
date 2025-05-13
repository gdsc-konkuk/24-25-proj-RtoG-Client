"use client";

import { useEffect, useState } from "react";
import { useUrl } from "./useUrl";

type SocketResponse = {
  status: "dangerous" | "normal" | "hazardous";
  description: string;
};

const useWebSocket = (streamId: string) => {
  const url = useUrl(`ws/${streamId}`);
  const [response, setResponse] = useState<SocketResponse | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResponse(data);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  return response;
};

export { useWebSocket };
