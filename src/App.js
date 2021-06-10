import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/facts" component={Facts} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
