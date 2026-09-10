/**
 * Dados institucionais da You Service Group.
 * Fonte: material oficial da empresa (PDF institucional).
 * Ajuste os valores abaixo caso alguma informacao mude.
 */
export const site = {
  name: 'You Service Group',
  domain: 'youservicegroup.com.br',
  url: 'https://www.youservicegroup.com.br',
  email: 'contato@youservicegroup.com.br',
  address: {
    line1: 'Av. das Américas, 3120, B2, G 108',
    line2: 'Barra da Tijuca, Rio de Janeiro, RJ',
    zip: 'CEP 22.640-102',
  },
  /**
   * Telefones. `raw` no formato internacional apenas com digitos (para links de WhatsApp e tel:).
   * O primeiro numero da lista e usado como padrao nos botoes de WhatsApp.
   */
  phones: [
    { label: '(21) 96412-4912', raw: '5521964124912' },
    { label: '(21) 95905-9057', raw: '5521959059057' },
  ],
}

export const primaryPhone = site.phones[0]

export function whatsappLink(message: string, phoneRaw: string = primaryPhone.raw): string {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`
}

export function mailtoLink(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  return `mailto:${site.email}?${params.toString()}`
}

/**
 * Imagens de apoio (placeholders).
 * Substitua pelas fotos oficiais da empresa quando disponiveis:
 * troque as URLs abaixo ou coloque os arquivos em `src/assets` e importe aqui.
 */
export const images = {
  hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  workforce: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  services: {
    portaria: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80',
    limpeza: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    jardinagem: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
  },
}
