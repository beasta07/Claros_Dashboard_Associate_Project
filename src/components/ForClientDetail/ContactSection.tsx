import InfoCard from "../ui/InfoCard"

interface ContactSectionProps {
  client: {
    email: string
    phone: string
    age: number
    gender: string
  }
}

export default function ContactSection({ client }: ContactSectionProps) {
  const contactInfo = [
    {
      label: "Email Address",
      value: client.email,
      icon: "✉️",
      href: `mailto:${client.email}`,
    },
    {
      label: "Phone Number",
      value: client.phone,
      icon: "📞",
      href: `tel:${client.phone}`,
    },
    {
      label: "Age",
      value: `${client.age} years old`,
      icon: "🎂",
    },
    {
      label: "Gender",
      value: client.gender.charAt(0).toUpperCase() + client.gender.slice(1),
      icon: "👤",
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold  mb-4">Contact Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactInfo.map((info) => (
          <InfoCard key={info.label} {...info} />
        ))}
      </div>
    </div>
  )
}
