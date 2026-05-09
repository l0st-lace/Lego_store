const store = document.querySelector(".things-to-buy")
let currentPrice = document.querySelector(".currentPrice")
let add = 0
let amount = 0
store.addEventListener('click', function(event){
    let target = event.target
    let price = Number(target.getAttribute("price"))
    if (target.classList.price)
        if (price > 0){
            amount += 1
            add += price
            currentPrice.textContent = add}
        else if(amount > 0){
            amount -= 1
            add += price
            currentPrice.textContent = add
    }
})
