import { records } from "@/constants";
import { useEffect, useState } from "react";
import { useUrl } from "./useUrl";
import type { DailyRecords, Record as RecordType } from "@/app/records/types";

const useRecords = () => {
  const [data, setData] = useState<DailyRecords[]>(records);
  const url = useUrl("records");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result && result.records) {
          const transformedData: DailyRecords[] = result.records.map((dailyRecord: any) => ({
            date: dailyRecord.date,
            events: dailyRecord.events.map((apiEvent: any): RecordType => ({
              id: apiEvent.eventId,
              title: apiEvent.cctv_name,
              description: apiEvent.address,
              thumbnail_url: apiEvent.thumbnail_url,
              timestamp: apiEvent.timestamp,
            })),
          }));
          setData(transformedData);
        } else {
          // API 응답이 예상과 다르거나 records 필드가 없는 경우 fallback 데이터 사용
          setData(records);
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
