let btn = document.getElementById('btn')
let mode = 'light'
let body = document.querySelector('body')
let changMode = () => {
    // console.log("mode Changed ")
    // mode === 'light' ? mode = 'dark' : mode = 'light'
    // console.log(mode)
    // body.style.backgroundColor = mode === 'light' ? 'white' : 'black'
    // body.style.color = mode === 'light' ? 'black' : 'white'

    if(mode === 'light'){
        mode = 'dark'
        // body.style.backgroundColor = 'black'
        // body.style.color = 'white'
        body.classList.add('dark')
        body.classList.remove('light')
    }
    else{
        mode = 'light'
        // body.style.backgroundColor = 'white'
        // body.style.color = 'black'
        body.classList.add('light')
        body.classList.remove('dark')
    }
}
btn.addEventListener('click', changMode);