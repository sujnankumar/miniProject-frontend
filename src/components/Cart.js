import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-gray-800 rounded-lg shadow-2xl p-8">
        {/* Header with add More Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Your Order</h1>
          <Link to="/">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-150">
            Add More
          </button>
          </Link>
        </div>

        {/* Grid for Cart Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-150">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-lg font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    -
                  </button>
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg">
                    <p className="text-lg">{item.quantity}</p>
                  </div>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total and Place Order */}
        <div className="border-t mt-6 pt-4">
          <div className="flex justify-between text-lg font-medium">
            <p>Total:</p>
            <p className="text-2xl font-semibold">${total.toFixed(2)}</p>
          </div>
          <button
            onClick={onPlaceOrder}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition duration-150"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
