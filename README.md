# TypeRush - A Rapid Typing Game

## Overview

**TypeRush** is a fast-paced typing game built with **React.js, TypeScript, and ShadCN UI**. The goal is to type randomly displayed words as quickly and accurately as possible before time runs out.

## Features

✔️ **Random Word Display** – Users must type the displayed word.  
✔️ **WPM Calculation** – Tracks Words Per Minute (WPM).  
✔️ **Accuracy Measurement** – Shows the percentage of correct words typed.  
✔️ **Game Timer** – 30-second or 1-minute countdown.  
✔️ **Start & Reset Buttons** – Restart the game anytime.  
✔️ **ShadCN UI Components** – Modern UI with smooth interactions.  
✔️ **Dark Mode Support** – Adapts to system theme settings.  
✔️ **Responsive Design** – Optimized for desktop and mobile.  

## Live Demo

🔗 [Play TypeRush](https://typerush.vercel.app/)

## Tech Stack

- **React.js** (Functional Components + Hooks)
- **TypeScript** (for type safety)
- **ShadCN UI** (for modern UI components)
- **Tailwind CSS** (for styling)
- **Vite** (for fast development)
- **React Context API** (for state management)

## Installation & Setup

### Prerequisites  
Ensure you have **Node.js** and **npm/yarn** installed.

### Steps to Run Locally  

1. **Clone the Repository**:  
   ```sh
   git clone https://github.com/AnanthuSpace/typerush.git
   cd typerush
   ```

2. **Install Dependencies**:  
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. **Run the Development Server**:  
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

4. **Open in Browser**:  
   Navigate to `http://localhost:5173/` to start playing.

## Folder Structure

```
typerush/
│── node_modules/            # Project dependencies
│── public/                  # Static files
│── src/                     # Main source code
│   ├── assets/              # Static assets (icons, sounds, etc.)
│   ├── components/          # UI components (Timer, WordDisplay, TypingInput, etc.)
│   ├── lib/                 # Helper functions and reusable utilities
│   ├── pages/               # Page-level components
│   ├── util/                # Utility functions (word generation, scoring, etc.)
│   ├── App.tsx              # Main application entry point
│   ├── css/                 # Global styles
│   │   ├── index.css        # Tailwind and global styles
│   ├── main.tsx             # React DOM rendering
│── .gitignore               # Files to ignore in version control
│── components.json          # ShadCN component configuration
│── eslint.config.js         # Linter configuration
│── index.html               # Main HTML file
│── package-lock.json        # Dependency lock file
│── package.json             # Project metadata and dependencies
│── README.md                # Project documentation
│── tsconfig.app.json        # TypeScript app configuration
│── tsconfig.json            # TypeScript configuration
│── tsconfig.node.json       # TypeScript config for Node.js
│── vite.config.ts           # Vite configuration
```

## Gameplay Instructions

1. Click **Start** to begin.
2. A random word appears on the screen.
3. Type the word as quickly and accurately as possible.
4. Your **WPM** and **accuracy** are updated in real time.
5. When time runs out, your **final score** is displayed.
6. Click **Reset** to play again.

## ShadCN Components Used

The UI is built using **ShadCN** components, ensuring a clean and modern experience.

- **Button** – Used for Start & Reset buttons.
- **Card** – For displaying the score and game stats.
- **Progress Bar** – For showing the remaining time.
- **Input Field** – For user typing interaction.
- **Badge** – For highlighting game stats.

## Bonus Features (Optional)

- **Difficulty Levels** – Easy, Medium, Hard modes.
- **Sound Effects** – Feedback for correct/incorrect typing.
- **Animations** – Smooth transitions and UI feedback.

## Assumptions & Notes

- **No backend required** – Words are generated from a static list.
- **Fully responsive** – Designed for both desktop and mobile users.
- **Minimal yet engaging UI** – Focused on gameplay.

## License

This project is open-source and available under the **MIT License**.

---

If you have any issues or suggestions, feel free to contribute or raise an issue! 