import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, DoorOpen, Leaf, SprayCan } from 'lucide-react'
import { SectionHeading } from '../primitives/SectionHeading'
import { Stagger, StaggerItem } from '../primitives/Reveal'
import { images, whatsappLink } from '../../lib/site'

const META = [
  { Icon: DoorOpen, img: 'portaria' as const },
  { Icon: SprayCan, img: 'limpeza' as const },
  { Icon: Leaf, img: 'jardinagem' as const },
]

export function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as {
    name: string
    text: string
    features: string[]
  }[]

  return (
    <section id="services" className="relative bg-paper-soft py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          description={t('services.subtitle')}
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const { Icon, img } = META[i % META.length]
            return (
              <StaggerItem key={i}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={images.services[img]}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent" />
                    <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand-700 shadow-soft">
                      <Icon size={20} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                    <ul className="mt-5 space-y-2">
                      {item.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-ink-soft">
                          <Check size={16} className="mt-0.5 shrink-0 text-brand-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </StaggerItem>
            )
          })}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <a
            href={whatsappLink(t('cta.whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
