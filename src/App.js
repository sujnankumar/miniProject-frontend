import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import Chatbot from './components/Chat/Chatbot';
import FoodInfo from './components/Chat/FoodInfo';
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';
import RestaurantProfile from './components/RestaurantDashboard/RestaurantInfo';
import RestaurantDashboard from './components/RestaurantDashboard/RestaurantDashboard';
import AddDishForm from './components/RestaurantForms/AddDishForm';

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
          <Route path="/restaurant/adddish" element={<AddDishForm />} />
        </Routes>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
