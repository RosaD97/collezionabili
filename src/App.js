import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './scss/main.css'
import Homepage from './pages/Homepage';
import './card'
import Game from "./pages/Game";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="game/:name" element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;