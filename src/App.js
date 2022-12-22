import React from "react";
import { Navbar } from "./components/navbar/index";
import { PortBanner } from "./components/main/index";
import { Products } from "./components/product/index";
import { Footer } from "./components/footer/index";

import 'boxicons';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <PortBanner />
      <Products />
      <Footer />


    </div>
  );
}

export default App;