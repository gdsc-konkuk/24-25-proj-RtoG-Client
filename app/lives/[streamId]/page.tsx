"use client";

import { useLiveFor } from "@/hooks/lives";
import { useApiUrl } from "@/hooks/url";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import Summary from "./Summary";

const LivePage = () => {
  const { streamId } = useParams();
  const response = useLiveFor(streamId as string);
  const router = useRouter();

  return (
    <main className='w-full h-full p-8 flex flex-col items-center gap-12'>
      <div className='flex items-center gap-4 w-full'>
        <div className='text-xl font-bold w-fit break whitespace-nowrap'>
          {response ? response.cctv_name : <Skeleton width={100} height={20} />}
        </div>
        <div className='text-md w-full'>
          {response ? response.address : <Skeleton width={100} height={20} />}
        </div>
        <IoClose
          className='text-2xl w-fit hover:cursor-pointer'
          onClick={() => router.back()}
        />
      </div>
      <div className='w-full max-w-4xl aspect-video relative bg-black rounded-lg overflow-hidden'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={useApiUrl(`lives/${streamId}`)}
          alt='CCTV'
          className='object-cover'
        />
      </div>

      <Summary
        description={response?.description}
        event_type={response?.event_type}
      />
    </main>
  );
};

export default LivePage;
