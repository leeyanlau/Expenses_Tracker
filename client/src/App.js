import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/app/App.css";

import { Sidebar } from "./components/index";
import { Dashboard, Budget, Transactions, Entry } from "./pages/index";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
