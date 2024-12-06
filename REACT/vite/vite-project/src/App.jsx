import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";

function App() {
  const [store, setStore] = useState({email: "agarwal22041@gmail.com", pwd: "23" }); 

  return (
    <div>
      
      <div>
        <h3>Stored Data:</h3>
        <pre>{JSON.stringify(store, null, 2)}</pre>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<Login regDataLogin={store} />} />
            <Route path="registration" element={<Registration regData={setStore} />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
