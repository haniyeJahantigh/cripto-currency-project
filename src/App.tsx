import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainDashboard from './pages/MainDashboard';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
