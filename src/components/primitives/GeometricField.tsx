import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  className?: string
  tone?: 'light' | 'dark'
}

/**
 * Campo decorativo com o motivo geometrico de triangulos da marca.
 * Puramente visual, ignorado por leitores de tela.
 */
export function GeometricField({ className = '', tone = 'light' }: Props) {
  const reduce = useReducedMotion()

  const palette =
    tone === 'dark'
      ? ['rgba(255,255,255,0.06)', 'rgba(138,211,180,0.16)', 'rgba(82,185,138,0.20)', 'rgba(201,169,78,0.18)']
      : ['rgba(15,61,46,0.05)', 'rgba(47,160,111,0.10)', 'rgba(138,211,180,0.16)', 'rgba(201,169,78,0.14)']

  const triangles = [
    { d: 'M0 0 L120 0 L60 104 Z', x: 40, y: 20, s: 1, fill: palette[1], dur: 11 },
    { d: 'M0 0 L96 0 L48 83 Z', x: 200, y: 120, s: 1, fill: palette[0], dur: 14 },
    { d: 'M0 0 L70 0 L35 60 Z', x: 320, y: 40, s: 1, fill: palette[2], dur: 9 },
    { d: 'M0 0 L150 0 L75 130 Z', x: 120, y: 220, s: 1, fill: palette[0], dur: 16 },
    { d: 'M0 0 L60 0 L30 52 Z', x: 380, y: 200, s: 1, fill: palette[3], dur: 12 },
    { d: 'M0 0 L110 0 L55 95 Z', x: 20, y: 320, s: 1, fill: palette[1], dur: 13 },
  ]

  return (
    <svg
      className={className}
      viewBox="0 0 460 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {triangles.map((t, i) => (
        <motion.path
          key={i}
          d={t.d}
          transform={`translate(${t.x} ${t.y})`}
          fill={t.fill}
          initial={false}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, i % 2 === 0 ? -12 : 14, 0],
                  rotate: [0, i % 2 === 0 ? 4 : -3, 0],
                }
          }
          transition={{ duration: t.dur, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </svg>
  )
}
