import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { SectionHeading } from '../primitives/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../primitives/Reveal'
import { GeometricField } from '../primitives/GeometricField'
import { whatsappLink } from '../../lib/site'

export function Why() {
  const { t } = useTranslation()
  const paragraphs = t('why.paragraphs', { returnObjects: true }) as string[]
  const benefits = t('why.benefits', { returnObjects: true }) as string[]

  return (
    <section id="why" className="relative isolate overflow-hidden bg-brand-gradient py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      <div className="pointer-events-none absolute -right-16 top-0 h-[380px] w-[380px] opacity-70">
        <GeometricField tone="dark" className="h-full w-full" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading tone="dark" eyebrow={t('why.eyebrow')} title={t('why.title')} />
            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-brand-100/85 sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(t('cta.whatsappMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {t('cta.whatsapp')}
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-100/70">
                {t('why.listTitle')}
              </p>
            </Reveal>
            <Stagger className="mt-5 grid items-stretch gap-3 sm:grid-cols-2">
              {benefits.map((benefit, i) => (
                <StaggerItem key={i} className="h-full">
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500 text-brand-900">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/90">{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
