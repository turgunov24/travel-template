import "./App.css";

//sections
import SectionOne from "./sections/section-one/section-one";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionTwo from "./sections/section-two/section-two";
import SectionThree from "./sections/section-three/section-three";
import SectionFour from "./sections/section-four/section-four";
import SectionFive from "./sections/section-five/section-five";
import SectionSix from "./sections/section-six/section-six";

function App() {
  return (
    <div className="App w-full min-h-screen flex flex-col">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
