import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import Authentication from './pages/Authentication/Authentication';
// import MachineLearning from './pages/MachineLearning/MachineLearning';
// import Hosting from './pages/Hosting/Hosting';
// import Functions from './pages/Functions/Functions';
// import Database from './pages/Database/Database';
// import Storage from './pages/Storage/Storage';
// import { ThemeProvider } from '@mui/material/styles';
// import { dashboardTheme } from './dashboardTheme';
// import App from './App';
// import UserDashboard from './pages/DashUserPages/UserDashboard';
// import MeusEmprestimos from './pages/DashUserPages/MeusEmprestimos';
// import MeusInvestimentos from './pages/DashUserPages/MeusInvestimentos';
// import Home from './pages';
// import SigninPage from './pages/signin';
// import SignupPage from './pages/signup';
// // import Dashboard from './pages/dashboard';
// import AdminDatabase from './pages/DashAdminPages/Database/AdminDatabase';
// // import Navbar from './components/Navbar';
// import AdminUsuarios from './pages/DashAdminPages/Usuarios/AdminUsuarios';
// import AdminFinanceiro from './pages/DashAdminPages/Financeiro/AdminFinanceiro';
// import AdminFuncionarios from './pages/DashAdminPages/Funcionarios/AdminFuncionarios';
// import AdminParceiros from './pages/DashAdminPages/Parceiros/AdminParceiros';
// import AdminServicos from './pages/DashAdminPages/Serviços/AdminServicos';
// import MinhaContas from './pages/DashUserPages/MinhaConta';
// import AdminDashboard from './pages/DashAdminPages/AdminDashboard';
// // import DashDrawer from './components/common/dashDrawer';
// // import { makeStyles}
// // import AdminUsuarios
// // import AdminUsuarios from './pages/DashAdminPages/Usuarios/AdminUsuarios';
// import { makeStyles } from '@mui/material';


// ReactDOM.render(
//   // <ThemeProvider theme={dashboardTheme}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} exact />
//               <Route path="entrar" element={<SigninPage />} exact />
//               <Route path="cadastro" element={<SignupPage />} exact />
//               <Route path="userdashboard" element={<UserDashboard />} exact >
//               <Route path="minha-conta" element={<MinhaContas />} exact />
//               <Route path="meus-investimentos" element={<MeusInvestimentos />} exact />
//               <Route path="meus-emprestimos" element={<MeusEmprestimos />} exact />
//               </Route>
//               <Route path="admin-dashboard" element={<AdminDashboard />} exact>
//               <Route path="database" element={<AdminDatabase />} />
//               <Route path="usuarios" element={<AdminUsuarios />} exact />
//               <Route path="financeiro" element={<AdminFinanceiro/>} exact />
//               <Route path="funcionarios" element={<AdminFuncionarios />} exact />
//               <Route path="parceiros" element={<AdminParceiros />} exact />
//               <Route path="servicos" element={<AdminServicos />} exact />
//               </Route>

//       </Routes>
//     </BrowserRouter>,
//   // </ThemeProvider>,
//   documentgetElementById('root')
// );
