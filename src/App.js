import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { SidebarContainer, Icon, CloseIcon } from './components/Sidebar/SidebarElement';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import DashboardPage from './pages/dashboard';
import AdminDatabase from './pages/DashAdminPages/Database/AdminDatabase';
// import Navbar from './components/Navbar';
import AdminUsuarios from './pages/DashAdminPages/Usuarios/AdminUsuarios';
import AdminFinanceiro from './pages/DashAdminPages/Financeiro/AdminFinanceiro';
import AdminFuncionarios from './pages/DashAdminPages/Funcionarios/AdminFuncionarios';
import AdminParceiros from './pages/DashAdminPages/Parceiros/AdminParceiros';
import AdminServicos from './pages/DashAdminPages/Serviços/AdminServicos';
// import { ThemeProvider } from '@mui/material';

function App() {
  return (
    // <ThemeProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/entrar" element={<SigninPage />} exact />
          <Route path="/cadastro" element={<SignupPage />} exact />
          <Route path="/dashboard" element={<DashboardPage />} exact />
          {/* ver depois: para não se repetir, utilizar const e map method */}
            <Route path="/dashboard/database" element={<AdminDatabase />} />
            <Route path="/dashboard/usuarios" element={<AdminUsuarios />} exact />
            <Route path="/dashboard/financeiro" element={<AdminFinanceiro/>} exact />
            <Route path="/dashboard/funcionarios" element={<AdminFuncionarios />} exact />
            <Route path="/dashboard/parceiros" element={<AdminParceiros />} exact />
            <Route path="/dashboard/servicos" element={<AdminServicos />} exact />
        </Routes>
      </Router>
    // {/* </ThemeProvider> */}
  );
}

export default App;
