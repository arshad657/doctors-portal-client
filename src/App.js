import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home/Home';
import Appointment from './Appointment/Appointment';
import Navigation from './Shared/Navigation/Navigation';
import Login from './Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
    <AuthProvider>
      <Router>

          
          <Navigation />
          <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          </Routes>
          

      </Router>
    </AuthProvider>
    </div>
      
  );
}

export default App;
