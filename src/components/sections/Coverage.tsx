import { useTranslation } from 'react-i18next'
import { Building2, MapPin } from 'lucide-react'
import { SectionHeading } from '../primitives/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../primitives/Reveal'

export function Coverage() {
  const { t } = useTranslation()
  const paragraphs = t('coverage.paragraphs', { returnObjects: true }) as string[]
  const regions = t('coverage.regions', { returnObjects: true }) as string[]
  const clients = t('coverage.clients', { returnObjects: true }) as string[]

  return (
    <section id="coverage" className="relative bg-paper py-24 sm:py-28">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={t('coverage.eyebrow')} title={t('coverage.title')} />
            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {t('coverage.regionsTitle')}
              </p>
            </Reveal>
            <Stagger className="mt-4 flex flex-wrap gap-2.5">
              {regions.map((region, i) => (
                <StaggerItem key={i}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800">
                    <MapPin size={15} className="text-brand-500" />
                    {region}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-brand-100 bg-paper-soft p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-900 text-white">
                  <Building2 size={20} />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  {t('coverage.clientsTitle')}
                </p>
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {clients.map((client, i) => (
                  <li
                    key={i}
                    className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm font-medium text-ink-soft"
                  >
                    {client}
                  </li>
                ))}
              </ul>

              <div className="mt-7 overflow-hidden rounded-2xl border border-brand-100">
                <iframe
                  title="You Service Group - Barra da Tijuca"
                  src="https://www.google.com/maps?q=Av.%20das%20Am%C3%A9ricas%203120%20Barra%20da%20Tijuca%20Rio%20de%20Janeiro&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
