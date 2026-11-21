# 🚀 Venkateshwaran S — Portfolio Website

Personal portfolio website for **Venkateshwaran S**, Full Stack Developer & Technical Mentor.

- **Live URL**: Deployed on Google Firebase Hosting
- **Tech Stack**: Vue.js 3 (Composition API), Vite, Tailwind CSS, Lucide Icons, Canvas Confetti
- **Deployment**: Firebase Hosting CDN

---

## 🌟 Key Highlights Included
- **Hero & Value Proposition**: Full Stack Developer specializing in Python (Django), PHP (Laravel), Vue.js 3, and Asynchronous Systems (Celery + RabbitMQ).
- **Mentorship Spotlight**: 85+ college students trained into industry-ready full-stack developers in partnership with Geometriccae & Digisailor.
- **Invited Speaker & Recognition**: Guest lecture at *Department of Computer Science & Network Systems and Information Technology* on *"Web Development: From Basics To Full Stack"*, with Certificate of Appreciation.
- **Enterprise Project Showcase**: GES CRM System, Sonashi Service Ticket Management System (Dubai / UAE), Spring MVC student portal, and Distributed Queue sandbox.
- **Problem Solving**: 200+ algorithm and data structure problems solved on HackerRank (Java & Python).
- **Interactive Lightbox Modal**: High-resolution gallery documenting hands-on training labs, seminars, and live enterprise architecture demos.
- **Direct Contact & WhatsApp**: Instant email dispatch form + one-click phone/email copy and direct WhatsApp messaging link.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in `dist/`.

---

## 🔥 Firebase Deployment Guide

### 1. Login to Firebase CLI
```bash
firebase login
```

### 2. Initialize or Connect Firebase Project
```bash
firebase init hosting
```
- Select your existing project or create a new one.
- Set public directory to: `dist`
- Configure as single-page app (SPA): `Yes`
- Set up automatic builds with GitHub: Optional (Yes / No)

### 3. Build & Deploy
```bash
npm run build
firebase deploy --only hosting
```
Your portfolio will be live at `https://<your-project-id>.web.app`!
