interface AvatarBadgeProps {
  src: string
  alt: string
}

export default function AvatarBadge({ src, alt }: AvatarBadgeProps) {
  return (
    <div className="relative">
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4644A4]/20 to-[#4644A4]/5 border-2 border-[#4644A4]/30 p-1 flex items-center justify-center overflow-hidden">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-card shadow-md"></div>
    </div>
  )
}
