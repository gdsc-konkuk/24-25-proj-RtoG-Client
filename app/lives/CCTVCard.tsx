"use client";

import { useApiUrl } from "@/hooks/url";
import Link from "next/link";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { DetailedLive } from "./types";

const CCTVCard: React.FC<DetailedLive> = ({
  cctv_name,
  address,
  event_type,
  video_id,
}) => {
  const [imageError, setImageError] = useState(false);
  const url = useApiUrl(`lives/${video_id}`);

  return (
    <Link
      href={`/lives/${video_id}`}
      className='flex flex-col w-64 bg-white relative hover:cursor-pointer'
    >
      {/* Wildfire Event Indicator */}
      {(event_type === "hazardous" || event_type === "danger") && (
        <div className='absolute top-2 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-md'>
          {event_type}
        </div>
      )}

      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {imageError ? ( // image error가 아니라 URL 검증을 먼저 해야할 듯?
          <Skeleton height={144} />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            className='rounded-md'
            src={url}
            alt={cctv_name}
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

export default CCTVCard;
