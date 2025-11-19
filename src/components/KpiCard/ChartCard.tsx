import React from "react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-sm font-medium text-gray-600 mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default ChartCard;
