import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import TarotPage from './pages/TarotPage';
// import ReadingPage from './pages/ReadingPage';
// import PlanPage from './pages/PlanPage';
// import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tarot" element={<TarotPage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/result" element={<ResultPage />} /> */}
        {/* 404 fallback */}
        <Route path="*" element={<h2>404 - 페이지를 찾을 수 없습니다</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
