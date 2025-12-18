interface TechplanoraLogoProps {
  className?: string
  showText?: boolean
}

export function TechplanoraLogo({ className, showText = false }: TechplanoraLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Abstract ship/arrow mark representing forward momentum */}
        <path d="M6 24L16 4L26 24L16 18L6 24Z" className="fill-primary" />
        <path d="M16 18L26 24L16 28L6 24L16 18Z" className="fill-primary/60" />
      </svg>
      {showText && <span className="text-xl font-display font-semibold tracking-tight">Techplanora</span>}
    </div>
  )
}
