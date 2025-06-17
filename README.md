# 💼 Portfolio Tristan Gerber

Bienvenue sur mon portfolio, développé pour refléter mon identité de développeur full-stack créatif. Ce site met en avant mes projets, mes compétences et une expérience immersive soignée.

---

## 🚀 Stack technique

| Technologie       | Utilisation principale                                      |
|-------------------|--------------------------------------------------------------|
| **Next.js**       | Framework principal (App Router, rendering optimisé, SEO)    |
| **React**         | Composants dynamiques et logique d'interaction               |
| **TypeScript**    | Typage strict, robustesse et lisibilité du code              |
| **Spline**        | Intégration 3D légère et interactive                         |
| **React Bits**    | Composants réutilisables et interactions avancées            |
| **Zod**           | Validation de schéma côté client et serveur                  |
| **Resend**        | Envoi d’emails pour le formulaire de contact                 |
| **Redis**         | Rate limiting via un middleware pour sécuriser l’API contact |

---

## 📂 Architecture

```
/app
  /components       → Composants UI (Header, Footer, Sections)
  /hooks            → Hooks custom (détection scroll, etc.)
  /api/contact      → Endpoint de contact sécurisé (Zod + Redis)
  /not-found.tsx    → Page 404 artistique animée
/lib
  /rateLimiter.ts   → Middleware rate limit avec Redis
  /contactSchema.ts → Schéma Zod du formulaire de contact
/public              → Assets statiques (fonts, icônes, etc.)
.env.local           → Variables d’environnement
```

---

## ✨ Fonctionnalités clés

- 🎨 **Animation immersive** dès le chargement avec `OverlayAnimation`
- 🧭 **Mega menu pleine page** inspiré des studios créatifs modernes
- 📄 **Page 404 artistique**, blend de texte avec effets visuels
- 📬 **Formulaire de contact** protégé (Zod + reCAPTCHA v3 + Redis + Resend)
- 🖼️ **Spline intégré** pour des éléments 3D stylisés
- 🧠 **Composants animés** (Framer Motion) pour améliorer l’UX
- 📱 **Responsive** et optimisé mobile

---

## 🔒 Sécurité & performances

- **Rate limiting Redis** : bloque les abus de l'API contact
- **Validation Zod** : empêche les entrées invalides dès l’origine

---

## 🛠️ Pour lancer en local

```bash
# Installation
npm install

# Variables d’environnement à définir
# .env.local
RESEND_API_KEY=...
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...

# Lancer le dev server
npm run dev
```

---

## 📌 À venir

- 🎯 Section WordPress
- 🌐 Dark/light mode
