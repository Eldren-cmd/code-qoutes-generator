---

# Random Quote Generator ✨ (Coding Quote Generator)

A simple, fun **Random Quote Generator** built with **HTML, CSS, and JavaScript**.
It displays inspiring coding quotes, lets you **copy** them, **save favorites**, and even **change the background gradient**.

## Features

* 🎲 **Generate Random Quotes**: Click “New Quote” to display a random quote.
* 📋 **Copy to Clipboard**: Copy the current quote (with author) to your clipboard. Includes a fallback for browsers where `navigator.clipboard` isn’t available.
* ❤️⭐ **Favorite Quotes**: Toggle favorites (Favorite / Favorited) and store them locally in your browser using `localStorage`.
* 🗑️ **Remove Favorites**: Delete any saved favorite from the favorites list.
* 🎨 **Change Background Color**: Randomly switches the page background to a new gradient theme.
* ⌨️ **Keyboard Shortcut**: Press **Spacebar** to generate a new quote.
* 📱 **Responsive UI**: Mobile-friendly layout with simple animations.

## How It Works

### Quote Generation

* Quotes are stored in an array inside `main.js`.
* Clicking **New Quote** (or pressing **Space**) chooses a random quote and updates the UI.

### Favorites System

* Favorites are stored in `localStorage` under the key:
  `favoriteQuotes`
* The app checks if the displayed quote is already favorited and updates the Favorite button style/text accordingly.
* Favorites are rendered into the “Favorite Quotes” section with a remove button for each item.

### Copy Button

* Copies text in this format:

  ```
  "Quote text" - Author
  ```
* Shows a “✓ Quote copied to clipboard!” notification after copying.

### Background Themes

* Backgrounds are stored as an array of CSS gradient strings.
* Clicking **Change Color** applies a random gradient to `document.body.style.background`.

## Project Structure

```
.
├── index.html      # UI structure (buttons, quote display, favorites section)
├── main.js         # Quote logic, favorites, copy feature, background switching
└── input.css       # Styling, animations, responsiveness
```

## Getting Started

### Option 1: Run Locally (Simple)

1. Download or clone this repository.
2. Open `index.html` in your browser.

### Option 2: Run with Live Server (Recommended)

If you’re using VS Code:

1. Install the “Live Server” extension.
2. Right-click `index.html` → **Open with Live Server**.

This helps avoid some clipboard restrictions in certain browsers.

## Usage

* Click **🎲 New Quote** to generate a new quote.
* Click **📋 Copy Quote** to copy it to your clipboard.
* Click **❤️ Favorite** to save it.
  When saved, the button changes to **⭐ Favorited**.
* Click **🎨 Change Color** to change the background gradient.
* View favorites in the **⭐ Favorite Quotes** section.
* Click **✕** next to a favorite to remove it.
* Press **Spacebar** to generate a new quote quickly.

## Notes / Limitations

* Clipboard access (`navigator.clipboard`) works best on **HTTPS** or `localhost`. A fallback method is included for compatibility.
* Favorites are stored per-browser via `localStorage`, so they persist after refresh but won’t sync across devices.

## Customization

* Add more quotes in `main.js` inside the `quotes` array.
* Add or edit background gradients in the `backgroundColors` array.
* Update styles and colors in `input.css`.

## License

This project is open-source — feel free to use, modify, and share.

---
* write a “Contributing” section,
* or convert this to a Vite/React version while keeping the same features.
