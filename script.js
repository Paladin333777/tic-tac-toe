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
        console.log(gameboard)
    }

    const getGameboard = () => gameboard;
    return {
        render, getGameboard, update
    }
})();

const Game = (() => {
    let players = ['X', 'O']
    let playerIndex = 0
    let gameActive;

    const unitClick = (event) => {
        let index = event.target.id
        if(event.target.innerHTML !== '') {
            return
        } else {
            event.target.innerHTML = players[playerIndex]
        }
        Gameboard.update(index, players[playerIndex])

        playerIndex = playerIndex === 0 ? 1 : 0;
    }

    return {
        unitClick
    }
})();

Gameboard.render()
