# Web Zen 🧘‍♂️

A lightweight Chrome Extension suite designed to declutter your web browsing and improve focus. Web Zen helps you take control of your digital environment by removing distractions and unwanted scripts.

## 🎯 Modules

Web Zen currently includes two powerful modules:

### 1. LinkedIn Cleaner 🧹

Declutter your job search by automatically hiding "Promoted" listings. Focus on real opportunities and stop scrolling through the same ads over and over.

- **Real-time Filtering:** Uses a `MutationObserver` to detect and hide promoted jobs dynamically as you scroll.
- **Smart Detection:** Identifies ads in both English ("Promoted") and Spanish ("Promocionado").
- **Performance Optimized:** Implements a debounce strategy and local caching to ensure zero lag while browsing.

### 2. JS Shield 🛡️

A security and productivity module that allows you to block JavaScript execution on specific domains.

- **Domain Blacklisting:** Prevent scripts from running on distraction-heavy or privacy-invasive websites.
- **Hard Blocking:** Uses Content Security Policy (CSP) and immediate execution stops to ensure no JavaScript runs on blacklisted sites.
- **Local Processing:** All blacklisting checks happen locally for maximum privacy.

## ✨ General Features

- **Privacy-Focused:** All processing happens locally on your machine. No data is collected or sent to external servers.
- **Dashboard:** Includes a popup interface to toggle modules on/off, manage your blacklist, and track blocked content.
- **Lightweight:** Zero dependencies, built with vanilla JavaScript for maximum speed.

## 🚀 Installation

Since this is a custom productivity tool, you can install it manually in any Chromium-based browser (Google Chrome, Brave, Microsoft Edge, Opera).

1.  **Download the Code:**
    - Clone this repository: `git clone https://github.com/your-username/web-zen.git`
    - Or download the ZIP file and extract it to a folder on your computer.
2.  **Load the Extension:**
    - Open `chrome://extensions/`.
    - Enable **"Developer mode"**.
    - Click **"Load unpacked"**.
    - Select the folder containing `manifest.json`.
3.  **Start Browsing:**
    - Pin the Web Zen icon to your browser bar.
    - Open the popup to configure your settings and start decluttering!

## 🛠️ Tech Stack

- **JavaScript (ES6+):** Pure vanilla JS for logic and DOM manipulation.
- **Chrome Extension API:** Utilizing storage, declarativeNetRequest, and messaging.
- **HTML/CSS:** For the custom dashboard interface.
