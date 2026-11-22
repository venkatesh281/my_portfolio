# 🖋️ Venkateshwaran — Portfolio Website (Editorial Atelier)

The official personal portfolio website for **Venkateshwaran**, Full Stack Developer.

- **Design Archetype**: **Concept B — "The Editorial Atelier"** (Warm Linen Paper `#f6f4ee`, Carbon Charcoal `#121316`, Klein Cobalt `#0038ff`)
- **Live URL**: [https://venkateshwaran-portfolio.web.app](https://venkateshwaran-portfolio.web.app)
- **Local Dev URL**: `http://localhost:3000` (Dev) / `http://localhost:4173` (Preview)
- **Tech Stack**: Vue.js 3 (Composition API), Vite 6, Tailwind CSS 3, GSAP 3 (ScrollTrigger), Three.js (WebGL 3D Physics), Lenis (Smooth Scroll), Lucide Icons
- **Repository**: [https://github.com/venkatesh281/my_portfolio](https://github.com/venkatesh281/my_portfolio)

---

## 🌟 Creative Direction & Architecture

The site was crafted from the ground up to break away from generic, dark-graphite developer templates. It adopts a tactile, high-contrast broadsheet editorial aesthetic:

1. **Linen Paper Canvas (`#f6f4ee`) & Deep Carbon Ink (`#121316`)**:
   - High contrast, WCAG AA/AAA compliant typography with zero eye-strain.
   - Accented exclusively with international Klein Cobalt (`#0038ff`) and light cobalt (`#60a5fa`).
2. **Interactive 3D Hanging Lanyard Badge (Hero)**:
   - A real-time Three.js physical credential badge hanging from an anchored cord spline (`(0, 3.4, 0)`).
   - Features real, verified data only: **Venkateshwaran**, **Full Stack Developer**, **visu.ai**, **Chennai, India**, and a functional QR code linking to the live portfolio.
   - Desktop: Pointer-reactive spring pendulum physics with natural dampening.
   - Mobile: Touch drag-to-swing interaction, 1.5x DPR cap, `touch-action: pan-y` protection against scroll trapping, and render loop pause when out of view.
   - Layered depth: Placed overlapping a massive low-contrast serif display watermark (`"VENKATESHWARAN"`).
3. **Line-Art Async Backend Pipeline (Skills Section)**:
   - Dynamic SVG line-art schematic representing the real-world async stack:  
     `Django REST Endpoint` ➔ `RabbitMQ Exchange` ➔ `Celery Cluster` ➔ `Redis Cache` ➔ `Vue.js 3 Dashboard`.
   - GSAP ScrollTrigger scrub (`scrub: 1`) smoothly navigates cobalt data packets across nodes as the user scrolls.
   - Followed by a comprehensive 5-column technical specimen sheet detailing all 29 verified skills across 5 categories.
4. **Swiss Chronological Ledger (Experience Section)**:
   - Left-aligned hairline margin dates (`01 // FEB 2026 — PRESENT`), sticky metadata column, and 100% verbatim commercial achievements for **visu.ai** and **Geometriccae Engineering Services**.
5. **Asymmetric Lookbook Gallery (Mentorship Section)**:
   - Features the Guest Lecture at Yadava College (*"Web Development: From Basics To Full Stack"*) and certificate of appreciation.
   - 8 verified on-campus workshop photos with an accessible, keyboard-trapped (`Esc`, `ArrowLeft`, `ArrowRight`) lightbox modal.
6. **Architectural Broadsheet Spreads (Projects Section)**:
   - 4 alternating spreads for **GES CRM Platform**, **Sonashi Service Ticket Management**, **Spring MVC Portal**, and the **Asynchronous Queue Sandbox**.
   - Featured dark carbon container for Project #1, accompanied by monospace vector state machine diagrams.
7. **Dual Credential Plaque (Education & Problem Solving)**:
   - Academic degrees (Master of Science (M.Sc.), Yadava College, 75%; Bachelor of Science (B.Sc.), SVN College, 60%).
   - Problem-solving verification card highlighting 200+ HackerRank challenges solved across Java and Python.
8. **Stationery Letterhead & Colophon (Contact & Footer)**:
   - Minimalist underlined contact form with client-side validation, honeypot bot trap, and double-submit protection.
   - One-click clipboard copy for email and phone number with live feedback toasts, direct WhatsApp link, and downloadable `/resume.pdf`.
   - Editorial footer colophon with live ticking Chennai, India IST local time clock and smooth back-to-top anchor.

---

## ⚡ Performance, Accessibility & Security

- **Lighthouse Scores (Real Measured)**:
  - **Desktop**: Performance **91** | Accessibility **96** | Best Practices **100** | SEO **100**
  - **Mobile**: Performance **80** | Accessibility **96** | Best Practices **100** | SEO **100**
- **First-Paint JS Chunk**: Only **45 kB** (16 kB gzip) thanks to `defineAsyncComponent` dynamic code-splitting.
- **Frame Rate**: Smooth **60 FPS** during active GSAP scroll scrubbing and WebGL render loop.
- **Self-Hosted Typography**: 100% self-hosted Fontsource packages (`@fontsource/newsreader`, `@fontsource/plus-jakarta-sans`, `@fontsource/jetbrains-mono`, `@fontsource/syne`) with zero external CDN dependencies.
- **Security & Caching**: Pre-configured in `firebase.json` with Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, 1-year immutable caching on hashed assets/fonts, and `no-cache` on `index.html`.

---

## 💻 How to Run Locally

### Prerequisites
- **Node.js** (v18 or higher — v22+ recommended)
- **npm** (v9 or higher)

### 1. Clone & Install
```bash
git clone https://github.com/venkatesh281/my_portfolio.git
cd my_portfolio
npm install
```
*(On Windows PowerShell: `npm.cmd install`)*

### 2. Environment Variables Configuration
Copy the template environment file and set your [Web3Forms](https://web3forms.com) access key:
```bash
cp .env.example .env.local
```
Inside `.env.local`:
```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
```
*(Note: `.env.local` is git-ignored to prevent credential leaks. Never commit access keys to public repositories.)*

### 3. Start Development Server
```bash
npm run dev
```
*(On Windows PowerShell: `npm.cmd run dev`)*  
Open your browser and visit: **`http://localhost:3000`**

### 4. Build & Preview Production Bundle
```bash
npm run build
npm run preview
```
*(On Windows PowerShell: `npm.cmd run build ; npm.cmd run preview`)*  
The production build runs at: **`http://localhost:4173`**

---

## 🔥 Step-by-Step: Deploy to Google Firebase Hosting

Firebase Hosting provides a free **Spark Plan** with 10 GB storage, 360 MB/day transfer, automated global SSL, and global Google Edge CDN.

### Step 1: Firebase Authentication
In PowerShell / Terminal:
```powershell
firebase login
```
*(On Windows: `firebase.cmd login`)*  
A browser window opens to log into your Google Account.

### Step 2: Initialize (Only if configuring a new project)
```powershell
firebase init hosting
```
- **Select**: `Use an existing project` ➔ Choose your project ID (e.g. `venkateshwaran-portfolio`)
- **Public directory**: `dist` *(Crucial: enter `dist`, NOT `public`)*
- **Single-page app**: `Yes` (`y`)
- **Set up automatic builds and deploys with GitHub?**: `No` (`n`)
- **File dist/index.html already exists. Overwrite?**: `No` (`N`)

### Step 3: Build & Deploy Live
```powershell
npm.cmd run build
firebase.cmd deploy --only hosting
```

Your portfolio is live with free HTTPS at `https://<your-project-id>.web.app`!

---

## 📁 Project Structure

```
my_porfolio/
├── public/
│   ├── favicon.svg               # Editorial serif 'V' favicon
│   ├── og-image.jpg              # High-res 1200x630 OpenGraph social banner
│   ├── resume.pdf                # Generated printable PDF resume
│   ├── resume.html               # Semantic HTML resume source
│   ├── robots.txt                # SEO crawler directives
│   ├── sitemap.xml               # Canonical XML sitemap
│   ├── site.webmanifest          # PWA web manifest
│   ├── 404.html                  # Editorial 404 fallback page
│   └── images/
│       ├── profile.jpg           # Real verified portrait
│       └── mentoring/            # 8 On-campus workshop and certificate photos
├── src/
│   ├── components/
│   │   ├── NavBar.vue            # Solid paper bar with active spy & mobile drawer
│   │   ├── HeroSection.vue       # Editorial hero, huge watermark & 3D lanyard mount
│   │   ├── HeroLanyard.vue       # Three.js rope physics lanyard & dynamic badge
│   │   ├── MarqueeBar.vue        # High-contrast typography ticker
│   │   ├── AboutSection.vue      # Verbatim engineering ethos & 3 metrics
│   │   ├── SkillsSection.vue     # Dynamic SVG async line-art pipeline & 29-skill sheet
│   │   ├── ExperienceSection.vue # Swiss chronological ledger (visu.ai, Geometriccae)
│   │   ├── MentorshipSection.vue # Asymmetric lookbook gallery & university lecture
│   │   ├── ProjectsSection.vue   # 4 architectural broadsheets with state machines
│   │   ├── EducationSection.vue  # Plaque with M.Sc./B.Sc. & 200+ HackerRank verified
│   │   ├── ContactSection.vue    # Stationery letterhead form, copy buttons, WhatsApp
│   │   ├── FooterBar.vue         # Editorial colophon, ticking IST clock, back-to-top
│   │   └── PhotoModal.vue        # Accessible focus-trapped lightbox modal
│   ├── data/
│   │   └── portfolioData.js      # 100% verified single source of truth
│   ├── App.vue                   # Root component with dynamic component code-splitting
│   ├── main.js                   # Application entry
│   └── style.css                 # Self-hosted Fontsource imports, tokens & resets
├── DESIGN.md                     # Approved Design System & Specification (Draft v3)
├── firebase.json                 # SPA routing, security headers & immutable cache rules
├── index.html                    # Semantic HTML5 shell with meta & JSON-LD Person schema
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite configuration with chunk splitting
```

---

## 📜 License & Attribution

Designed and engineered by **Venkateshwaran**. All rights reserved.  
Open source under the [MIT License](LICENSE).
