//https://www.youtube.com/watch?v=h2a0cSC1Vz8
//https://www.youtube.com/watch?v=f0X1Tl8aHtA

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tutorial from "./pages/Tutorial";
import Countires from "./components/Countries";


const App = () => {
  // state


  // comportements

  // render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/country" element={<Countires />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;