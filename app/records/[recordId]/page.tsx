"use client";

import { useApiUrl } from "@/hooks/url";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useRecords } from "@/hooks/records";
import { useState, useEffect } from "react";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

const RecordPage = () => {
  const { recordId } = useParams();
  const router = useRouter();
  const records = useRecords();
  const [isLoading, setIsLoading] = useState(true);
  const [formattedTime, setFormattedTime] = useState("");
  
  // evt_001 형식에서 숫자만 추출
  const numericId = typeof recordId === 'string' ? recordId.replace('evt_', '') : '';
  const videoUrl = useApiUrl(`records/${numericId}`);

  // 현재 레코드 찾기
  const currentRecord = records
    .flatMap(day => day.events)
    .find(record => record.eventId === recordId) || {
      eventId: recordId as string,
      cctv_name: 'CCTV',
      address: '주소 정보 없음',
      timestamp: new Date().toISOString(),
      description: '상세 분석 정보 없음'
    };

  useEffect(() => {
    setFormattedTime(formatDate(currentRecord.timestamp));
  }, [currentRecord.timestamp]);

  return (
    <main className='w-full h-full p-8 flex flex-col items-center gap-12'>
      <div className='flex items-center gap-4 w-full'>
        <div className='text-xl font-bold w-fit break whitespace-nowrap'>
          {currentRecord.cctv_name}
        </div>
        <div className='text-lg w-full'>{currentRecord.address}</div>
        <div className='text-sm text-gray-500'>
          {formattedTime}
        </div>
        <IoClose
          className='text-2xl w-fit hover:cursor-pointer'
          onClick={() => router.back()}
        />
      </div>
      <div className="w-full max-w-4xl aspect-video relative bg-black rounded-lg overflow-hidden flex justify-center items-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white">Loading video...</div>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={videoUrl}
          alt='Recorded Video'
          className='w-full h-full object-contain'
          onLoad={() => setIsLoading(false)}
          onError={() => {
            console.error('Failed to load video');
            setIsLoading(false);
          }}
        />
      </div>
      <div className='w-full max-w-4xl bg-white rounded-lg p-6 shadow-lg mt-6'>
        <h2 className='text-xl font-bold mb-4'>Event Information</h2>
        <div className='space-y-2'>
          {currentRecord.description && (
            <p><span className='font-semibold'>Description:</span> {currentRecord.description}</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default RecordPage;