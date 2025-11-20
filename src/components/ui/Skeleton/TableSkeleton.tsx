import React from "react";
import type {TableSkeletonProps} from "../../../types/index"


const TableSkeleton: React.FC<TableSkeletonProps> = ({ rows = 4, columns = 5 }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border border-gray-300 min-w-[600px] sm:min-w-full">
        <thead>
          <tr className="bg-gray-100">
            {Array.from({ length: columns }).map((_, i) => (
              <th
                key={i}
                className="p-3 text-left text-xs sm:text-sm"
              >
                <div className="h-3 bg-gray-300 rounded w-3/4 animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {Array.from({ length: columns }).map((_, j) => (
                <td
                  key={j}
                  className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm"
                >
                  <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
