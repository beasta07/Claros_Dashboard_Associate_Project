import InfoCard from "../ui/InfoCard"

interface CompanySectionProps {
  client: {
    company: {
      name: string
      title: string
      department: string
      address: {
        city: string
        state: string
        country: string
      }
    }
  }
}

export default function CompanySection({ client }: CompanySectionProps) {
  const companyInfo = [
    {
      label: "Company Name",
      value: client.company,
      icon: "🏢",
    },
    {
      label: "Position",
      value: client.occupation,
      icon: "💼",
    }
  ]

  return (
    <div>
      <h2 className="text-xl font-bold  mb-4">Company Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {companyInfo.map((info) => (
          <InfoCard key={info.label} {...info} />
        ))}
      </div>
    </div>
  )
}
