import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
// import { SidebarContainer, Icon, CloseIcon } from './components/Sidebar/SidebarElement';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
// import DashboardPage from './pages/dashboard';
import AdminDatabase from './pages/DashAdminPages/Database/AdminDatabase';
// import Navbar from './components/Navbar';
import AdminUsuarios from './pages/DashAdminPages/Usuarios/AdminUsuarios';
import AdminFinanceiro from './pages/DashAdminPages/Financeiro/AdminFinanceiro';
import AdminFuncionarios from './pages/DashAdminPages/Funcionarios/AdminFuncionarios';
import AdminParceiros from './pages/DashAdminPages/Parceiros/AdminParceiros';
import AdminServicos from './pages/DashAdminPages/Serviços/AdminServicos';
// import { ThemeProvider, makeStyles } from '@mui/material';
// import { Grid } from '@mui/material';
import UserDashboard from './pages/DashUserPages/UserDashboard';
import MinhaConta from './pages/DashUserPages/MinhaConta';
import MeusEmprestimos from './pages/DashUserPages/MeusEmprestimos';
import MeusInvestimentos from './pages/DashUserPages/MeusInvestimentos';
// import { Grid } from '@mui/material';
// import { ThemeProvider } from '@mui/material';
// import { dashboardTheme } from './dashboardTheme';
import AdminDashboard from './pages/DashAdminPages/AdminDashboard';
// import  DashDrawer from './components/common/dashDrawer';
import { makeStyles } from '@mui/material'

// const useStyles = makeStyles({
//   container: {
//   display: 'flex',
//   },
//   });

function App() {
  // const classes = useStyles();
  return (
    // <div className={classes.container}>


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/entrar" element={<SigninPage />} exact />
          <Route path="/cadastro" element={<SignupPage />} exact />
            <Route path="userdashboard" element={<UserDashboard />} exact>
              <Route path="minha-conta" element={<MinhaConta />} exact />
              <Route path="meus-investimentos" element={<MeusInvestimentos />} exact />
              <Route path="meus-emprestimos" element={<MeusEmprestimos />} exact />
            </Route>

          <Route path="admin-dashboard" element={<AdminDashboard />} exact >

            <Route path="database" element={<AdminDatabase />} />
            <Route path="usuarios" element={<AdminUsuarios />} exact />
            <Route path="financeiro" element={<AdminFinanceiro/>} exact />
            <Route path="funcionarios" element={<AdminFuncionarios />} exact />
            <Route path="parceiros" element={<AdminParceiros />} exact />
            <Route path="servicos" element={<AdminServicos />} exact />
          </Route>
        </Routes>

      </BrowserRouter>
    // </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import Dashboard from "./pages/dashboard";
// import { Outlet } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import DashHeader from "./components/DashboardSection/dashHeader";
// import AdminDashboard from "./pages/DashAdminPages/AdminDashboard";
// import AdminUsuarios from "./pages/DashAdminPages/Usuarios/AdminUsuarios";
// import { useLocation } from 'react-router-dom';
// import DashDrawer from './components/common/dashDrawer';

// function App() {

//   return (
//     <div className="App">
//       <AdminDashboard />
//       <DashHeader />
//     </div>
//     // <Grid container>
//       /* <DashHeader /> */
//       // <Dashboard />
//       // {/* <Outlet /> */}
//     // {/* </Grid> */}
//   );
// }

// export default App;
