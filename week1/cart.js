let cart = [
{ name: 'Pen', price: 2.5, quantity: 4 },
{ name: 'Notebook', price: 5, quantity: 1 },
{name: 'Pencil', price: 1.5, quantity: 2}
];

//to add anew item (1> indicates the index where you want to add, 0>so you don't delete any items)
// cart.splice(1,0,{ name: 'backpack', price: 9, quantity: 1 })
// cart.splice(1,1)
const readlineSync = require('readline-sync');
  
let choice = ''
do{
  choice = readlineSync.question("type a if you want to add and item | r if you want to remove | q if you want to quit: ").toLowerCase()

  switch(choice){
    case 'a':
      let name = readlineSync.question("enter the name: ")
      let price = readlineSync.question("enter the price: ")
      let quantity = readlineSync.question("enter the quantity: ")
      addItem(cart,name,parseFloat(price),parseInt(quantity))
      console.table(cart);
      break
    case 'r':
      let nameRemoved = readlineSync.question("enter the name of the item you want to remove: ")
      removeItem(cart, nameRemoved)
      console.table(cart);
      break
    case 'q':
      console.log("Bye...\n")
      break
    default:
      console.log("wrong entry!\n")
      break
  }
}while(choice!=='q')

//doubleThePrice(cart)
let yn = readlineSync.question("DO you want to get the most expnesive item y/n? ").toLowerCase()
if(yn === 'y'){
  getMostExpensiveItem(cart)
}
let reset = readlineSync.question("\nDo you want to empty your cart? Type 'e' to clear it, or press Enter to keep it: ").toLowerCase()
if(reset === 'e'){
  cartReset(cart)
}
console.table(cart)

// let quan = cart[0].quantity + cart[1].quantity + cart[2].quantity;
// console.log(quan); 

//console.log(`I bought ${cart[0].quantity} ${cart[1].name}s for ${cart[0].price}$`)

/* function calculateTotal(cart){
  let total = 0;
  for(const item of cart){
    total += item.price*item.quantity
  }  
  return total > 50? total * 0.9 : total 
}
console.log(`Cart total $${calculateTotal(cart)} before discount ${x}`)*/

/*
function calculateTotal2(cart){
  let total = 0;
  for(const item of cart){
    total += item.price* item.quantity
  }
  let totalQuantity = 0;
  for(const i of cart){
    totalQuantity += i.quantity
  }  
  if (totalQuantity > 5){
    return total < 30.2? console.log(`the total cost after the 5$ delivery fee and the discount is ${total -(total+5)*0.15}`)
      : console.log(`the total cost after discount is ${(total - total*0.15)}`)
  }
  else if(totalQuantity!=0){
    return total < 30.2? console.log(`the total cost after the 5$ delivery fee is ${total + 5} `)
    : console.log(`the total cost is ${total}`)
  }
  else return "the cart is empty"
}

console.log(calculateTotal2(cart))*/


function addItem(cart,name,price,quantity){
 
  cart.push({name: name, price: price, quantity: quantity})
}

function removeItem(cart, nameRemoved){
  let index = cart.findIndex(i => i.name === nameRemoved)
  if (index !== -1){cart.splice(index, 1)}
}

function doubleThePrice(cart){
  for(const item of cart){
    item.price*=2
  }
}

function getMostExpensiveItem(cart){
  let max = 0;
  let expItem = ""
  for(const item of cart){
    if(item.price > max){max = item.price
      expItem = item.name
    }
  }
  return console.log(`The most expensive item is a ${expItem} with the price of ${max}$\n`)
}

function cartReset(cart){
  cart.length = 0;
}

//////////////////////////////////////////



   