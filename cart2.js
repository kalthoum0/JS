const shoppingCart = {
 items: [ { name: 'Pen', price: 2.5, quantity: 2 },
          { name: 'Notebook', price: 5, quantity: 1 },
          {name: 'Pencil', price: 1.5, quantity: 2}],
  addItem(name, price, qty) {
    this.items.push({ name: name, price: price, quantity:qty }); 
    
    renderCart(this)}
  ,getTotal() { 
    return this.items.reduce((t, i) => t + i.price * i.quantity,0); },
  removeItem(name){
    let index = this.items.findIndex(i => i.name === name)
    if (index !== -1){this.items.splice(index, 1)}
  },
  clearCart(){
    this.items.length = 0;
  },
  checkOut(){    
    if(this.items.length === 0) alert("Your cart is empty! Add items before checkout.");
    
    else 
      alert("Checkout clicked! Total is $" + this.getTotal().toFixed(2));
    }
};

function renderCart(shoppingCart) {
      const tbody = document.querySelector('#cartTable tbody');
      tbody.innerHTML = shoppingCart.items.map((item, i) => `
        <tr>
          <td>${i}</td>
          <td>${item.name}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>${item.quantity}</td>
          <td>${(item.price*item.quantity).toFixed(2)}</td>
        </tr>
        `).join('')

        document.getElementById('totalCell').textContent = 
          '$' + shoppingCart.items.reduce((t,i)=>t+i.price*i.quantity,0).toFixed(2);
    }
    renderCart(shoppingCart);

    document.getElementById('chkOutBtn').addEventListener('click',()=>{
      if(shoppingCart.items.length === 0){
        console.log("Your cart is empty! Add items before checkout.")
      }
      else{
        console.log("Checkout clicked! Total is $" + 
        shoppingCart.items.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2));
      } 
    })

