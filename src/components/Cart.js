import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Example cart data
const initialCartItems = [
  {
    id: 1,
    name: 'Gourmet Burger',
    price: 12.99,
    quantity: 2,
    image: 'https://th.bing.com/th?id=OIP.cFk7icN483HJD3wFnXXyawHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },
  {
    id: 2,
    name: 'Truffle Fries',
    price: 5.49,
    quantity: 3,  
    image: 'https://th.bing.com/th?id=OIP.iZmRJpSySKsI7x8gUlTSyAHaEz&w=310&h=201&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    price: 8.99,
    quantity: 1,
    image: 'https://th.bing.com/th?id=OIP.xnOdHsT-Ny1NUwz1uv5r-AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },
  {
    id: 4,
    name: 'Margarita Pizza',
    price: 10.99,
    quantity: 1,
    image: 'https://th.bing.com/th?id=OIP.cFk7icN483HJD3wFnXXyawHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },
  {
    id: 5,
    name: 'Lemonade',
    price: 3.99,
    quantity: 4,
    image: 'https://th.bing.com/th?id=OIP.iZmRJpSySKsI7x8gUlTSyAHaEz&w=310&h=201&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },
  {
    id: 6,
    name: 'Chocolate Cake',
    price: 6.99,
    quantity: 2,
    image: 'https://th.bing.com/th?id=OIP.9nl2eFOD4SKNC_FIn0bSqQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate total cost
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Increment quantity
  const incrementQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity with confirmation on reaching zero
  const decrementQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            const confirmDelete = window.confirm(`Do you want to remove ${item.name} from the cart?`);
            return confirmDelete ? null : item;
          }
        }
        return item;
      }).filter(Boolean) // Filter out null values (deleted items)
    );
  };

  const onPlaceOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className=" text-white min-h-screen flex flex-col items-center py-10 px-6">
      <div className="w-full rounded shadow-xl p-12 outline outline-2 outline-gray-600 bg-gray-950 bg-opacity-25">
        {/* Header with Add More Button */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold text-white">
            Your Order
          </h1>
          <Link to="/">
            <button className="px-4 py-2 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-transform">
              Add More
            </button>
          </Link>
        </div>

        {/* Cart Items List */}
        <div className="space-y-10">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-gray-700 bg-opacity-40 outline outline-2 outline-gray-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-2xl shadow-lg mr-8"
              />
              <div className="flex-grow">
                <h3 className="text-4xl font-bold text-white">{item.name}</h3>
                <p className="text-lg font-semibold mt-3 text-gray-400">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="flex items-center mt-5 space-x-6">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-5 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    -
                  </button>
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full">
                    <p className="text-2xl">{item.quantity}</p>
                  </div>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-5 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total and Place Order */}
        <div className="border-t mt-10 pt-8">
          <div className="flex justify-between items-center text-2xl font-semibold text-white">
            <p>Total:</p>
            <p className="text-4xl font-bold text-white">${total.toFixed(2)}</p>
          </div>
          <button
            onClick={onPlaceOrder}
            className="w-full mt-10 bg-green-600 text-white text-2xl font-semibold py-6 rounded-full shadow-xl hover:bg-green-700 transition-all"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
