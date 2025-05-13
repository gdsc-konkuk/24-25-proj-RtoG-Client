import { records } from "@/constants";
import { useEffect, useState } from "react";
import { useUrl } from "./useUrl";

const useRecords = () => {
  const [data, setData] = useState(records);
  const url = useUrl("records");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.cctvs || records);
      } catch (error) {
        console.error("Failed to fetch records:", error);
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export { useRecords };
