import MetricCard from "../ui/MetricCard"

interface AdditionalInfoSectionProps {
  client: {
    bloodGroup: string
    university: string
    role: string
    username: string
    age: number
  }
}

export default function AdditionalInfoSection({ client }: AdditionalInfoSectionProps) {
  const additionalInfo = [
    {
      label: "Blood Group",
      value: client.bloodGroup,
      color: "from-pink-500/10 to-pink-500/5",
      textColor: "text-pink-700 dark:text-pink-400",
    },
    {
      label: "Education",
      value: client.university,
      color: "from-blue-500/10 to-blue-500/5",
      textColor: "text-blue-700 dark:text-blue-400",
    },
    {
      label: "Account Role",
      value: client.role.toUpperCase(),
      color: "from-[#4644A4]/10 to-[#4644A4]/5",
      textColor: "text-[#4644A4]",
    },
    {
      label: "Username",
      value: `@${client.username}`,
      color: "from-accent/10 to-accent/5",
      textColor: "text-accent",
    },
  ]

  return (
    <div>
      <h2 className="text-lg font-bold  mb-4">Additional Information</h2>
      <div className="space-y-3">
        {additionalInfo.map((info) => (
          <MetricCard key={info.label} {...info} />
        ))}
      </div>
    </div>
  )
}
