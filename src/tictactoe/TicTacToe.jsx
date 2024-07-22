import "./tictactoe.css";
import circleIcon from "../assets/circle.png";
import crossIcon from "../assets/cross.png";
import { useRef, useState } from "react";

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const titleRef = useRef(null);

  const boxRefs = Array.from({ length: 9 }, () => useRef(null));

  const toggle = (ele, num) => {
    if (lock || data[num]) {
      //   console.log(data[num]);
      return;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      ele.target.innerHTML = `<img src="${crossIcon}">`;
      newData[num] = "x";
    } else {
      ele.target.innerHTML = `<img src="${circleIcon}">`;
      newData[num] = "o";
    }
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (currentData) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (
        currentData[a] !== "" &&
        currentData[a] === currentData[b] &&
        currentData[a] === currentData[c]
      ) {
        won(currentData[a]);
        return;
      }
    }

    if (!currentData.includes("")) {
      titleRef.current.innerHTML = `It's a draw!`;
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congrats, <img src=${crossIcon} alt="X"> won!`;
    } else {
      titleRef.current.innerHTML = `Congrats, <img src=${circleIcon} alt="O"> won!`;
    }
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    titleRef.current.innerHTML = "Tic Tac Toe and <span>Fun</span>";
    boxRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.innerHTML = "";
      }
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe and <span>Fun</span>
      </h1>
      <div className="board">
        <div
          className="boxes"
          ref={boxRefs[0]}
          onClick={(e) => toggle(e, 0)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[1]}
          onClick={(e) => toggle(e, 1)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[2]}
          onClick={(e) => toggle(e, 2)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[3]}
          onClick={(e) => toggle(e, 3)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[4]}
          onClick={(e) => toggle(e, 4)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[5]}
          onClick={(e) => toggle(e, 5)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[6]}
          onClick={(e) => toggle(e, 6)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[7]}
          onClick={(e) => toggle(e, 7)}
        ></div>
        <div
          className="boxes"
          ref={boxRefs[8]}
          onClick={(e) => toggle(e, 8)}
        ></div>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
