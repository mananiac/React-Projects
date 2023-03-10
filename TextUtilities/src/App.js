import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, newMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      newMode("dark");
      document.body.style.backgroundColor = "#172250";
      showAlert("Dark mode has been enabled", "success");
    } else {
      newMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utilities"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route
            exact
            path="/"
            element={
              <div className="container">
                <TextForm
                  heading="Word counter, character counter, remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
