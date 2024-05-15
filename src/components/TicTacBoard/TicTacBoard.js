import { useState } from "react";
import Button from "../Button/Button";

import "./ticTacBoard.css";

function TicTacBoard() {
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

    const wins = [
        ["0", "1", "2"],
        ["0", "4", "8"],
        ["0", "3", "6"],
        ["2", "4", "6"],
        ["2", "5", "8"],
        ["6", "7", "8"],
        ["3", "4", "5"],
        ["1", "4", "7"],
    ];

    let curO = [];
    let curX = [];
    let stepX = true;

    function restart(winner) {
        if (winner === "O") {
            const body = document.getElementsByClassName("blur")[0];
            const circle = document.getElementsByClassName("circle")[0];
            body.classList.add("active");
            circle.classList.add("circle_active");
            setTimeout(() => {
                body.classList.remove("active");
                circle.classList.remove("circle_active");
            }, 2600);
        } else if (winner === "X") {
            const body = document.getElementsByClassName("blur")[0];
            const cross = document.getElementsByClassName("cross")[0];
            body.classList.add("active");
            cross.classList.add("cross_active");
            setTimeout(() => {
                body.classList.remove("active");
                cross.classList.remove("cross_active");
            }, 2600);
        } else if (winner === "draw") {
            const body = document.getElementsByClassName("blur")[0];
            const draw = document.getElementsByClassName("draw")[0];
            body.classList.add("active");
            draw.classList.add("draw_active");
            setTimeout(() => {
                body.classList.remove("active");
                draw.classList.remove("draw_active");
            }, 2600);
        }
        curO = [];
        curX = [];
        stepX = (scoreX + scoreO) % 2;
        const board = document.getElementsByClassName("TicTacBoard");
        [...board[0].children].forEach((e) => {
            e.innerHTML = "";
        });
    }

    function checkWin(name) {
        for (let i = 0; i < wins.length; i++) {
            let isntcontains = false;
            for (let j = 0; j < 3; j++) {
                if (name === "O" && !curO.includes(wins[i][j]))
                    isntcontains = true;
                if (name === "X" && !curX.includes(wins[i][j]))
                    isntcontains = true;
            }
            if (!isntcontains) {
                return true;
            }
        }
        return false;
    }

    function check(num) {
        if (num.target.innerHTML.length) return;

        if (stepX) {
            num.target.innerHTML = "X";
            curX.push(num.target.id);
            if (checkWin("X")) {
                setScoreX((prev) => prev + 1);
                restart("X");
            }
        } else {
            num.target.innerHTML = "O";
            curO.push(num.target.id);
            if (checkWin("O")) {
                setScoreO((prev) => prev + 1);
                restart("O");
            }
        }
        if (curO.length + curX.length === 9) {
            restart("Draw");
        }
        stepX = !stepX;
    }

    function fullrestart() {
        restart();
        setScoreX((prev) => 0);
        setScoreO((prev) => 0);
    }

    return (
        <>
            <div className="blur"></div>
            <div className="circle"></div>
            <div className="cross"></div>
            <div className="draw"></div>
            <div className="wrapper">
                <div className="TicTacBoard" onClick={(e) => check(e)}>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_0"
                        id="0"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_1"
                        id="1"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_2"
                        id="2"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_3"
                        id="3"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_4"
                        id="4"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_5"
                        id="5"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_6"
                        id="6"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_7"
                        id="7"
                    ></div>
                    <div
                        className="TicTacBoard__block TicTacBoard__block_8"
                        id="8"
                    ></div>
                </div>
                <div className="scoreBlock">
                    <div className="score">Score(X): {scoreX}</div>
                    <div className="score">Score(O): {scoreO}</div>
                </div>
                <div className="restart">
                    <Button modify="small" text="restart" click={fullrestart} />
                </div>
            </div>
        </>
    );
}

export default TicTacBoard;
