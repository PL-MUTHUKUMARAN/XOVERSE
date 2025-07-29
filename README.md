# XOVERSE - A Dynamic XO Game

**XOVERSE** is a responsive, browser-based XO (Tic Tac Toe) game developed using HTML, CSS, and JavaScript. It includes both **Player vs Player** and **Player vs Computer** modes, offering an interactive and engaging experience with modern UI styling, scalable vector graphics (SVG), and smooth transitions.

---

## 📁 Project Structure

XOVERSE/  
├── index.html # Main menu and game mode selection  
├── player-vs-player.html # Two-player game interface  
├── player-vs-computer.html # Game with AI opponent  
│  
├── css/  
│ ├── style.css # Common styles  
│ └── main.css # Style for PvP & PvC  
│  
├── js/  
│ ├── player-vs-player.js # Logic for PvP game  
│ └── player-vs-computer.js # Logic for PvC game  
│  
├── assets/  
│ └── sounds/ # Sound effects (click, win, etc.)

---

## 🌟 Features

- ✅ Player vs Player mode with turn-based logic
- ✅ Player vs Computer with basic AI implementation
- ✅ Scoreboard that persists using localStorage
- ✅ Alternates starting player (X/O) each match
- ✅ Fully responsive and mobile-friendly design
- ✅ Sound effects support (click and game events)
- ✅ Clean UI with intuitive layout
- ✅ Game board and moves rendered using SVG elements

---

## 🎯 How to Use

1. Clone the repository or [Download ZIP](https://github.com/PL-MUTHUKUMARAN/XOVERSE/archive/refs/heads/main.zip)
2. Open `index.html` in any modern web browser.
3. Choose the desired game mode (PvP or PvC) and enjoy!

---

## 🧠 Behind the Scenes

- LocalStorage is used to persist score and alternate first player
- Game logic is handled using event listeners and game state arrays
- Clean CSS design using Flexbox for responsive layout
- SVG elements provide crisp, scalable graphics for all display sizes
- JavaScript dynamically controls game flow, player switching, and win detection

---

## 📽️ Preview

▶️ [Click to watch gameplay preview](./xoverse-preview.mp4)

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Responsive with Flexbox)
- Vanilla JavaScript
- SVG (Scalable Vector Graphics)
- LocalStorage API

---

## 📌 Future Improvements

- Multiplayer via WebSockets or Firebase
- Animated transitions and particle effects on win
- Difficulty levels in PvC mode (Easy, Medium, Hard)
- Dark mode toggle

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂ Author

**Muthu Kumaran P**  
💼 Passionate about web development and electronics.  
🔗 [LinkedIn](https://www.linkedin.com/in/plmuthukumaran) | [GitHub](https://github.com/PL-MUTHUKUMARAN)
