import "./App.css";
import Navbar from "./components/Navbar";
import Area from "./components/Area";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Time from "./components/Time";
import Date from "./components/Date";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  const [m, sm] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2300);
  };

  const tm = () => {
    if (m === "light") {
      sm("dark");
      document.body.style.backgroundColor = "#643E46FF";
      showAlert("# DARK MODE IS ACCESSED SUCCESSFULLY #", "danger");
      document.title = "IN DARK-MODE";
      setInterval(() => {
        document.title = "~~~~This APP is very useful for TEXT operations.";
      }, 1956);
    } else {
      sm("light");
      document.body.style.backgroundColor = "#e3c78a";
      showAlert("# LIGHT MODE IS ACCESSED SUCCESSFULLY #", "danger");
      document.title = "IN LIGHT-MODE";
      setInterval(() => {
        document.title = "**~~~welcome~~~**";
      }, 1050);
    }
  };
  return (
    <>
      <Router
        style={{
          backgroundColor: m === "dark" ? "#e3c78a" : "#643E46FF",
        }}
      >
        <Navbar here="Text~utils" there="About~app" mode={m} toggle={tm} />
        <Date />
        {alert && <Alert alert={alert} />}
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={m} />} />
            <Route path="/time" element={<Time mode={m} />} />
            <Route
              path="/"
              element={
                <>
                  <Area
                    showAlert={showAlert}
                    heading="Enter your TEXT for Filtaration :-> "
                    mode={m}
                  />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
