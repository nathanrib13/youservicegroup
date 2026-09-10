import { useTranslation } from 'react-i18next'
import { BadgeCheck, ClipboardList, Layers, UserCog } from 'lucide-react'
import { SectionHeading } from '../primitives/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../primitives/Reveal'

const ICONS = [BadgeCheck, UserCog, Layers, ClipboardList]

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[]
  const pillars = t('about.pillars', { returnObjects: true }) as { title: string; text: string }[]

  return (
    <section id="about" className="relative bg-paper py-24 sm:py-28">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />
            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <StaggerItem key={i}>
                  <div className="card h-full hover:-translate-y-1 hover:shadow-lift">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 text-lg">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.text}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
