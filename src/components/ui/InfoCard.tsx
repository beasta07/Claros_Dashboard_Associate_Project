interface InfoCardProps {
  label: string
  value: string
  icon?: string
  href?: string
}

export default function InfoCard({ label, value, icon, href }: InfoCardProps) {
  const content = (
    <div className="bg-white rounded-lg border border-gray-300 p-4 hover:border-[#4644A4]/20 transition-colors">
      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </p>
      <p className=" font-medium truncate">{value}</p>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:no-underline">
        {content}
      </a>
    )
  }

  return content
}
