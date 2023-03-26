
import './App.css';
import Navbar from './Component/Global/NavBar/Navbar'
import Home from './Pages/Home'
import Footer from './Component/Global/Footer/Footer'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import Prod from './Component/productDetails/Prod'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from 'react';
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark-mode" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App " id={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product" element={<Product />}>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productDetails" element={<Prod />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
