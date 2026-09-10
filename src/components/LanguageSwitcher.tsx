import { useTranslation } from 'react-i18next'
import { FlagBR, FlagUS } from './primitives/Flags'

type Props = {
  tone?: 'light' | 'dark'
  className?: string
}

const LANGS = [
  { code: 'pt', label: 'PT', Flag: FlagBR },
  { code: 'en', label: 'EN', Flag: FlagUS },
] as const

export function LanguageSwitcher({ tone = 'light', className = '' }: Props) {
  const { i18n, t } = useTranslation()
  const current = i18n.language?.split('-')[0] === 'en' ? 'en' : 'pt'
  const dark = tone === 'dark'

  return (
    <div
      role="group"
      aria-label={t('meta.switchTo')}
      className={
        'inline-flex items-center gap-1 rounded-full p-1 ' +
        (dark ? 'border border-white/20 bg-white/10 backdrop-blur-sm ' : 'border border-brand-200 bg-white ') +
        className
      }
    >
      {LANGS.map(({ code, label, Flag }) => {
        const active = current === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={active}
            className={
              'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ' +
              (active
                ? dark
                  ? 'bg-white text-brand-900'
                  : 'bg-brand-900 text-white'
                : dark
                  ? 'text-white/80 hover:text-white'
                  : 'text-ink-soft hover:text-brand-900')
            }
          >
            <Flag className="h-4 w-[22px] rounded-[3px]" />
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
