# Melih Resume Landing — Install & Run

## Prerequisites
- Node.js 20+
- npm

## Install
```bash
npm install
```

## Run
```bash
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
```
Output in `dist/`

## Deploy to GitHub Pages

1. Create repo **melih-resume** on GitHub: https://github.com/new
2. Enable Pages: Settings → Pages → Source: **GitHub Actions**
3. Push code (спочатку `npm install` для створення package-lock.json):
```bash
npm install
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Denys-devit/melih-resume.git
git push -u origin main
```
4. After push, workflow runs automatically. Site: **https://denys-devit.github.io/melih-resume/**

> Якщо репо має іншу назву — зміни `base` у `vite.config.ts` на `'/' + назва-репо + '/'`
