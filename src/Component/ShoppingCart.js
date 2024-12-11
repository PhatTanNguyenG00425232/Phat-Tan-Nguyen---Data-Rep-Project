import React, { useEffect, useState } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cart")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);

  const handleConfirmPurchase = (id) => {
    console.log("Confirming purchase for bike with ID:", id);

    axios
      .delete(`http://localhost:4000/api/cart/${id}`)
      .then((response) => {
        console.log("Bike permanently deleted from cart:", response.data);

        // Update the UI by removing the bike from the cart list
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item._id !== id));
      })
      .catch((error) => console.error("Error confirming purchase:", error));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}
            <button
              onClick={() => handleConfirmPurchase(item._id)}
              className="btn btn-danger"
            >
              Confirm Purchase
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
