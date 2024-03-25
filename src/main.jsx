import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Infos from "./pages/infos/infos";
import Home from "./pages/home/home";
import './index.css';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="containerApp">
        <Sidebar />
        <main className="contentApp">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/infos" element={<Infos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
