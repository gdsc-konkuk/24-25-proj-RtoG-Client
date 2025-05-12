"use client";

import CCTVCard from "./CCTVCard";

const Dashboard = () => {
  const cctvData = [
    {
      streamId: "1",
      title: "Live 1",
      description: "Live stream 1 description",
      hasWildfireEvent: true,
    },
    {
      streamId: "2",
      title: "Live 2",
      description: "Live stream 2 description",
    },
    {
      streamId: "3",
      title: "Live 3",
      description: "Live stream 3 description",
      hasWildfireEvent: true,
    },
    {
      streamId: "4",
      title: "Live 4",
      description: "Live stream 4 description",
    },
    {
      streamId: "5",
      title: "Live 5",
      description: "Live stream 5 description",
    },
    {
      streamId: "6",
      title: "Live 6",
      description: "Live stream 6 description",
      hasWildfireEvent: true,
    },
    {
      streamId: "7",
      title: "Live 7",
      description: "Live stream 7 description",
    },
    {
      streamId: "8",
      title: "Live 8",
      description: "Live stream 8 description",
    },
  ];

  return (
    <main className='w-full h-fit p-8 flex flex-col gap-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-fit mx-auto justify-items-start'>
        {cctvData.map((cctv) => (
          <CCTVCard
            key={cctv.streamId}
            streamId={cctv.streamId}
            title={cctv.title}
            description={cctv.description}
            hasWildfireEvent={cctv.hasWildfireEvent}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
