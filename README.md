# NookOffice - Hourly Animal Crossing Music

[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/VijiatJack/nookoffice/commits/main)
[![Site Status](https://img.shields.io/website-up-down-green-red/https/vijiatjack.github.io/nookoffice/.svg)](https://vijiatjack.github.io/nookoffice/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/VijiatJack/nookoffice/blob/main/LICENSE)

> **Visit the live site: [nookoffice.live](https://vijiatjack.github.io/nookoffice/)**

NookOffice provides a relaxing and productive environment by streaming hourly rotating music from Animal Crossing: New Horizons. It's perfect for studying, working, or just unwinding. The site also includes ambient rain sounds, a to-do list, and simple timers to help you stay focused.

This project is a fork and continuation of the original NookOffice by [@cjlaserna](https://github.com/cjlaserna). Please consider supporting her work!

![Site Image](/public/timerprev.png)

## ✨ Features

- **Hourly Music:** Automatically plays the corresponding Animal Crossing: New Horizons music for the current hour.
- **Ambient Sounds:** Layer calming rain sounds over the music.
- **To-Do List:** A simple, locally-saved to-do list to keep track of your tasks.
- **Timers:** Quick access to 5, 10, and 15-minute timers.
- **Notion-Embeddable:** Easily embed NookOffice into your Notion pages.

## 🛠️ How It Works

NookOffice is a web application built with [Astro](https://astro.build/). It uses client-side JavaScript to:
- Determine the current hour and select the appropriate music track.
- Play and loop background music and ambient sounds.
- Manage the to-do list state using the browser's `localStorage`.
- The user interface is built with Astro components and styled with CSS.

## 🚀 Getting Started (for Developers)

Want to run NookOffice locally or contribute to the project? Follow these steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or `pnpm`, `yarn`)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/VijiatJack/nookoffice.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd nookoffice
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:
```bash
npm run dev
```
This will start the application, typically on `http://localhost:4321`. The server supports Hot Module Replacement (HMR), so changes to your code will be reflected in the browser instantly.

### Building for Production

To create a production-ready build of the site, run:
```bash
npm run build
```
The optimized static files will be generated in the `dist/` directory.

## 🔮 Future Plans

- A more robust and customizable timer.
- Music from other games in the Animal Crossing franchise.
- A simple integrated notepad.

## 🎨 Sources & Credits

- **Original Concept:** @cjlaserna
- **Artist (Saino):** The artist behind some of the visual assets.
- **GIFs:** Most other GIFs are from the official Animal Crossing Movie / Anime.

---

[![Donate to the original creator](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/clasernaj)
[![Embed in Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)](https://vijiatjack.github.io/nookoffice/?embed=true)
[![View on Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/TIMSI0wSvnRDxgad2BNZv8/Nook-Office?node-id=0%3A1&t=xeY0HWG6hw3KkrcP-1)

