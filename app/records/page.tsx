"use client";

import { useRecords } from "@/hooks/records";
import CardContainer from "./CardContainer";
import RecordCard from "./RecordCard";

const Dashboard = () => {
  const eventRecords = useRecords();

  return (
    <main className='w-full h-full flex flex-col items-center gap-4 p-4'>
      {eventRecords.map((eventRecord) => (
        <CardContainer key={eventRecord.date} date={eventRecord.date}>
          {eventRecord.events.map((record) => (
            <RecordCard key={record.id} {...record} />
          ))}
        </CardContainer>
      ))}
    </main>
  );
};

export default Dashboard;
