# Quick Start Guide - Samia's Portfolio

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
cd samia-portfolio
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Open http://localhost:3000 in your browser

### 3. Edit Your Information
Edit `client/src/pages/Home.tsx` and update:
- Your name and title
- Email, phone, location
- Experience and education details
- Skills and languages

### 4. Build for Production
```bash
pnpm build
```

### 5. Deploy
Choose one:
- **Netlify**: Connect your GitHub repo (easiest)
- **Vercel**: Import your GitHub repo
- **GitHub Pages**: Use GitHub Actions workflow

---

## 📝 File Locations

| What | Where |
|------|-------|
| Main page | `client/src/pages/Home.tsx` |
| Styles | `client/src/index.css` |
| Colors | `client/src/index.css` (CSS variables) |
| Fonts | `client/index.html` & `client/src/index.css` |

---

## 🎨 Customize Colors

Edit `client/src/index.css`:
```css
:root {
  --primary: #00d9ff;        /* Teal accent */
  --accent: #f4a460;         /* Gold accent */
  --background: #0a0e27;     /* Dark background */
  --foreground: #e8eef5;     /* Light text */
}
```

---

## 📱 Test Responsive Design

Press `F12` in browser → Toggle device toolbar → Test on different sizes

---

## 🔗 Add LinkedIn Link

In `client/src/pages/Home.tsx`, find the social links section and update:
```typescript
href="https://linkedin.com/in/your-username"
```

---

## 📤 Push to GitHub

```bash
git add .
git commit -m "Update portfolio"
git push
```

Your site will auto-deploy on Netlify/Vercel!

---

## ✨ Tips

- Use `pnpm dev` while editing to see changes instantly
- Keep commits small and meaningful
- Test on mobile before deploying
- Update portfolio every 3-6 months

---

## 🆘 Stuck?

1. Check `GITHUB_SETUP_GUIDE.md` for detailed instructions
2. Check `GITHUB_README.md` for full documentation
3. Run `pnpm check` to find TypeScript errors
4. Check browser console (F12) for errors

---

**Ready to deploy? Follow `GITHUB_SETUP_GUIDE.md` next!**
