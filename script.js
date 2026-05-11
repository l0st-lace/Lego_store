const currentValue = document.querySelector(".currentValue")
const store = document.querySelector(".things-to-buy")
let add = 0
store.addEventListener("click", function(event){
    let target = event.target
    let price = Number(target.getAttribute("price"))
    if (price > 0){
        let num = Number(target.getAttribute("number"))
        let minBtn = store.querySelectorAll(".minBtn")[num]
        let currentAmount = store.querySelectorAll(".currentAmount")[num]
        let amount = Number(minBtn.getAttribute("amount"))
        amount += 1
        add += price
        currentValue.textContent = add
        currentAmount.textContent = amount
        minBtn.setAttribute("amount", amount)}
    else{
        let amount = Number(target.getAttribute("amount"))
        if (amount > 0){
            let num = Number(target.getAttribute("number"))
            let currentAmount = store.querySelectorAll(".currentAmount")[num]
            amount -= 1
            add += price
            currentValue.textContent = add
            currentAmount.textContent = amount
            target.setAttribute('amount', amount)}}
})
