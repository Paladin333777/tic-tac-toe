const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']

    const render = () => {
        const board = document.getElementById('game')
        let boardCell
        gameboard.forEach((cell, index) => {
            boardCell = document.createElement('div')
            boardCell.setAttribute('id', `${index}`)
            boardCell.setAttribute('class', 'cell')
            boardCell.innerHTML = `${cell}`
            board.appendChild(boardCell)
        })
        const cells = document.querySelectorAll('.cell')
        cells.forEach((unit) => {
            unit.addEventListener('click', Game.unitClick)
        })
    }

    const update = (index, value) => {
        gameboard[index] = value
    }

    const gameResult = (winner) => {
        const result = document.getElementById('result')
        result.innerHTML = `${winner}`
    }


    const getGameboard = () => gameboard;
    return {
        render, getGameboard, update, gameResult, gameboard
    }
})();

const Game = (() => {
    let players = ['X', 'O']
    let playerIndex = 0
    let gameActive = false;

    const unitClick = (event) => {
        if(gameActive){
            return
        }
        let index = event.target.id
        if(event.target.innerHTML !== '') {
            return
        } else {
            event.target.innerHTML = players[playerIndex]
        }
        Gameboard.update(index, players[playerIndex])

        if(winningComb(Gameboard.getGameboard())){
            Gameboard.gameResult(players[playerIndex] + 'Won!')
            gameActive = true
        } else if(noWinners(Gameboard.getGameboard())) {
            Gameboard.gameResult("I's a tie.")
            gameActive = true
        }

        playerIndex = playerIndex === 0 ? 1 : 0;
    }

    const winningComb  = (gameboard) => {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < combinations.length; i++){
            const [a, b, c] = combinations[i]
            if(gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]){
                return true
            }
        }
        return false
    }

    const noWinners = (gameboard) => {
        return gameboard.every(cell => cell !== '')
    }

    const resetGame = () => {
        const resetButton = document.getElementById('reset')
        resetButton.addEventListener("click", () => {
            for(let i = 0; i < 9; i++){
                Gameboard.gameboard[i] = "";
            }
            Gameboard.gameResult("")
            const squares = document.querySelectorAll('.cell')
            squares.forEach((square) => {
                square.innerHTML = "";
            })
            gameActive = false
        })
    }

    return {
        unitClick, resetGame
    }
})();


Gameboard.render()
Game.resetGame()
