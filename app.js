let last = document.querySelector(".last")
let first = document.querySelector(".first")
let send = document.querySelector(".send")

const data = {LastName:last.value, FirstName:first.value, age:45}


send.addEventListener('click', (e) =>{
    console.log(data);
    e.preventDefault()
    fetch('https://my-json-server.typicode.com/wisperwindoxas/ServerOne/Kumkurgan',{
    method: 'POST', // или 'PUT'
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
})
})