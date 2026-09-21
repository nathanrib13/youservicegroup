import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, PiggyBank, ShieldCheck, Timer } from 'lucide-react'
import { GeometricField } from '../primitives/GeometricField'
import { AnimatedCounter } from '../primitives/AnimatedCounter'
import { whatsappLink } from '../../lib/site'

export function Hero() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const yBlobA = useTransform(scrollY, [0, 500], [0, reduce ? 0 : -40])
  const yBlobB = useTransform(scrollY, [0, 500], [0, reduce ? 0 : 70])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-brand-gradient-animated animate-gradient-pan pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
      <motion.div
        style={{ y: yBlobA }}
        className="pointer-events-none absolute -left-28 top-10 h-[360px] w-[360px] opacity-70"
      >
        <GeometricField tone="dark" className="h-full w-full" />
      </motion.div>
      <motion.div
        style={{ y: yBlobB }}
        className="pointer-events-none absolute -right-16 -bottom-10 h-[460px] w-[460px] opacity-80"
      >
        <GeometricField tone="dark" className="h-full w-full -scale-x-100" />
      </motion.div>

      <div className="container-page relative">
        <motion.div
          variants={container}
          initial={reduce ? undefined : 'hidden'}
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-5xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-brand-100/85 sm:text-lg">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappLink(t('cta.whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-brand-900 shadow-lift hover:-translate-y-0.5 hover:bg-brand-50"
            >
              <MessageCircle size={18} />
              {t('hero.ctaPrimary')}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard
              icon={<PiggyBank size={18} />}
              value={<AnimatedCounter value={30} prefix={t('hero.stats.upTo')} suffix="%" />}
              label={t('hero.stats.costLabel')}
            />
            <StatCard
              icon={<Timer size={18} />}
              value={<AnimatedCounter value={24} suffix="h" />}
              label={t('hero.stats.replaceLabel')}
            />
            <StatCard
              icon={<ShieldCheck size={18} />}
              value={<AnimatedCounter value={100} suffix="%" />}
              label={t('hero.stats.supervisedLabel')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: ReactNode; value: ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 text-gold-400">{icon}</span>
      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm leading-snug text-brand-100/75">{label}</p>
    </div>
  )
}
