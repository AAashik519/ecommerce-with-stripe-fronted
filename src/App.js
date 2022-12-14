import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
 

function App() {
  return (
    
    <div className="  ">
      <BrowserRouter>
        <Navigation />
        <Routes>
            <Route index element={<Home /> }  />
            <Route  path='/login' element={<Login /> }  />
            <Route  path='/signup' element={<SignUp /> }  />
            <Route  path='*' element={<Home /> }  />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
