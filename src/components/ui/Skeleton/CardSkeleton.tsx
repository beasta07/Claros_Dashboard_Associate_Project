import React from "react";
import type { CardSkeletonProps } from "../../../types";



const CardSkeleton: React.FC<CardSkeletonProps> = () => {
  return (
    <div
      className={`border border-gray-300 p-3 rounded-xl animate-pulse h-28`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="rounded-full border p-2 border-gray-300 w-10 h-10" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-300 rounded w-1/2" />
        </div>
      </div>
      <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
    </div>
  );
};

export default CardSkeleton;
