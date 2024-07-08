document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".box");
    const resultDiv = document.getElementById("result");
    let isXNext = true;
    const winPatterns = [
        [0, 1, 2], // horizontal rows
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // vertical columns
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // diagonal
        [2, 4, 6]
    ];

    buttons.forEach(button => {
console.log(button);

        button.addEventListener("click", () => {
            if (button.innerText === "") {
                button.innerText = isXNext ? "X" : "O";
                button.style.color= isXNext ? "green" : "red";


                if (checkWin(button.innerText)) {
                    resultDiv.innerText = `Player ${button.innerText} wins!`;
                    buttons.forEach(btn => btn.disabled = true); // disable all buttons
                } else if ([...buttons] .every(btn => btn.innerText !== "")) {
                    resultDiv.innerText = "It's a draw!";
                }
                isXNext = !isXNext; // Toggle the flag
            }
        });
    });

    function checkWin(player) {
        return winPatterns.some(pattern => {
            console.log("pattern =" +pattern)
            return pattern.every(index => { 
                console.log("index ="+buttons[index])
                return buttons[index].innerText === player;
               
            });
        });
    }
});

