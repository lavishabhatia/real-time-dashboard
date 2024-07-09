// src/App.js
import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import ChartPage from "./pages/ChartPage";
import TablePage from "./pages/TablePage";
import StatsPage from "./pages/StatsPage";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main>
              <Routes>
                <Route path="/charts" element={<ChartPage />} />
                <Route path="/table" element={<TablePage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/" exact element={<ChartPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
