"use client";

import { useWebSocket } from "@/hooks/socket";
import { useApiUrl } from "@/hooks/url";
import useLiveStore from "@/store/lives";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Summary from "./Summary";
import Skeleton from "react-loading-skeleton";

const LivePage = () => {
  const { streamId } = useParams();
  const response = useWebSocket(streamId as string);
  const router = useRouter();
  const live = useLiveStore((state) => state.getLive(streamId as string));

  return (
    <main className='w-full h-full p-8 flex flex-col items-center gap-12'>
      <div className='flex items-center gap-4 w-full'>
        <div className='text-xl font-bold w-fit break whitespace-nowrap'>
          {live?.name ? live.name : <Skeleton width={100} height={20} />}
        </div>
        <div className='text-md w-full'>
          {live?.address ? live.address : <Skeleton width={100} height={20} />}
        </div>
        <IoClose
          className='text-2xl w-fit hover:cursor-pointer'
          onClick={() => router.back()}
        />
      </div>
      <div className='relative'>
        <div className={`w-full max-w-4xl aspect-video relative bg-black rounded-lg overflow-hidden
          ${response?.status === 'dangerous' ? 'ring-4 ring-red-500' : 
            response?.status === 'hazardous' ? 'ring-4 ring-yellow-500' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={useApiUrl(`lives/${streamId}`)}
            alt='CCTV'
            className='object-cover'
          />
        </div>
        {/* 위험 상태 알림 배지 */}
        {(response?.status === 'dangerous' || response?.status === 'hazardous') && (
          <div className='absolute top-4 right-4 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-lg'>
            {response.status === 'dangerous' ? '위험' : '주의'}
          </div>
        )}
      </div>

      <Summary response={response} />
    </main>
  );
};

export default LivePage;