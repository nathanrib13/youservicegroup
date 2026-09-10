type FlagProps = { className?: string }

/** Bandeira dos Estados Unidos (simplificada). */
export function FlagUS({ className = '' }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="flag-us-rounded">
          <rect width="28" height="20" rx="3" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-us-rounded)">
        <rect width="28" height="20" fill="#ffffff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={(i * 20) / 13} width="28" height={20 / 13} fill="#b22234" />
        ))}
        <rect width="12" height={(20 / 13) * 7} fill="#3c3b6e" />
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 5 }).map((__, col) => (
            <circle key={`${row}-${col}`} cx={1.4 + col * 2.4} cy={1.3 + row * 2.5} r="0.5" fill="#ffffff" />
          )),
        )}
      </g>
      <rect x="0.5" y="0.5" width="27" height="19" rx="2.6" fill="none" stroke="rgba(0,0,0,0.08)" />
    </svg>
  )
}

/** Bandeira do Brasil (simplificada). */
export function FlagBR({ className = '' }: FlagProps) {
  return (
    <svg className={className} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="flag-br-rounded">
          <rect width="28" height="20" rx="3" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-br-rounded)">
        <rect width="28" height="20" fill="#009c3b" />
        <path d="M14 2.4 25.6 10 14 17.6 2.4 10Z" fill="#ffdf00" />
        <circle cx="14" cy="10" r="4" fill="#002776" />
        <path d="M10.4 8.8a8 8 0 0 1 7.4 1.1" fill="none" stroke="#ffffff" strokeWidth="0.9" />
      </g>
      <rect x="0.5" y="0.5" width="27" height="19" rx="2.6" fill="none" stroke="rgba(0,0,0,0.08)" />
    </svg>
  )
}
