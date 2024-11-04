import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import Chatbot from './components/Chatbot';
import FoodInfo from './components/FoodInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Chatbot />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path='/dish-details' element={<FoodInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
