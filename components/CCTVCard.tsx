"use client";
import React from "react";
import useSocket from "../hooks/useSocket";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const { imageSrc } = useSocket(streamId);

  return (
    <div className='flex flex-col w-64 rounded-lg overflow-hidden shadow-lg bg-white relative'>
      {/* Wildfire Event Indicator */}
      {hasWildfireEvent && (
        <div className='absolute top-4 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-lg'>
          Wildfire
        </div>
      )}

      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            className='object-cover w-full h-full'
            fill
          />
        ) : (
          <Skeleton height={144} />
        )}
      </div>

      
      <div className='flex flex-col gap-2 p-3'>
        <h3 className='font-semibold text-sm line-clamp-1'>{title}</h3>
        <p className='text-xs text-gray-600 line-clamp-2'>{description}</p>
      </div>
    </div>
  );
};

export default CCTVCard;
