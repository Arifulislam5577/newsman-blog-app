import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
