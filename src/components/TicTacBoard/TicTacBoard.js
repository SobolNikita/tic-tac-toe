import "./ticTacBoard.css";

const wins = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
];

let curO = [];
let curX = [];
let stepX = true;

function check(num) {
    if (stepX) {
        curX.push(num);
    } else {
        curO.push(num);
    }
    stepX = !stepX;
    console.log(curO);
    console.log(curX);
}

function TicTacBoard() {
    return (
        <div className="wrapper">
            <div className="TicTacBoard">
                <div
                    className="TicTacBoard__block TicTacBoard__block_0"
                    onClick={() => check(0)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_1"
                    onClick={() => check(1)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_2"
                    onClick={() => check(2)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_3"
                    onClick={() => check(3)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_4"
                    onClick={() => check(4)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_5"
                    onClick={() => check(5)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_6"
                    onClick={() => check(6)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_7"
                    onClick={() => check(7)}
                ></div>
                <div
                    className="TicTacBoard__block TicTacBoard__block_8"
                    onClick={() => check(8)}
                ></div>
            </div>
        </div>
    );
}

export default TicTacBoard;
