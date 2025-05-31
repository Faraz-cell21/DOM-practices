const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id
    })
})

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.id === 'grey')
//         {
//             body.style.backgroundColor = 'grey' // or e.target.id
//         }
//         if(e.target.id === 'white')
//         {
//             body.style.backgroundColor = 'white' // or e.target.id
//         }
//         if(e.target.id === 'blue')
//         {
//             body.style.backgroundColor = 'blue' // or e.target.id
//         }
//         if(e.target.id === 'yellow')
//         {
//             body.style.backgroundColor = 'yellow' // or e.target.id
//         }
//         if(e.target.id === 'purple')
//         {
//             body.style.backgroundColor = 'purple' // or e.target.id
//         }
//         if(e.target.id === 'red')
//         {
//             body.style.backgroundColor = 'red' // or e.target.id
//         }
//     })
    
// })