import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import HooksPage from './pages/hooks';
import Navbar from './components/Navbar';
import Users from './pages/users';
import User from './pages/user';
import Login from './pages/login';
import withAuthorization from './hocs/withAuthorization';
import Performance from './pages/performance';

const ProtectedUsers = withAuthorization(Users);
const ProtectedUser = withAuthorization(User);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hooks' element={<HooksPage />} />
        <Route path='/users' element={<ProtectedUsers />} />
        <Route path='/user/:id' element={<ProtectedUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/performance' element={<Performance />} />
      </Routes>
    </Router>
  )
}

export default App
