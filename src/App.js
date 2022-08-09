import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { SidebarContainer, Icon, CloseIcon } from './components/Sidebar/SidebarElement';
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/entrar" element={<SigninPage />} exact />
        {/* <Route path="/entrar" component={SigninPage} exact /> */}
      </Routes>
    </Router>
  );
}

export default App;
