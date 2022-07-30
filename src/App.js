import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutContainer from "./container/AboutContainer";
import ContactContainer from "./container/ContactContainer";
import HeaderContainer from "./container/HeaderContainer";
import ProjectContainer from "./container/ProjectContainer";

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <div>
      <HeaderContainer />
      <AboutContainer />
      <ProjectContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
