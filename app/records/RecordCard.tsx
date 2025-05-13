"use client";
import type { Record } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RecordCard = ({ eventId, cctv_name, address, thumbnail_url }: Record) => {
  return (
    <Link
      href={`/records/${eventId}`}
      className='flex flex-col w-64 rounded-lg bg-white relative hover:cursor-pointer'
    >
      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {thumbnail_url ? (
          <Image
            src={thumbnail_url}
            alt={cctv_name}
            className='object-cover w-full h-full'
            fill
          />
        ) : (
          <Skeleton height={144} />
        )}
      </div>

      <div className='flex flex-col gap-2 p-3'>
        <h3 className='font-semibold text-sm line-clamp-1'>{cctv_name}</h3>
        <p className='text-xs text-gray-600 line-clamp-2'>{address}</p>
      </div>
    </Link>
  );
};

export default RecordCard;
