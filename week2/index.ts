// the class of the object
interface User{
  firstName: string;
  lastName:string;
  age:number;
}

interface Product{
  name: string;
  price: number;
  inStock: boolean;
}
function calculateTotal(price:number, quantity:number, discount:number):number {
  return (price * quantity) * (1 - discount);
 }

//when defining the type of an opject intilize the class AKA the interface 
// and use it as the type of the object in the function specify the value of all the variables
//that are returned 
function formatUser(user: User):{fullName:string; age:number; isAdult:boolean;}{
  return {
  fullName: `${user.firstName} ${user.lastName}`,
  age: user.age,
  isAdult: user.age >= 18
  };
}


const inventory: Product[] = [
{ name: "laptop", price: 1000, inStock: true },
{ name: "mouse", price: 25, inStock: false }
];

