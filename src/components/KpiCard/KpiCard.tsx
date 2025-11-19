import React from "react";

interface KpiCardProps {
  title: string;
  value: number;
  color?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, color = "bg-gray-100" }) => {
  return (
    <div className={`p-6 rounded-lg shadow hover:shadow-lg transition ${color}`}>
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="text-3xl font-bold mt-2 text-gray-800">{value}</p>
    </div>
  );
};

export default KpiCard;
