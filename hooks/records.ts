import type { DailyRecords } from "@/app/records/types";
import { records } from "@/constants";
import { useEffect, useState } from "react";
import { useApiUrl } from "./url";

const useRecords = () => {
  const [data, setData] = useState<DailyRecords[]>(records);
  const url = useApiUrl("records");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { records: responseRecords } = await response.json();

        if (responseRecords) {
          setData(responseRecords);
        }
      } catch (error) {
        console.error("Failed to fetch records:", error);
        // 에러 발생 시 fallback 데이터 사용
        setData(records);
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export { useRecords };
