import { Routes, Route } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline"
import Header from './components/Header/header';
import Table from './components/Table/table';
import RegisterPage from './components/Forms/registerPage';
import UpdatePage from './components/Forms/updatePage';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Header title="Lista de clientes" />
      <main>
        <Routes>
          <Route exact path="/" element={<Table />} />
          <Route path="/registrar" element={<RegisterPage />} />
          <Route path="/editar/:id" element={<UpdatePage />} />
        </Routes>
      </main>
    </div>
  );
}