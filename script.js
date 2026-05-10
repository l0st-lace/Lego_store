const store = document.querySelector(".things-to-buy")
let currentValue = document.querySelector(".currentValue")
let add = 0
store.addEventListener('click', function(event){
    let target = event.target
    let price = Number(target.getAttribute("price"))
    if (target.hasAttribute("price")){
        if (price > 0){
            add += price
            currentValue.textContent = add}
        else{
            add += price
            if (add >= 0){
                currentValue.textContent = add}
            else{
                add -= price
            }}}
})
