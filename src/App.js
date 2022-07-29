import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
// import { SidebarContainer, Icon, CloseIcon } from './components/Sidebar/SidebarElement';
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />

    </Router>
  );
}

export default App;
