import React, { useState } from "react";
import "./App.css";
import iris from "./assets/iris.jpg";

const App = () => {
  const [output, setOutput] = useState();
  return (
    <div className="container">
      <div className="header">
        <u>Iris Species Predictor</u>
      </div>
      <img src={iris} alt="Iris Flower" style={{ marginBottom: "2%" }} />
      <div className="spec_input_form">
        <div className="form_header">
          Input Following Specifics About The Flower To Predict
        </div>
        <div className="form_field">
          <div className="form_label">Sepal Length(cm):</div>

          <input className="form_input"></input>
        </div>
        <div className="form_field">
          <div className="form_label">Sepal Width(cm):</div>

          <input className="form_input"></input>
        </div>
        <div className="form_field">
          <div className="form_label">Petal Length(cm):</div>

          <input className="form_input"></input>
        </div>
        <div className="form_field">
          <div className="form_label">Petal Width(cm):</div>

          <input className="form_input"></input>
        </div>
      </div>
      <div className="predicted_output">Predicted Iris Species:{output}</div>
    </div>
  );
};

export default App;
