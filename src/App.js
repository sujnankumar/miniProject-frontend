import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import Chatbot from './components/Chat/Chatbot';
import FoodInfo from './components/Chat/FoodInfo';
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';
<<<<<<< HEAD
import RestaurantProfile from './components/Restaurant/RestaurantInfo';
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard';
import RestaurantRegister from './components/Restaurant/RestaurantRegister';
=======
import RestaurantProfile from './components/RestaurantDashboard/RestaurantInfo';
import RestaurantDashboard from './components/RestaurantDashboard/RestaurantDashboard';
import AddDishForm from './components/RestaurantForms/AddDishForm';
>>>>>>> 5c81b98c929aea74a33318eba18d902d7287d031

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
<<<<<<< HEAD

          <Route path='/restaurant/register' element={<RestaurantRegister />} />
=======
          <Route path="/restaurant/adddish" element={<AddDishForm />} />
>>>>>>> 5c81b98c929aea74a33318eba18d902d7287d031
        </Routes>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
