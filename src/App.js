import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';

import CardPage from './pages/CardPage';
import CartPage from './pages/CartPage';
import ListCardPage from './pages/ListCardPage';
import LogSingPage from './pages/LogSingPage';
import MainPage from './pages/MainPage';
import NonFoundPage from './pages/NonFoundPage';
import PersonalPage from './pages/PersonalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ListCardPage />} />
        <Route path="/products/:id" element={<CardPage />} />
        <Route path="/cabinet" element={<PersonalPage />} />
        <Route path="/login" element={<LogSingPage />} />
        <Route path="*" element={<NonFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
