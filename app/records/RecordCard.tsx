"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Record } from "./types";
import { useState } from "react";
import { useBaseUrl } from "@/hooks/url";

const RecordCard = ({ eventId, cctv_name, address, thumbnail_url }: Record) => {
  const [imageError, setImageError] = useState(false);
  const thumbnailUrl = useBaseUrl(thumbnail_url);

  return (
    <Link
      href={`/records/${eventId}`}
      className='flex flex-col w-64 rounded-lg bg-white relative hover:cursor-pointer'
    >
      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {imageError ? (
          <Skeleton height={144} />
        ) : (
          <Image
            src={thumbnailUrl}
            alt={cctv_name}
            className='object-cover w-full h-full rounded-md'
            fill
            onError={() => setImageError(true)}
          />
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
