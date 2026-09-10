import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }: Props) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <span
          className={
            dark
              ? 'inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100'
              : 'eyebrow'
          }
        >
          <span className={dark ? 'h-1.5 w-1.5 rounded-full bg-gold-400' : 'h-1.5 w-1.5 rounded-full bg-brand-500'} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={
            (dark ? 'text-white ' : '') +
            'mt-5 text-3xl leading-tight sm:text-4xl' +
            (centered ? '' : '')
          }
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className={(dark ? 'text-brand-100/85 ' : 'text-ink-soft ') + 'mt-4 text-base leading-relaxed sm:text-lg'}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
