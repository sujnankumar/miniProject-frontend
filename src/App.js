import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import Chatbot from './components/Chat/Chatbot';
import FoodInfo from './components/Chat/FoodInfo';
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';
import RestaurantProfile from './components/Restaurant/RestaurantInfo';
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard';
import RestaurantRegister from './components/Restaurant/RestaurantRegister';

function App() {
  return (
    <Router>
      <Layout>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Chatbot />} />
          <Route path="/rest" element={<RestaurantProfile />} />
          <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path='/dish-details' element={<FoodInfo />} />
          <Route path="/profile" element={<UserProfile />} />

          <Route path='/restaurant/register' element={<RestaurantRegister />} />
        </Routes>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
