"use client";

import useSocket from "@/hooks/useSocket";
import { useUrl } from "@/hooks/useUrl";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const LivePage = () => {
  const { streamId } = useParams();
  const { status, progress, message } = useSocket(streamId as string);
  const router = useRouter();
  return (
    <main className='w-full h-full p-8 flex flex-col items-center gap-12'>
      <div className='flex items-center gap-4 w-full'>
        <div className='text-xl font-bold w-fit break whitespace-nowrap'>
          CCTV name
        </div>
        <div className='text-lg w-full'>Address of the CCTV</div>
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

      <div className='w-full max-w-4xl flex flex-col gap-2'>
        {status && (
          <div className='text-sm text-gray-600'>Status: {status}</div>
        )}
        {progress !== null && (
          <div className='text-sm text-gray-600'>Progress: {progress}%</div>
        )}
        {message && (
          <div className='text-sm text-gray-600'>Message: {message}</div>
        )}
      </div>
    </main>
  );
};

export default LivePage;
