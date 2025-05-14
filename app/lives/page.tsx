"use client";

import { useLives } from "@/hooks/lives";
import CCTVCard from "./CCTVCard";
import useLiveStore from "@/store/lives";
import { useEffect } from "react";

const Dashboard = () => {
  const cctvs = useLives();
  const setLives = useLiveStore((state) => state.setLives);

  useEffect(() => {
    setLives(cctvs);
  }, [cctvs, setLives]);

  return (
    <main className='w-full h-fit p-8 flex flex-col gap-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-fit justify-items-start'>
        {cctvs.map(({ id, name, address, status }) => (
          <CCTVCard
            key={id}
            id={id}
            name={name}
            address={address}
            status={status}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
