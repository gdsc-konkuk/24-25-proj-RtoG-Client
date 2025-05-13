"use client";

import { useUrl } from "@/hooks/useUrl";
import Link from "next/link";
import React from "react";
import { Live } from "./types";

const CCTVCard: React.FC<Live> = ({ id, name, address, status }) => {
  return (
    <Link
      href={`/lives/${id}`}
      className='flex flex-col w-64 bg-white relative hover:cursor-pointer'
    >
      {/* Wildfire Event Indicator */}
      {status === "hazardous" && (
        <div className='absolute top-4 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-lg'>
          Wildfire
        </div>
      )}

      {/* Thumbnail/Skeleton Section */}
      <div className='w-full h-36 relative'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className='rounded-md' src={useUrl(`lives/${id}`)} alt={name} />
      </div>

      <div className='flex flex-col gap-2 p-3'>
        <h3 className='font-semibold text-sm line-clamp-1'>{name}</h3>
        <p className='text-xs text-gray-600 line-clamp-2'>{address}</p>
      </div>
    </Link>
  );
};

export default CCTVCard;
