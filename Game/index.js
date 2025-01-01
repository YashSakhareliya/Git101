let boxex = document.querySelectorAll('.box')
// console.log(boxex)
let winner_box  = document.querySelector('.winner')
let winner_text = document.querySelector('.winner-text')
let reset = document.querySelector('.reset')
let play_again = document.querySelector('.play-again')

let click = 0

let perO = true 
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

boxex.forEach(box => {
    box.addEventListener('click', () =>{
        console.log('clicked')
        if(perO){
            box.innerHTML = 'O'
            perO = false
            
        }else{
            box.innerHTML = 'X'
            perO = true
        }
        box.disabled = true;
        checkWinner()
    })
});


let disablebox = ()=>{
    boxex.forEach(box => {
        box.disabled = true;
    });
}

play_again.addEventListener('click',()=>{
    let perO = true
    click = 0
    boxex.forEach(box => {
        box.innerHTML = ''
        box.disabled = false;
    });
    winner_box.classList.add('hide')
})

reset.addEventListener('click',()=>{
    let perO = true
    click = 0
    boxex.forEach(box => {
        box.innerHTML = ''
        box.disabled = false;
    });
    winner_box.classList.add('hide')
    
})
let printWinner = (winner)=>{

    if(winner === 'Tie'){
        console.log('Tie')
        winner_text.innerHTML = 'Tie'
        winner_box.classList.remove('hide')
        click = 0
        return
    }
    console.log(`Player ${winner} wins!`)
    winner_text.innerHTML = `Player ${winner} wins!`
    disablebox()
    winner_box.classList.remove('hide')
}

let checkWinner = ()=>{
    click++
    if(click>8){
        printWinner('Tie')
    }
    for(pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2])
        let first = boxex[pattern[0]].innerHTML;
        let second = boxex[pattern[1]].innerHTML;
        let third = boxex[pattern[2]].innerHTML;

        // console.log(first,second,third)
        if(first !== '' || second !== '' || third !== ''){
            if(first===second && second===third){
                printWinner(first)
                
            }
        }
    } 
}