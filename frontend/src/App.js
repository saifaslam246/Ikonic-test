import "./App.css";
import Main from "./components/Main";
import { CartProvider } from "./context/TextFiledContext";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
