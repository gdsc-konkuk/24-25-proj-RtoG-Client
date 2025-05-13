"use client";

import { useLives } from "@/hooks/lives";
import CCTVCard from "./CCTVCard";

const Dashboard = () => {
  const cctvData = useLives();

  return (
    <main className='w-full h-fit p-8 flex flex-col gap-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-fit mx-auto justify-items-start'>
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
