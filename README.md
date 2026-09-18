# You Service Group

Site institucional de página única para a You Service Group, empresa de terceirização de serviços e gestão de pessoas no Rio de Janeiro.

Site publicado: https://youservicegroup.com.br/

## Tecnologias

- Vite + React 18 + TypeScript
- Tailwind CSS para o design system
- Framer Motion para animações e efeitos de rolagem
- react-i18next para troca de idioma (Português e Inglês, com bandeira dos EUA)
- lucide-react para os ícones

## Como rodar

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam na pasta `dist`, prontos para publicação em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, hospedagem própria).

## Publicação no GitHub Pages

O deploy é automático. A cada `push` na branch `main`, o workflow em
`.github/workflows/deploy.yml` roda o build e publica a pasta `dist` no GitHub Pages.

O site usa o domínio próprio `youservicegroup.com.br` (configurado via `public/CNAME`
e nas configurações de Pages do repositório), por isso o `base` em `vite.config.ts`
é `/` (raiz). Se o domínio for removido e o site voltar a ser servido em
`github.io/youservicegroup/`, ajuste o `base` de volta para `/youservicegroup/`.

## Onde ajustar o conteúdo

| O que | Arquivo |
| --- | --- |
| Telefones, e-mail, endereço, domínio | `src/lib/site.ts` |
| Imagens (placeholders) | `src/lib/site.ts`, objeto `images` |
| Textos em Português | `src/i18n/locales/pt.json` |
| Textos em Inglês | `src/i18n/locales/en.json` |
| Cores e tipografia | `tailwind.config.js` |
| Seções e ordem | `src/App.tsx` e `src/lib/nav.ts` |

### Imagens

As imagens atuais são placeholders carregados do Unsplash. Para usar as fotos oficiais,
coloque os arquivos em `src/assets` e importe no objeto `images` de `src/lib/site.ts`,
ou apenas troque as URLs.

### Logotipo

O logotipo está recriado em versão limpa no componente `src/components/primitives/Logo.tsx`.
Ao receber o arquivo oficial em SVG, substitua o conteúdo desse componente.

### WhatsApp e e-mail

Os botões usam os dados de `src/lib/site.ts`. O primeiro número da lista `phones`
é o padrão dos botões de WhatsApp. A mensagem inicial fica em `cta.whatsappMessage`
nos arquivos de tradução.
