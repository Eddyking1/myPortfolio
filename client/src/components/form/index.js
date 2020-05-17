import React, { useReducer, useState, useEffect } from "react";
import "./index.scss";
import { Context } from '../../contextApi/newIndex'


function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "submit-data":
      return {
        userList: [
          ...state.userList,
          {
            user: {
              Email: action.data[0],
              Name: action.data[1],
              Job: action.data[2],
              Specifikation: action.data[3]
            }

          }
        ]
      };

    default:
      return state;
  }
}

function Form() {
  const [action, dispatch] = useReducer(Context)

  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");

  const [counter, setCounter] = useState(0);

  useEffect(() => {

  });

  return (
    <div className="wrapper">
      <form
        className="formStyle"
        onSubmit={e => {
          console.log("submit did run");
          e.preventDefault();
          dispatch({
            type: "submit-data",
            data: [data, data1, data2],
            counter,
          });
          setData("");
          setData1("");
          setData2("");
          setData3("");
        }}
      >
        <h1> Send your website request here</h1>
        <div className="formInputs">
          <p> Email address</p>
          <input
            className="input"
            placeholder="Email"
            type="text"
            value={data}
            onChange={e => setData(e.target.value)}
            required={true}
          />
          <p> Namn </p>
          <input
            className="input"
            placeholder="Namn"
            type="text"
            value={data1}
            onChange={e => setData1(e.target.value)}
            required={true}
          />
          <p>Vilket webbpaket är intressant?</p>
          <input
            className="input"
            type="text"
            placeholder="Webbpaket Mini"
            value={data2}
            onChange={e => setData2(e.target.value)}
            required={true}
          />
          <p>Kravspecifikation</p>
          <textarea
            className="input"
            type="text"
            placeholder="Skriv in lista på viktiga funktioner du behöver, Exempel behöver Sliders och inlogg med profilhantering osv"
            value={data3}
            onChange={e => setData3(e.target.value)}
            required={true}
          />
          </div>
          <button className="buttonSubmit" type="submit" onClick={() => (setCounter(counter + 1))}> <p>Submit</p> </button>
          </form>
     {/*  {JSON.stringify(list)} */ }

    </div>
  );
}

export default Form;

