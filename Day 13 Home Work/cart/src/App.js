import { useState } from "react";
import "./App.css";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product-1", price: 100, quantity: 0 },
    { id: 2, name: "Product-2", price: 200, quantity: 0 },
    { id: 3, name: "Product-3", price: 300, quantity: 0 },
  ]);
  const [cartItem, setCartItem] = useState([]);

  const handleIncrement = (item) => {
    const itemExist = cartItem.find((Cartitem) => Cartitem.id === item.id);

    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    });

    if (itemExist) {
      setCartItem((prevItems) => {
        return prevItems.map((carti) =>
          carti.id === item.id
            ? { ...carti, quantity: carti.quantity + 1 }
            : carti
        );
      });
    } else {
      addtoCart({ ...item, quantity: 1 });
    }
  };

  const handleDecrement = (item) => {
    const itemExist = cartItem.find((carti) => carti.id === item.id);

    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === item.id
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      );
    });

    if (itemExist) {
      setCartItem((prevItems) => {
        return prevItems.map((carti) =>
          carti.id === item.id
            ? { ...carti, quantity: Math.max(0, carti.quantity - 1) }
            : carti
        );
      });

      if (item.quantity <= 1) {
        removeProduct(item);
      }
    } else {
      if (item.quantity > 0) {
        setCartItem((prevItems) => [...prevItems, item]);
      }
    }
  };

  const removeProduct = (item) => {
    const updated = cartItem.filter((cartItem) => cartItem.id !== item.id);
    setCartItem(updated);
  };

  const addtoCart = (item) => {
    const itemExist = cartItem.find((cartItem) => cartItem.id === item.id);
    if (itemExist) {
      console.log("Item Exist");
    } else {
      setCartItem((prevItems) => [...prevItems, item]);
    }
  };

  const total = cartItem.reduce((acc, item) => {
    const totalPrice = item.price * item.quantity;
    return acc + totalPrice;
  }, 0);
  return (
    <div className="flex items-center justify-center h-screen ">
      <div>
        <div className="flex gap-40">
          <Product
            products={products}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <Cart cartItem={cartItem} total={total} />
        </div>
      </div>
    </div>
  );
}

export default App;
