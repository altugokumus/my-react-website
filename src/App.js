import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Code from "./components/Code";
import About from "./components/About";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Layout from './components/Layout';


function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="code" element={<Code/>} />
          <Route path="design" element={<Design />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
