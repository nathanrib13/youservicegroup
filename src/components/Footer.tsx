import { useTranslation } from 'react-i18next'
import { Logo } from './primitives/Logo'
import { NAV_SECTIONS } from '../lib/nav'
import { site, whatsappLink } from '../lib/site'

export function Footer() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true }) as { name: string }[]

  return (
    <footer className="bg-brand-950 text-brand-100/80">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{t('footer.tagline')}</p>
            <p className="mt-3 text-sm font-medium text-white">{t('footer.slogan')}</p>
          </div>

          <nav aria-label={t('footer.navTitle')}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-100/50">
              {t('footer.navTitle')}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_SECTIONS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-white">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-100/50">
              {t('footer.servicesTitle')}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-100/50">
              {t('footer.contactTitle')}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.raw}>
                  <a href={`tel:+${phone.raw}`} className="transition-colors hover:text-white">
                    {phone.label}
                  </a>
                </li>
              ))}
              <li className="pt-1 leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.zip}
              </li>
              <li className="pt-2">
                <a
                  href={whatsappLink(t('cta.whatsappMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-500"
                >
                  {t('nav.cta')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-brand-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} {site.name}. {t('footer.rights')}
          </p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  )
}
