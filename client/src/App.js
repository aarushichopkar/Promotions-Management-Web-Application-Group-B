import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Auth/Signup';
import SignIn from './pages/Auth/Signin';
import Home from './pages/Dashboard';
import Promotions from './pages/Promotions';
import Product from './pages/Products';
import Profile from './pages/Profile';
import ProtectedRoute from './component/ProtectedRoute';
import AddPromotion from './pages/AddPromotion';
import AddProduct from './pages/AddProduct';

const App = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addpromotion" element={<AddPromotion/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
