import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not

  const toggleMode = (value) => {
    if (value === "primary") {
      setMode("primary");
      document.body.style.backgroundColor = "rgb(64 125 217)";
      showAlert("Primary mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "blue", color: "white" });
      document.title = "TextUtils - Blue Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else if (value === "success") {
      setMode("success");
      document.body.style.backgroundColor = "#71b371";
      showAlert("Success mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "green", color: "white" });
      document.title = "TextUtils - Green Mode";
    } else if (value === "danger") {
      setMode("danger");
      document.body.style.backgroundColor = "#ed8787";
      showAlert("Danger mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "red", color: "white" });
      document.title = "TextUtils - Red Mode";
    } else if (value === "warning") {
      setMode("warning");
      document.body.style.backgroundColor = "#FFD700";
      showAlert("Warning mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "yellow", color: "black" });
      document.title = "TextUtils - Yellow Mode";
    } else if (value === "info") {
      setMode("info");
      document.body.style.backgroundColor = "#4de3f3";
      showAlert("Info mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "#00e7ff", color: "black" });
      document.title = "TextUtils - Light Blue Mode";
    } else if (value === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#7c7474";
      showAlert("Dark mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "grey", color: "white" });
      document.title = "TextUtils - Dark Mode";
    } else if (value === "light") {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success");
      setTextBoxColor({ backgroundColor: "white", color: "black" });
      document.title = "TextUtils - Light Mode";
    }

    // if(value==="light"){
    //   setMode("dark");
    //   document.body.style.backgroundColor='#0f3164';
    //   showAlert("Dark mode has been enabled","success");
    // }else{
    //   setMode("light");
    //   document.body.style.backgroundColor='white';
    //   showAlert("Light mode has been enabled","success");
    // }
  };

  const [alert, setAlert] = useState(null); // alert ko ham ek object banna rahe isliye null le rahe hai
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [textBoxColorInfo, setTextBoxColor] = useState({
    backgroundColor: "#ffffff",
    color: "#000000",
  });

  return (
    // PROPS short for properties
    //Custom Component ko kuch cheese bhej sakte hai jisko vo use karega
    //string , object ya boolean bhej sakte inko use karke component apne aap ko render kar sakta hai
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text Utils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <TextForm
            heading="Enter the text to analyze below"
            mode={mode}
            showAlert={showAlert}
            textBoxColorInfo={textBoxColorInfo}
          />
             {/* React do partial matching in routing so we need to write exact for exact matching  */}
          {/* /users   ----> Component 1 
            /users/home   ----> Component 2 */}
      {/* <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                  textBoxColorInfo={textBoxColorInfo}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </Router> */}
        </div>
     
    </>
  );
}

export default App;
