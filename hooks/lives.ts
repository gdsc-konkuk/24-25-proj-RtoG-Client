import { DetailedLive } from "@/app/lives/types";
import { useEffect, useState } from "react";
import { useApiUrl } from "./url";

const useLives = () => {
  const [data, setData] = useState<DetailedLive[]>([]);
  const url = useApiUrl("lives/latest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result || []);
      } catch (error) {
        console.error("Failed to fetch lives:", error);
        // Keep using the fallback data (lives)
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval for periodic refresh
    const intervalId = setInterval(fetchData, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [url]);

  return data;
};

const useLiveFor = (id: string) => {
  const [data, setData] = useState<DetailedLive>();
  const url = useApiUrl(`lives/${id}/latest`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch lives:", error);
        // Keep using the fallback data (lives)
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval for periodic refresh
    const intervalId = setInterval(fetchData, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [url]);

  return data;
};

export { useLiveFor, useLives };
