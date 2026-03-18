# 🚀 Next Institutional Template

Template profissional para criação de sites institucionais estáticos com Next.js, focado em performance, SEO e facilidade de manutenção.

## Stack
Next.js (App Router) • TypeScript • TailwindCSS • Static Export (SSG) • next/font • next/image • Formspree

## Objetivo
Construir rapidamente sites institucionais, landing pages e projetos para clientes sem backend ou servidor Node, funcionando em qualquer hospedagem simples como Hostinger, cPanel, Vercel ou Netlify.

## Estrutura
```
src/
  app/
  components/layout/
  components/ui/
  config/
  data/
  lib/
  types/
public/
```

Arquitetura de conteúdo:
```
data → cms → pages → UI
```
Permite trocar facilmente dados locais por API ou CMS no futuro sem alterar as páginas.

## Rodar localmente
```bash
npm install
npm run dev
```

## Build para produção
```bash
npm run build
```
A pasta `out/` será gerada. Envie apenas ela para a hospedagem.

## Recursos inclusos
- Layout global (Header + Footer)
- Componentes reutilizáveis (Button, Card, Section, Hero)
- SEO automático (metadata, Open Graph, sitemap, robots.txt)
- Fontes e imagens otimizadas
- Formulário de contato serverless
- 100% estático e rápido

## Formulário
Criar conta em https://formspree.io e substituir o endpoint em:
`src/components/ui/ContactForm.tsx`

## Autor
Gabriel Ferreira
