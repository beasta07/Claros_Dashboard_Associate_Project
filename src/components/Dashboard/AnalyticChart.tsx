import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
const AnalyticChart = () => {
  const data = [
    { day: 'Sun', value1: 13000, value2: 5000 },
    { day: 'Mon', value1: 11000, value2: 9000 },
    { day: 'Tue', value1: 7000, value2: 6000 },
    { day: 'Wed', value1: 15000, value2: 10000 },
    { day: 'Thu', value1: 20000, value2: 7000 },
    { day: 'Fri', value1: 17000, value2: 8000 },
    { day: 'Sat', value1: 18000, value2: 12000 },
  ];
  return (
    <div className="bg-white font-jakarta rounded-xl p-4 mt-5  w-full max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Analytics</h2>
        <select className="border border-gray-300 rounded px-3 py-1 text-sm">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={226}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#facc15" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip />
          <Area type="monotone" dataKey="value1" stroke="#6366f1" fillOpacity={1} fill="url(#color1)" />
          <Area type="monotone" dataKey="value2" stroke="#facc15" fillOpacity={1} fill="url(#color2)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AnalyticChart
