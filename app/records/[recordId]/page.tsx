"use client";

import { useApiUrl } from "@/hooks/url";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const RecordPage = () => {
  const { streamId } = useParams();
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
          src={useApiUrl(`lives/${streamId}`)}
          alt='CCTV'
          className='object-cover'
        />
      </div>
    </main>
  );
};

export default RecordPage;
