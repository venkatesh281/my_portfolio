# 🚀 Venkateshwaran — Portfolio Website

A personal portfolio website for **Venkateshwaran**, Full Stack Developer.

- **Live URL**: Deployed on **Google Firebase Hosting** (Free Spark Plan)
- **Tech Stack**: Vue.js 3 (Composition API), Vite 6, Tailwind CSS, Lenis (Smooth Scroll), Lucide Icons, Canvas Confetti
- **Repository**: [https://github.com/venkatesh281/my_portfolio](https://github.com/venkatesh281/my_portfolio)

---

## 🌟 Key Features & Architecture
- **Responsive Modern Design**: Deep slate aesthetic (`#080c14`) inspired by Dennis Snellenberg & Reza GHZ, with subtle ambient light followers and fluid typography (`Syne` & `Plus Jakarta Sans`).
- **Hero & Value Proposition**: Spotlights core expertise in Python (Django), PHP (Laravel), Vue.js 3, and Asynchronous Systems (Celery + RabbitMQ + Redis).
- **Mentorship & Student Training Spotlight**: Features the partnership between **Geometriccae Engineering Services** and **Digisailor**, training **85+ college students** into full-stack engineers.
- **Academic Recognition**: Highlighted guest lecture at the *Department of Computer Science & Network Systems and Information Technology* on *"Web Development: From Basics To Full Stack"* with Certificate of Appreciation and an 8-photo interactive lightbox modal.
- **Enterprise Project Showcase**: Detailed architecture breakdowns of **GES CRM Platform**, **Sonashi Service Ticket Management System** (Dubai / UAE), **Spring MVC Portal**, and the **Asynchronous Queue Sandbox**.
- **Problem Solving**: 200+ HackerRank algorithm challenges in Java & Python.
- **Built-in Printable Resume**: High-resolution, clean printable resume at `/resume.html` with direct PDF export support.
- **Direct Contact & WhatsApp**: Instant note dispatcher, one-click copy with confetti celebration, and direct WhatsApp chat links.

---

## 💻 How to Run the Website Locally

### Prerequisites
- **Node.js** (v18 or higher — v22+ recommended)
- **npm** (v9 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/venkatesh281/my_portfolio.git
cd my_portfolio
```

### 2. Install Dependencies
```bash
npm install
```
*(On Windows PowerShell, if scripts are restricted, run: `npm.cmd install`)*

### 3. Start Development Server
```bash
npm run dev
```
*(Or in PowerShell: `npm.cmd run dev`)*  
Open your browser and visit: **`http://localhost:3000`**

### 4. Build for Production & Preview
```bash
npm run build
npm run preview
```
*(Or in PowerShell: `npm.cmd run build; npm.cmd run preview`)*  
The production build will be previewed at: **`http://localhost:4173`**

---

## 🔥 Step-by-Step: Deploy to Google Firebase Hosting (100% Free)

Firebase Hosting provides a free **Spark Plan** with:
- **10 GB** storage & **360 MB/day** transfer (more than enough for a portfolio)
- **Free Automated SSL** (HTTPS out of the box)
- **Global Google Edge CDN** (sub-100ms load times worldwide)
- **Free Custom Domain connection** (e.g., `venkateshwaran.com` or `venkatesh.dev`)
- Zero credit card required!

---

### Step 1: Create a Free Project in Firebase Console
1. Open the [Firebase Console](https://console.firebase.google.com/) in your browser.
2. Sign in with your Google account.
3. Click **"Add project"** (or **"Create a project"**).
4. Enter a project name, e.g., `venkat-portfolio` (or `venkateshwaran-portfolio`).
5. (Optional) Disable Google Analytics if not needed, then click **"Create project"**.
6. Wait 10 seconds for project creation to complete.

---

### Step 2: Log in to Firebase CLI
In your PowerShell / Terminal, run:
```powershell
firebase login --reauth
```
*(Or in Windows: `firebase.cmd login --reauth`)*  
Your web browser will automatically open. Select your Google account and click **"Allow"**. You will see:
> `✔ Success! Logged in as your-email@gmail.com`

---

### Step 3: Connect Firebase to this Project
In the root directory of this project (`D:\Venkat Work\my_projects\my_porfolio`), run:
```powershell
firebase init hosting
```
*(Or in Windows: `firebase.cmd init hosting`)*

Follow these quick prompts:
1. **Please select an option**:  
   Choose **`Use an existing project`**
2. **Select a default Firebase project**:  
   Choose the project you created in Step 1 (e.g. `venkat-portfolio`)
3. **What do you want to use as your public directory?**:  
   Type: **`dist`** *(Crucial: do NOT leave as public!)*
4. **Configure as a single-page app (rewrite all urls to /index.html)?**:  
   Type: **`Yes`** (`y`)
5. **Set up automatic builds and deploys with GitHub?**:  
   Type: **`No`** (`n`) *(You can enable this later if desired)*
6. **File dist/index.html already exists. Overwrite?**:  
   Type: **`No`** (`N`)

---

### Step 4: Build & Deploy Live!
Run the production build and deploy command:
```powershell
npm.cmd run build
firebase.cmd deploy --only hosting
```

Within a few seconds, Firebase CLI will output your live URL:
```text
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/venkat-portfolio/overview
Hosting URL: https://venkat-portfolio.web.app
```

Your portfolio is now live on the internet with a free `https://<your-project-id>.web.app` and `https://<your-project-id>.firebaseapp.com` domain!

---

### (Optional) Step 5: Connect Your Custom Domain (Free)
If you own a custom domain (e.g. `venkateshwaran.com` or `venkat.dev`):
1. In the [Firebase Console](https://console.firebase.google.com/), go to **Hosting**.
2. Click **"Add custom domain"**.
3. Enter your domain name and follow the 2 DNS TXT/A record instructions provided by Firebase in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
4. Firebase automatically provisions a free SSL certificate within 24 hours.

---

## 📁 Project Directory Structure
```
my_porfolio/
├── public/
│   ├── favicon.png               # Stylized 'V' browser tab favicon
│   ├── logo.png                  # High-res purple-blue gradient 'V' squircle brand logo
│   ├── resume.html               # Printable, downloadable full-stack resume
│   └── images/
│       ├── profile.jpg           # Portrait photo
│       └── mentoring/            # 8 On-campus workshop and certificate photos
├── src/
│   ├── components/
│   │   ├── NavBar.vue            # Sticky glassmorphism header with logo and resume link
│   │   ├── HeroSection.vue       # Hero section with balanced typography and metrics
│   │   ├── MarqueeBar.vue        # Infinite tech ribbon
│   │   ├── AboutSection.vue      # Background narrative & 4 engineering pillars
│   │   ├── SkillsSection.vue     # Categorized technical arsenal
│   │   ├── ExperienceSection.vue # Commercial timeline for visu.ai and Geometriccae
│   │   ├── MentorshipSection.vue # Digisailor collaboration & university lecture spotlight
│   │   ├── ProjectsSection.vue   # GES CRM, Sonashi Tickets, Spring MVC, and Queues
│   │   ├── ContactSection.vue    # Copy-to-clipboard email/phone, WhatsApp, and form
│   │   ├── FooterBar.vue         # Copyright, back-to-top, and brand icon
│   │   └── PhotoModal.vue        # Interactive full-screen lightbox modal
│   ├── data/
│   │   └── portfolioData.js      # Centralized profile, experience & projects store
│   ├── App.vue                   # Root component with Lenis smooth scroll & ambient glow
│   ├── main.js                   # Application entry
│   └── style.css                 # Tailwind base, tokens, and custom scrollbar
├── firebase.json                 # Firebase Hosting SPA routing configuration
├── index.html                    # Root HTML with Google Fonts & Open Graph SEO tags
├── package.json                  # Dependencies & build scripts
└── vite.config.js                # Vite configuration
```
