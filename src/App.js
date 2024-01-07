import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/counter" Component={CounterPage} />
          <Route path="/todo" Component={TodoPage} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

