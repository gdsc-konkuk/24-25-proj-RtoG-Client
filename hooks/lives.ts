import { lives } from "@/constants";
import { useUrl } from "./useUrl";
import { useEffect, useState } from "react";

const useLives = () => {
  const [data, setData] = useState(lives);
  const url = useUrl("lives");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.cctvs || lives);
    };
    fetchData();
  }, [url]);

  return data;
};

export { useLives };
