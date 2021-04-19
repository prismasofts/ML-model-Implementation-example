import React, { useState } from "react";
import "./App.css";
import iris from "./assets/iris.jpg";
import axios from "axios";
import toast from "react-hot-toast";

const App = () => {
  const [output, setOutput] = useState();
  const [sl, setSl] = useState(0);
  const [sw, setSw] = useState(0);
  const [pl, setPl] = useState(0);
  const [pw, setPw] = useState(0);

  const Handlesl = (e) => {
    let data = parseInt(e.target.value);
    // console.log(typeof data);
    setSl(data);
    // console.log("sl", e.target.value);
  };
  const Handlesw = (e) => {
    let data = parseInt(e.target.value);
    // console.log(typeof data);
    setSw(data);
    // console.log("sl", e.target.value);
  };
  const Handlepl = (e) => {
    let data = parseInt(e.target.value);
    // console.log(typeof data);
    setPl(data);
    // console.log("sl", e.target.value);
  };
  const Handlepw = (e) => {
    let data = parseInt(e.target.value);
    // console.log(typeof data);
    setPw(data);
    // console.log("sl", e.target.value);
  };

  const HandleSubmit = async () => {
    // const url = "http://127.0.0.1:5000/predict";
    // console.log(typeof sl);
    let datas = {
      sl: sl,
      sw: sw,
      pl: pl,
      pw: pw,
    };

    let apiData = JSON.stringify(datas);
    console.log("apiData:", apiData);
    axios({
      method: "post",
      url: "https://ml-example.herokuapp.com/predict",
      data: apiData,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("inside success then");
        console.log("response:", res.data.data);
        setOutput(res.data.data);
        toast.success("Predicted successfully.");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("error.message");
      });
  };

  return (
    <div className="container">
      <div className="header">
        <u>Iris Species Predictor</u>
      </div>
      <img src={iris} alt="Iris Flower" style={{ marginBottom: "2%" }} />
      <div className="spec_input_form">
        <div className="form_header">
          Please Input Following Specifics About The Flower To Predict
          <br />
          <div style={{ color: "red" }}>(In Numbers)</div>
        </div>
        <div className="form_fields">
          <div className="form_field">
            <div className="form_label">Sepal Length(cm):</div>

            <input className="form_input" onChange={Handlesl}></input>
          </div>
          <div className="form_field">
            <div className="form_label">Sepal Width(cm):</div>

            <input className="form_input" onChange={Handlesw}></input>
          </div>
          <div className="form_field">
            <div className="form_label">Petal Length(cm):</div>

            <input className="form_input" onChange={Handlepl}></input>
          </div>
          <div className="form_field">
            <div className="form_label">Petal Width(cm):</div>

            <input className="form_input" onChange={Handlepw}></input>
          </div>
        </div>
      </div>
      <div className="predict_button">
        <button className="button_text" onClick={HandleSubmit}>
          Predict
        </button>
      </div>
      <div className="predicted_output">
        Predicted Iris Species:
        <br />
        <div style={{ color: "red" }}>{output}</div>
      </div>
    </div>
  );
};

export default App;
