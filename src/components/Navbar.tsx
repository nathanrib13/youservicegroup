import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from './primitives/Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NAV_SECTIONS, SECTION_IDS } from '../lib/nav'
import { useActiveSection, useScrolled } from '../hooks/useScroll'
import { whatsappLink } from '../lib/site'

export function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrolled(20)
  const active = useActiveSection([...SECTION_IDS])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ' +
        (solid ? 'border-b border-brand-100 bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,61,46,0.04)]' : 'border-b border-transparent bg-transparent')
      }
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#top" className="flex items-center" aria-label="You Service Group">
          <Logo tone={solid ? 'light' : 'dark'} subtitle={false} />
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_SECTIONS.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  'relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ' +
                  (solid
                    ? isActive
                      ? 'text-brand-900'
                      : 'text-ink-soft hover:text-brand-900'
                    : isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white')
                }
              >
                {t(item.key)}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className={'absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ' + (solid ? 'bg-brand-600' : 'bg-gold-400')}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher tone={solid ? 'light' : 'dark'} className="hidden sm:inline-flex" />
          <a
            href={whatsappLink(t('cta.whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'hidden items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 md:inline-flex ' +
              (solid
                ? 'bg-brand-600 text-white shadow-soft hover:bg-brand-700'
                : 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20')
            }
          >
            {t('nav.cta')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            className={
              'grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ' +
              (solid ? 'border border-brand-200 text-brand-900' : 'border border-white/30 text-white')
            }
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="container-page border-t border-brand-100 bg-white pb-6 pt-2">
              <div className="flex flex-col">
                {NAV_SECTIONS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-brand-50 py-3.5 text-base font-medium text-ink-soft"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <LanguageSwitcher />
                <a
                  href={whatsappLink(t('cta.whatsappMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary flex-1"
                >
                  {t('nav.cta')}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
