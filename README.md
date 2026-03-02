# ✨ Code Quotes Generator

> A fun, interactive coding quote generator built with vanilla JavaScript, HTML, and CSS.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-C9A84C?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/Eldren-cmd/code-qoutes-generator)
[![JavaScript](https://img.shields.io/badge/JavaScript-51%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/Eldren-cmd/code-qoutes-generator)
[![CSS](https://img.shields.io/badge/CSS3-39%25-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/Eldren-cmd/code-qoutes-generator)

---

## 📋 About

A lightweight, zero-dependency quote generator that displays inspiring 
coding quotes. Built with pure JavaScript to practice DOM manipulation, 
localStorage, clipboard API, and event handling — all the fundamentals 
that matter.

---

## ✨ Features

- 🎲 **Random Quotes** — click "New Quote" or press **Spacebar**
- 📋 **Copy to Clipboard** — copies quote + author, with fallback support
- ❤️ **Favourites System** — save and remove favourites via localStorage
- 🎨 **Background Themes** — random gradient on every colour change
- 📱 **Fully Responsive** — mobile-friendly layout with smooth animations
- ⌨️ **Keyboard Shortcut** — press Space to generate instantly

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Quote logic, DOM manipulation, localStorage, clipboard |
| CSS3 | Styling, gradients, animations, responsiveness |
| HTML5 | Structure and layout |

---

## 🚀 Getting Started

**Option 1 — Open directly:**
```bash
git clone https://github.com/Eldren-cmd/code-qoutes-generator.git
cd code-qoutes-generator
open index.html
```

**Option 2 — VS Code Live Server (recommended):**
1. Install the Live Server extension
2. Right-click `index.html` → Open with Live Server

> Clipboard API works best on HTTPS or localhost — 
> Live Server ensures full functionality.

---

## 📁 Project Structure
```
code-qoutes-generator/
├── index.html    # UI structure
├── main.js       # All app logic
└── input.css     # Styles and animations
```

---

## 💡 How It Works

**Quotes** are stored as an array in `main.js`. Clicking New Quote 
picks one at random and updates the display.

**Favourites** are saved to `localStorage` under `favoriteQuotes` 
and persist across page refreshes. The favourite button updates its 
text and style to reflect the current state.

**Copy** formats the text as `"Quote" - Author` and shows a 
confirmation notification after copying.

**Background themes** are stored as an array of CSS gradient strings 
and applied randomly to `document.body`.

---

## 🎨 Customisation

- Add quotes in the `quotes` array in `main.js`
- Add gradient themes in the `backgroundColors` array
- Update colours and animations in `input.css`

---

## 💡 What I Learned

- Vanilla JavaScript DOM manipulation without frameworks
- Browser localStorage API for client-side persistence
- Clipboard API with cross-browser fallback handling
- CSS gradient animations and responsive layout
- Keyboard event listeners for UX shortcuts

---

## 👤 Author

**Gabriel Adenrele Adegboyega** — Full Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-ga--royal--portfolio.vercel.app-C9A84C?style=flat-square&logo=vercel)](https://ga-royal-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Eldren--cmd-1A0A2E?style=flat-square&logo=github)](https://github.com/Eldren-cmd)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-adenrele--gabriel-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/adenrele-gabriel-9332b9183/)

---

## 📄 License

MIT © 2025 Gabriel Adenrele Adegboyega
