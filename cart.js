let cart = [
{ name: 'Pen', price: 2.5, quantity: 4 },
{ name: 'Notebook', price: 5, quantity: 1 }
];
cart.push({name: 'Pencil', price: 1.5, quantity: 2});
//to add anew item (1> indicates the index where you want to add, 0>so you don't delete any items)
cart.splice(1,0,{ name: 'backpack', price: 9, quantity: 1 })
cart.splice(1,1)
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

function calculateTotal2(cart){
  let total = 0;
  for(const item of cart){
    total += item.price* item.quantity
  }
  let totalQuantity = 0;
  for(const i of cart){
    totalQuantity += i.quantity
  }
  // if (totalQuantity!=0) {
  //   if(totalQuantity > 5){}
  //   if(total < 30.2){total = total+ 5}
  // }
  // return total

  if (totalQuantity > 5){
    return total < 30.2? console.log(`the total cost after the 5$ delivery fee and the discount is ${total -(total+5)*0.15}`): console.log(`the total cost after discount is ${(total - total*0.15)}`)
  }
  else if(totalQuantity!=0){
    return total < 30.2? console.log(`the total cost after the 5$ delivery fee is ${total + 5} `): console.log(`the total cost is ${total}`)
  }
  else return "the cart is empty"
}

console.log(calculateTotal2(cart))