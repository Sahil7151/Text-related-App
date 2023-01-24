import React, { useState } from "react";
import Info from "./Info";

export default function Area(props) {
  const uc = () => {
    var upper = text.toUpperCase();
    setText(upper);
    props.showAlert("# TEXT IS CONVERTED TO UPPERCASE #", "success");
  };

  const lc = () => {
    var lower = text.toLowerCase();
    setText(lower);
    props.showAlert("# TEXT IS CONVERTED TO LOWERCASE #", "success");
  };

  const cc = () => {
    var lw = text ? text.split(" ") : [];
    for (let i = 0; i < lw.length; i++) {
      lw[i] = lw[i][0].toUpperCase() + lw[i].substring(1);
    }
    setText(lw.join(" "));
    props.showAlert("# TEXT IS CONVERTED TO CAPITALCASE #", "info");
  };

  const ct = () => {
    var nw = "";
    setText(nw);
    props.showAlert("# TEXT IS CLEARED SUCCESSFULLY #", "info");
  };

  const res = () => {
    var rs = text.split(/[ ]+/);
    setText(rs.join(" "));
    props.showAlert("# EXTRA SPACSES ARE REMOVED PROPERLY #", "secondary");
  };

  const oc = (event) => {
    setText(event.target.value);
  };

  const cot = () => {
    var copy = document.getElementById("my");
    // copy.select();
    navigator.clipboard.writeText(copy.value);
    props.showAlert("# TEXT IS COPIED TO CLIPBOARD #", "secondary");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="form-group"
        style={{
          color: props.mode === "dark" ? "#e3c78a" : "#643E46FF",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="my"
          rows="13"
          onChange={oc}
          style={{
            backgroundColor: props.mode === "dark" ? "#643E46FF" : "#e3c78a",
            color: props.mode === "dark" ? "#e3c78a" : "#643E46FF",
            borderColor: props.mode === "light" ? "#643E46FF" : "white",
          }}
        ></textarea>
      </div>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={uc}
        disabled={text.length === 0}
      >
        $ convert to uppercase $
      </button>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={lc}
        disabled={text.length === 0}
      >
        $ convert to lowercase $
      </button>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={cc}
        disabled={text.length === 0}
      >
        $ convert to capitalcase $
      </button>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={ct}
        disabled={text.length === 0}
      >
        $ clear text $
      </button>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={cot}
        disabled={text.length === 0}
      >
        $ copy text $
      </button>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={res}
        disabled={text.length === 0}
      >
        $ Remove extra space $
      </button>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "#e3c78a" : "#643E46FF",
        }}
      >
        <h2>Your TEXT Summary :~</h2>
        <p style={{ textDecorationLine: "underline" }}>
          There are {text.length} Letters &{" "}
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          Words.
        </p>
        <p style={{ textDecorationLine: "underline" }}>
          Time Required to Read this TEXT is{" "}
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}
        </p>
        <h3>PREVIEW</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in textbox to preview here:->"}
        </p>
      </div>
      <Info />
    </>
  );
}
