import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
}

export default App;
