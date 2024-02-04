import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import StartPage from './pages/Startpage';
import Backlog from './pages/Backlog';
import Toplist from './pages/Toplist';
import GameSearch from './pages/GameSearch';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <GameSearch />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/backlog" element={<Backlog />} />
        <Route path="/toplist" element={<Toplist />} />
      </Routes>
    </Router>
  );
};


export default App;
