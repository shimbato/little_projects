import React from "react";
import portfolio from "../assets/portfolio3.jpg";
import "./cartoon.css";
export const Cartoon = () => {
  return (
    <div className="wrap">
      <img src={portfolio} />
      <div className="content">
        <h2>Mobile Developer</h2>
        <p>
          {" "}
          We can't solve every use case, but in the spirit of create-react-app,
          we can try to provide some tools that abstract over the setup process
          and handle the most common use cases, as well as include some useful
          utilities that will let the user simplify their application code.
        </p>
        <button>Click</button>
      </div>
    </div>
  );
};
