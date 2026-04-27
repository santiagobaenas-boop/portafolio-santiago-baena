import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AppEn from './en/App';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/en" element={<AppEn />} />
      </Routes>
    </BrowserRouter>
  );
}
