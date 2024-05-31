import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Auth/Signup';
import SignIn from './pages/Auth/Signin';
import Home from './pages/Dashboard';
import Promotions from './pages/Promotions';
import Settings from './pages/Products';
import ProtectedRoute from './component/ProtectedRoute';
import AddPromotion from './pages/AddPromotion'

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
          <Route path="/setting" element={<Settings />} />
          <Route path="/addpromotion" element={<AddPromotion/>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
