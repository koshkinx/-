import React from "react";
import "./App.css";
import Snow from "./Snow";

function App() {
  return (
    <div className="container">
      <h1 className="title">Загрузка данных с сервера...</h1>
      <div className="content">
        <p className="text">я взламаю твой код и отправлю в компанию гугл</p>
      </div>
      <Snow />
    </div>
  );
}

export default App;
