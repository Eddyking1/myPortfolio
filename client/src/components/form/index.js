import React, { useState, useContext } from "react";
import { Context } from '../../contextApi/newIndex'
import { SUBMIT_FORM } from "../../actions/types";

function Form() {
  const [state, dispatch] = useContext(Context);

  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit did run");
    dispatch({
      type: SUBMIT_FORM,
      payload: [data, data1, data2],
      counter,
    });
    setData("");
    setData1("");
    setData2("");
    setData3("");
  };

  return (
    <div className="wrapper">
      <form className="formStyle" onSubmit={handleSubmit}>
        <div className="formInputs">
          <h1> Submit your website request here!</h1>
          <p> Namn </p>
          <input
            className="input"
            placeholder="Namn"
            type="text"
            value={data1}
            onChange={(e) => setData1(e.target.value)}
            required={true}
          />
          <p> Email address</p>
          <input
            className="input"
            placeholder="Email"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required={true}
          />
          <p>Vilket webbpaket är intressant?</p>
          <select
            className="input"
            value={data2}
            onChange={(e) => setData2(e.target.value)}
            required={true}
          >
            <option value="WebbSimple">WebbSimple</option>
            <option value="WebbMidi">WebbMidi</option>
            <option value="WebbAdvanced">WebbAdvanced</option>
          </select>
          <p>Kravspecifikation</p>
          <textarea
            className="input"
            placeholder="Skriv in lista på viktiga funktioner du behöver, Exempel behöver Sliders och inlogg med profilhantering osv"
            value={data3}
            onChange={(e) => setData3(e.target.value)}
            required={true}
          />
          <button className="buttonSubmit" type="submit">
            <p>Submit</p>
          </button>
        </div>
      </form>
      {/*  {JSON.stringify(list)} */}
    </div>
  );
}

export default Form;
