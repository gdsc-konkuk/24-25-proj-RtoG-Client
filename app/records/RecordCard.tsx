"use client";
import React from "react";
import useSocket from "../../hooks/useSocket";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

type RecordCardProps = {
  streamId: string;
  title?: string;
  description?: string;
};

const RecordCard = ({
  streamId,
  title = "Untitled Record",
  description = "No description available",
}: RecordCardProps) => {
  const { imageSrc } = useSocket(streamId);

  return (
    <Link
      href={`/records/${streamId}`}
      className='flex flex-col w-64 rounded-lg bg-white relative hover:cursor-pointer'
    >
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
    </Link>
  );
};

export default RecordCard;
