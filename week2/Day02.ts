interface CartItem<T> {
product: T;
quantity: number;
total: number;
}

type categories= "electronics" |"clothing" | "books"

interface Product{
  name: string;
  price: number;
  Category : categories;
}

enum orderStatus{
  PENDING = "pending",
  RECIEVED = "recieved",
  REJECTED= "rejected"
}

// 3. Write a generic filter function that works with any array type
function genericFilter<T>(arg:T[],callBack:(item:T) => boolean) :T[]{
  return arg.filter(callBack);  
}

// 5. Build a typed shopping cart system
interface CartItem<T> {
product: T;
quantity: number;
total: number;
}

interface shopingCart<T>{
  items: CartItem<T>[];
  total: number;
  addItem: (product: T, quantity: number) => void;
  removeItem: (productId: string) => void;
}




