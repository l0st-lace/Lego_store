const store = document.querySelector(".buy")
let currentPrice = document.querySelector(".currentPrice")
let add = 0
store.addEventListener('click', function(event){
    let target = event.target
    let price = Number(target.getAttribute("price"))
    add += price
    currentPrice.textContent = add
})
