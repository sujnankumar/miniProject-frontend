import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import Chatbot from './components/Chatbot';
<<<<<<< HEAD
import FoodInfo from './components/FoodInfo';
=======
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';
>>>>>>> 32c13cf466c38ea3a92cde321ad835680c398ef3

function App() {
  return (
    <Router>
      <Layout>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Chatbot />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
<<<<<<< HEAD
          <Route path='/dish-details' element={<FoodInfo />} />
=======
          <Route path="/profile" element={<UserProfile />} />
>>>>>>> 32c13cf466c38ea3a92cde321ad835680c398ef3
        </Routes>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
