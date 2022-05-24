import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "@mui/system";
import "./App.css";
import SimpleBottomNavigation from "./component/BottomNav";
import Header from "./component/Header/Header";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import TvSeries from "./Pages/TvSeries";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvseries" element={<TvSeries />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
