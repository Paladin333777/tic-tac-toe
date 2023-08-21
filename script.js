const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']

    const render = () => {
        const cells = document.querySelectorAll('.cell')
        const handleClick = (event) => {
            let index = parseInt(event.target.id)
            console.log(index)
        }
        cells.forEach((cell) => {
            cell.addEventListener('click', handleClick){
                Game.update()
            }
        })
    }
    return {
        render
    }
})();

const Game = (() => {
    let players = ['X', 'O']
    let playerIndex = 0
    let gameActive;

    const update = () => {

    }

    playerIndex = playerIndex === 0 ? 1 : 0;

    return {
        update
    }
})();




Gameboard.render()