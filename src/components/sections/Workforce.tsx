import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { SectionHeading } from '../primitives/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '../primitives/Reveal'
import { images } from '../../lib/site'

const ICONS = [ShieldCheck, Sparkles, HeartHandshake]

export function Workforce() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40])

  const paragraphs = t('workforce.paragraphs', { returnObjects: true }) as string[]
  const highlights = t('workforce.highlights', { returnObjects: true }) as { title: string; text: string }[]

  return (
    <section className="relative bg-paper-soft py-24 sm:py-28">
      <div className="container-page">
        <div ref={ref} className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-100 shadow-lift">
              <motion.img
                style={{ y: imgY }}
                src={images.workforce}
                alt={t('workforce.eyebrow')}
                loading="lazy"
                className="h-[420px] w-full scale-110 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/12 p-4 backdrop-blur-md">
                <p className="text-sm font-medium text-white">{t('footer.slogan')}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow={t('workforce.eyebrow')} title={t('workforce.title')} />
            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            <Stagger className="mt-8 space-y-3">
              {highlights.map((highlight, i) => {
                const Icon = ICONS[i % ICONS.length]
                return (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-soft">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon size={19} />
                      </span>
                      <div>
                        <h3 className="text-base">{highlight.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{highlight.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
