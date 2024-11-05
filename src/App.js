import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import Chatbot from './components/Chatbot';
import FoodInfo from './components/FoodInfo';
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';
import RestaurantProfile from './components/RestaurantInfo';

function App() {
  return (
    <Router>
      <Layout>

      <div className="App bg-gray-900">
        <Routes>
          <Route exact path="/" element={<Chatbot />} />
          <Route path="/rest" element={<RestaurantProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path='/dish-details' element={<FoodInfo />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
