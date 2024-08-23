import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/community" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
