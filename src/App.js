import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Coin from "./components/Coin";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/about" element={<About />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
      </Routes>
    </div>
  );
};

export default App;
