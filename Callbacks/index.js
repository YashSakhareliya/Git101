// let time = () =>{
//     console.log('Time is over');
// }
// console.log('one')
// setTimeout(time, 2000)
// console.log('second')


// callbacks 

// any function arguments pass another function called callbacks

function sum(a,b){
    console.log(a+b)
}

let cal = (a,b,callback) =>{
     callback(a,b)
}
cal(2,30,sum)