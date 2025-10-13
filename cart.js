let cart = [
{ name: 'Pen', price: 2.5, quantity: 2 },
{ name: 'Notebook', price: 5, quantity: 1 }
];
cart.push({name: 'Pencil', price: 1.5, quantity: 2});

cart.splice(1,0,{ name: 'backpack', price: 9, quantity: 1 })
cart.splice(1,1)
console.table(cart)

