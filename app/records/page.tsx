import CardContainer from "./CardContainer";
import { EventRecord } from "./types";
import RecordCard from "./RecordCard";

const Dashboard = () => {
  const eventRecords: EventRecord[] = [
    {
      date: "2024-01-01",
      events: [
        { id: "1", title: "Record 1", description: "Description 1" },
        { id: "2", title: "Record 2", description: "Description 2" },
      ],
    },
    {
      date: "2024-01-02",
      events: [
        { id: "3", title: "Record 3", description: "Description 3" },
        { id: "4", title: "Record 4", description: "Description 4" },
      ],
    },
    {
      date: "2024-01-03",
      events: [
        { id: "5", title: "Record 5", description: "Description 5" },
        { id: "6", title: "Record 6", description: "Description 6" },
        { id: "7", title: "Record 7", description: "Description 7" },
      ],
    },
  ];

  return (
    <main className='w-full h-full flex flex-col items-center gap-4 p-4'>
      {eventRecords.map((eventRecord) => (
        <CardContainer key={eventRecord.date} date={eventRecord.date}>
          {eventRecord.events.map((event) => (
            <RecordCard key={event.id} streamId={event.id} />
          ))}
        </CardContainer>
      ))}
    </main>
  );
};

export default Dashboard;
