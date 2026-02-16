# LinkedIn Job Cleaner Pro 🧹

A lightweight Chrome Extension designed to declutter your LinkedIn job search by automatically hiding Promoted listings. Focus on real opportunities and stop scrolling through the same ads over and over.

## 🎯 Objective
The primary goal of this extension is to improve the job-seeking experience on LinkedIn by removing "Promoted" content that often saturates search results.

### Key Features:
Real-time Filtering: Uses a MutationObserver to detect and hide promoted jobs dynamically as you scroll.

Smart Detection: Identifies ads in both English ("Promoted") and Spanish ("Promocionado").

Performance Optimized: Implements a debounce strategy and local caching to ensure zero lag while browsing.

Privacy-Focused: All processing happens locally on your machine. No data is collected or sent to external servers.

Dashboard: Includes a popup interface to toggle the cleaner on/off and track how many ads have been blocked.

## 🚀 Installation
Since this is a custom productivity tool, you can install it manually in any Chromium-based browser (Google Chrome, Brave, Microsoft Edge, Opera).

### 1. Download the Code
   Option A: Clone this repository using git:

Bash
git clone https://github.com/your-username/linkedin-job-cleaner.git
Option B: Download the ZIP file and extract it to a folder on your computer.

### 2. Load the Extension in Chrome
   Open your browser and navigate to chrome://extensions/.

Enable "Developer mode" using the toggle switch in the top-right corner.

Click the "Load unpacked" button.

Select the folder where you saved the extension files (the folder containing manifest.json).

### 3. Start Cleaning
   Go to LinkedIn Jobs.

Search for any position.

Click the Extension Icon (puzzle piece) in your browser bar to pin the cleaner.

Watch the "Promoted" tags disappear and check your Blocked Count in the popup!

## 🛠️ Tech Stack
JavaScript (ES6+): For DOM manipulation and mutation tracking.

Chrome Storage API: To persist user preferences and statistics.

HTML/CSS: For the popup interface.

