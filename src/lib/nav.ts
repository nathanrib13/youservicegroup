/** Secoes navegaveis do site, na ordem em que aparecem. */
export const NAV_SECTIONS = [
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'why', key: 'nav.why' },
  { id: 'coverage', key: 'nav.coverage' },
  { id: 'contact', key: 'nav.contact' },
] as const

export const SECTION_IDS = NAV_SECTIONS.map((s) => s.id)
