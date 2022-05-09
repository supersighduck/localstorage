// initialize local storage
// add eventlistener to button
// make function, get value from local storage, add 1 to local storage

if(!localStorage.getItem('player1Points')){
    localStorage.getItem('player1Points', 0)
}
document.querySelector('button').addEventListener('click', addingOne)

function addingOne (){
    let player1PointValue = Number(localStorage.getItem('player1Points'))
    console.log(typeof(player1PointValue))
    player1PointValue += 1
    localStorage.setItem('player1Points', player1PointValue)
}

document.querySelector('#clearButton').addEventListener('click', clear)
function clear(){
    localStorage.clear()
}