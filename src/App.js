// src/App.js

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Timesheet from './components/Timesheet';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Header />
      <div className="App__body">
        <Sidebar />
        <main className="App__main-content">
          <Timesheet />
        </main>
      </div>
    </div>
  </ThemeProvider>
  );
}

export default App;
