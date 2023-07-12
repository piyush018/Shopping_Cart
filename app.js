console.log("hi")

const cart = []

function showItems(){
console.log(`you have ${cart.length} in the cart`)
}

function addItems(name , price , quantity){
    const items = { "name"  : name , "price" : price , "quantity" : 4}
      cart.push(items)
}

addItems('Apple', 99 )
addItems('Orange' , 89)
showItems()