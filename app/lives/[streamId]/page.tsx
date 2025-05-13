"use client";

import { useWebSocket } from "@/hooks/socket";
import { useUrl } from "@/hooks/useUrl";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Summary from "./Summary";
import useLiveStore from "@/store/lives";

const LivePage = () => {
  const { streamId } = useParams();
  const response = useWebSocket(streamId as string);
  const router = useRouter();
  const live = useLiveStore((state) => state.getLive(streamId as string));

  return (
    <main className='w-full h-full p-8 flex flex-col items-center gap-12'>
      <div className='flex items-center gap-4 w-full'>
        <div className='text-xl font-bold w-fit break whitespace-nowrap'>
          {live?.name || "CCTV name"}
        </div>
        <div className='text-md w-full'>
          {live?.address || "Address of the CCTV"}
        </div>
        <IoClose
          className='text-2xl w-fit hover:cursor-pointer'
          onClick={() => router.back()}
        />
      </div>
      <div className='w-full max-w-4xl aspect-video relative bg-black rounded-lg overflow-hidden'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={useUrl(`lives/${streamId}`)}
          alt='CCTV'
          className='object-cover'
        />
      </div>

      <Summary response={response} />
    </main>
  );
};

export default LivePage;
