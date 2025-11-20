interface AddressSectionProps {
  client: {
    address: {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: string
      country: string
    }
  }
}

export default function AddressSection({ client }: AddressSectionProps) {
  const { address } = client

  return (
    <div>
      <h2 className="text-xl font-bold  mb-4">Address Information</h2>
      <div className="bg-white rounded-lg border border-gray-300 p-6">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Street Address</p>
            <p className="">{address.address}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">City</p>
              <p className="">{address.city}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Postal Code</p>
              <p className="">{address.postalCode}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">State</p>
              <p className="">
                {address.state} ({address.stateCode})
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Country</p>
              <p className="">{address.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
