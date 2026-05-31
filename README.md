# Nathanaël Daunis - Portfolio

Portfolio personnel de Nathanaël Daunis (Stéfox), construit avec React + Vite + Tailwind CSS v4.

---

## Concept

Le portfolio est structuré autour du narratif **iceberg** : les repos publics GitHub donnent une image calme et creuse, mais en dessous tourne un assistant IA 24/7, un SaaS complet avec client réel, et des mois de travail invisible.

---

## Structure

6 sections en scroll-snap sur desktop, scroll naturel sur mobile :

1. **Hero** - Nom, tagline, logo Stéfox en fond
2. **L'Iceberg** - Contraste surface visible / masse immergée
3. **Naos** - Assistant IA personnel (orbe GLSL en fond)
4. **HSP Booking** - SaaS de réservation multi-tenant (dashboard en fond)
5. **A propos** - Bio + stack technique
6. **Contact** - Liens + section Stéfox

---

## Technologies

- **Frontend** : React 19 + Vite
- **Style** : Tailwind CSS v4
- **Animations** : CSS natif (scroll-snap, fade-up, grain, mask gradients)
- **Deploiement** : Vercel (root directory: `portfolio/`)

---

## Lancer en local

```bash
cd portfolio
npm install
npm run dev
```

## Deployer

Le projet se deploie automatiquement sur Vercel a chaque push sur `main`.
Root directory Vercel : `portfolio/`

---

## Assets

Les images sont dans `portfolio/src/assets/` :

| Fichier | Usage |
|---|---|
| `naos.png` | Screenshot UI Naos (section Naos) |
| `hsp.png` | Screenshot analytics HSP Booking |
| `stefox.png` | Logo Stéfox (hero) |
| `furso.png` | Badge Kohaku par Erixalu (contact) |

Le favicon (`portfolio/public/favicon.png`) est une copie du logo Stéfox.

---

## Licence

[MIT](./LICENSE)
