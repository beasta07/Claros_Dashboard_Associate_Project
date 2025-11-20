import React from "react";

interface ListSkeletonProps {
  count?: number; 
}

const ListSkeleton: React.FC<ListSkeletonProps> = ({ count = 4 }) => {
  return (
    <div className="bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4 animate-pulse">
      <div className="flex justify-between mb-4">
        <div className="h-5 w-32 bg-gray-300 rounded" />
        <div className="h-5 w-16 bg-gray-300 rounded" />
      </div>
      <hr className="text-gray-300 mb-4" />
      <ul className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i} className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-10 h-10 bg-gray-300" />
              <div className="space-y-1">
                <div className="h-4 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-16 bg-gray-300 rounded" />
              </div>
            </div>
            <div className="h-4 w-12 bg-gray-300 rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSkeleton;
