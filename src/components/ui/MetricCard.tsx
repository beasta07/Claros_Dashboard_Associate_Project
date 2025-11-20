import type { MetricCardProps } from "../../types";

export default function MetricCard({ label, value, color, textColor }: MetricCardProps) {
  return (
    <div className={`bg-linear-to-br ${color} rounded-lg border border-gray-300/50 p-4`}>
      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">{label}</p>
      <p className={`font-bold text-sm ${textColor}`}>{value}</p>
    </div>
  )
}
