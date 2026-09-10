import { useTranslation } from 'react-i18next'
import { Clock, Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SectionHeading } from '../primitives/SectionHeading'
import { Reveal } from '../primitives/Reveal'
import { GeometricField } from '../primitives/GeometricField'
import { mailtoLink, site, whatsappLink } from '../../lib/site'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-brand-gradient py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] opacity-70">
        <GeometricField tone="dark" className="h-full w-full" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading tone="dark" eyebrow={t('cta.eyebrow')} title={t('cta.title')} />
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100/85 sm:text-lg">
                {t('cta.text')}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(t('cta.whatsappMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-brand-900 shadow-lift hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  <MessageCircle size={18} />
                  {t('cta.whatsapp')}
                </a>
                <a href={mailtoLink('Consulta - You Service Group')} className="btn-ghost-light">
                  <Mail size={18} />
                  {t('cta.email')}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/15 bg-white/8 p-7 backdrop-blur-md">
              <h3 className="text-white">{t('contact.title')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{t('contact.text')}</p>

              <ul className="mt-6 space-y-5 text-sm">
                <InfoRow icon={<Phone size={17} />} label={t('contact.phoneLabel')}>
                  <div className="flex flex-col gap-1">
                    {site.phones.map((phone) => (
                      <a key={phone.raw} href={`tel:+${phone.raw}`} className="text-white/90 transition-colors hover:text-white">
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </InfoRow>
                <InfoRow icon={<Mail size={17} />} label={t('contact.emailLabel')}>
                  <a href={mailtoLink('Contato - You Service Group')} className="break-all text-white/90 transition-colors hover:text-white">
                    {site.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<Globe size={17} />} label={t('contact.siteLabel')}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-white/90 transition-colors hover:text-white">
                    www.{site.domain}
                  </a>
                </InfoRow>
                <InfoRow icon={<MapPin size={17} />} label={t('contact.addressLabel')}>
                  <span className="text-white/90">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.zip}
                  </span>
                </InfoRow>
                <InfoRow icon={<Clock size={17} />} label={t('contact.hoursLabel')}>
                  <span className="text-white/90">{t('contact.hours')}</span>
                </InfoRow>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/12 text-gold-400">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-100/60">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </li>
  )
}
