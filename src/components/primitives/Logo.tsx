import { useTranslation } from 'react-i18next'
import logoBadge from '../../assets/logo-badge.png'

type Props = {
  tone?: 'light' | 'dark'
  className?: string
  subtitle?: boolean
}

/** Marca oficial da You Service Group (selo + assinatura). */
export function Logo({ tone = 'light', className = '', subtitle = true }: Props) {
  const { t } = useTranslation()
  const dark = tone === 'dark'
  const primary = dark ? 'text-white' : 'text-brand-900'
  const secondary = dark ? 'text-brand-100/80' : 'text-brand-600'
  const sub = dark ? 'text-brand-100/70' : 'text-ink-muted'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="You Service Group">
      <img
        src={logoBadge}
        alt="You Service Group"
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
      />
      <span className="flex flex-col leading-none">
        <span className={`whitespace-nowrap text-[15px] font-extrabold tracking-tight ${primary}`}>
          You Service <span className={secondary}>Group</span>
        </span>
        {subtitle ? (
          <span className={`mt-1 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em] ${sub}`}>
            {t('logo.tagline')}
          </span>
        ) : null}
      </span>
    </span>
  )
}
