# 🎮 Tic Tac Toe with React

A fun and interactive 2 Player Tic Tac Toe game built with React!

## 🚀 Features

- Playable Tic Tac Toe game with a simple, clean UI.
- Alternates turns between X and O with visual icons.
- Automatically detects and announces a winner or a draw.
- Includes a reset button to start a new game. 🔄

## 💻 Technologies Used

- **React** - For building the user interface.
- **CSS** - For styling and layout.
- **JavaScript** - For game logic.

## 📥 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/nav2103/tictactoe-game.git
cd tictactoe-game
npm install
```

## 🚀 Usage

Start the development server and play the game:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to play the game.

## 🛠️ How It Works

- **Game Board:** A 3x3 grid where players can click to place Xs or Os.
- **Turn Management:** Alternates turns between X and O.
- **Win Detection:** Checks for winning combinations and displays a message if someone wins or if it's a draw.
- **Reset Game:** Click the "Reset" button to clear the board and start over.

## 📁 Files

- **`src/App.js`** - Contains the main component for game logic and UI.
- **`src/tictactoe.css`** - CSS file for styling the game.
- **`src/assets/circle.png`** - Image for the circle icon.
- **`src/assets/cross.png`** - Image for the cross icon.

## 🧩 Code Explanation

- **Refs:** Utilizes `useRef` to manage direct DOM manipulations, like clearing the board.
- **State Management:** Managed with React's `useState` to keep track of game status.
- **Event Handling:** Click events are used to toggle X and O and update the state.
- **Winning Logic:** Checks for winning conditions and updates the UI with results.

## 🤝 Contributing

Feel free to open issues or submit pull requests with improvements or suggestions!

## 📧 Contact

For any questions or feedback, reach out to [navneetsingh2103@gmail.com](mailto:navneetsingh2103@gmail.com).
