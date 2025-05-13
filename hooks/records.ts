import { records } from "@/constants";
import { useEffect, useState } from "react";
import { useUrl } from "./useUrl";

const useRecords = () => {
  const [data, setData] = useState(records);
  const url = useUrl("records");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.cctvs || records);
    };
    fetchData();
  }, [url]);

  return data;
};

export { useRecords };
