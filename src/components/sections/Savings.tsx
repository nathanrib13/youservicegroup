import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../primitives/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../primitives/Reveal'

export function Savings() {
  const { t } = useTranslation()
  const paragraphs = t('savings.paragraphs', { returnObjects: true }) as string[]
  const steps = t('savings.steps', { returnObjects: true }) as { title: string; text: string }[]

  return (
    <section className="relative bg-paper py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={t('savings.eyebrow')}
          title={t('savings.title')}
        />
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="relative h-full rounded-3xl border border-brand-100 bg-paper-soft p-7 shadow-soft">
                <span className="text-sm font-bold text-brand-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                {i < steps.length - 1 ? (
                  <span className="absolute right-6 top-7 hidden text-brand-200 md:block" aria-hidden="true">
                    <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
                      <path d="M0 6h22m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
