// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shortener from './Components/Shortner';
import StatsPage from './Components/StatsPage';
import Redirector from './Components/Redirector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;
