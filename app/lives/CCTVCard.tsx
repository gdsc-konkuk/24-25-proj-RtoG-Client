"use client";

import { useUrl } from "@/hooks/useUrl";
import Link from "next/link";
import React from "react";

type CCTVCardProps = {
  streamId: string;
  title?: string;
  description?: string;
  hasWildfireEvent?: boolean;
};

const CCTVCard: React.FC<CCTVCardProps> = ({
  streamId,
  title = "Untitled Stream",
  description = "No description available",
  hasWildfireEvent = false,
}) => {
  return (
    <Link
      href={`/lives/${streamId}`}
      className='flex flex-col w-64 rounded-lg bg-white relative hover:cursor-pointer'
    >
      {/* Wildfire Event Indicator */}
      {hasWildfireEvent && (
        <div className='absolute top-4 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-lg'>
          Wildfire
        </div>
      )}

      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={useUrl(`lives/${streamId}`)} alt={title} />
      </div>

      <div className='flex flex-col gap-2 p-3'>
        <h3 className='font-semibold text-sm line-clamp-1'>{title}</h3>
        <p className='text-xs text-gray-600 line-clamp-2'>{description}</p>
      </div>
    </Link>
  );
};

export default CCTVCard;
