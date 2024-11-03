import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JavaApiPage from './pages/JavaApiPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/java-api" element={<JavaApiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
