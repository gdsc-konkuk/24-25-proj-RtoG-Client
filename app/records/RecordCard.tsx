"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Record } from "./types";
import { useState } from "react";

const RecordCard = ({ id, title, description, thumbnail_url }: Record) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/records/${id}`}
      className='flex flex-col w-64 rounded-lg bg-white relative hover:cursor-pointer'
    >
      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {thumbnail_url && !imageError ? (
          <Image
            src={thumbnail_url}
            alt={title}
            className='object-cover w-full h-full'
            fill
            onError={() => setImageError(true)}
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
