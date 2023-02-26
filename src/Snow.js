import React from "react";
import "./Snow.css";

const Snow = () => {
  const snowflakes = [];

  for (let i = 0; i < 100; i++) {
    snowflakes.push(<div key={i} className="snowflake"></div>);
  }

  return <div className="snow-container">{snowflakes}</div>;
};

export default Snow;
