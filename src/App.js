import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';

import CardPage from './pages/CardPage';
import CartPage from './pages/CartPage';
import ListCardPage from './pages/ListCardPage';
import Authorization from './pages/Authorization';
import MainPage from './pages/MainPage';
import NonFoundPage from './pages/NonFoundPage';
import PersonalPage from './pages/PersonalPage';
import { useAuth } from './hooks/use-auth';

function App() {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ListCardPage />} />
        <Route path="/products/:id" element={<CardPage />} />
        <Route
          path="/profile"
          element={isAuth ? <PersonalPage /> : <Navigate to="/authorization" replace />}
        />
        <Route
          path="/authorization"
          element={!isAuth ? <Authorization /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<NonFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
