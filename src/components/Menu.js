import { useState } from "react";
import Navbar from "./Navbar.js";
import TextForm from "./TextForm.js";
import About from "./About.js";
import Alert from "./Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Menu() {
  const [mode, setMode] = useState("bg-body-tertiary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toogleMode = () => {
    if (mode === "bg-body-tertiary") {
      setMode("bg-dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enable", "success");
      // document.title = "Text Util Dark Mode";
      setInterval(() => {
        document.title = "Text Util Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Text is amazing";
      }, 1000);
    } else {
      setMode("bg-body-tertiary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "warning");
      document.title = "Text Util Dark Mode";
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          mode={mode}
          toogleMode={toogleMode}
        ></Navbar>
        <div className="container">
          <Routes>
            <Route exact 
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  title="Enter your text to analize"
                ></TextForm>
              }
            ></Route>
            <Route exact  path="/About" element={<About>/</About>}></Route>
          </Routes>
        </div>
        <Alert alert={alert}></Alert>
        <br />
      </Router>
    </div>
  );
}

export default Menu;
