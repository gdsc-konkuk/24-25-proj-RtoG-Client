import { lives } from "@/constants";
import { useApiUrl } from "./url";
import { useEffect, useState } from "react";

const useLives = () => {
  const [data, setData] = useState(lives);
  const url = useApiUrl("lives");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.cctvs || lives);
      } catch (error) {
        console.error("Failed to fetch lives:", error);
        // Keep using the fallback data (lives)
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export { useLives };
