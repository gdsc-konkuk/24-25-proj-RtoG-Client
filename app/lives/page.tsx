"use client";

import { useLives } from "@/hooks/lives";
import CCTVCard from "./CCTVCard";

const Dashboard = () => {
  const cctvs = useLives();

  return (
    <main className='w-full h-fit p-8 flex flex-col gap-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-fit justify-items-start'>
        {cctvs.map((cctv) => (
          <CCTVCard key={cctv.cctv_name} {...cctv} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
