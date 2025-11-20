import type { ClientDetail } from "../../types"




export default function ClientHero({ client }: ClientDetail) {
  return (
    <div className="bg-white rounded-2xl  shadow-sm border border-gray-300 p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="md:flex gap-6 items-start">
          <img src={client.image} alt={`${client.name}`} />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold ">
                {client.name} 
              </h1>
            </div>
            <p className="text-[#4644A4] font-semibold mb-1">{client.occupation}</p>
            <p className="text-gray-600 text-sm mb-3">@{client.username}</p>
            <p className="text-sm text-gray-600">{client.company}</p>
          </div>
        </div>

        {/* Client ID Card */}
        <div className="bg-linear-to from-[#4644A4]/5 to-[#4644A4]/10 rounded-xl px-4 py-3 border border-[#4644A4]/20 text-center">
          <p className="text-xs text-gray-600 font-medium uppercase tracking-wider mb-1">Client ID</p>
          <p className="text-2xl font-bold text-[#4644A4]">#{String(client.id).padStart(4, "0")}</p>
        </div>
      </div>
    </div>
  )
}
