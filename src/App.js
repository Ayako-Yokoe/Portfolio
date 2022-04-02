import React, { useContext } from 'react'
import AboutContainer from "./container/AboutContainer";
import ContactContainer from "./container/ContactContainer";
import HeaderContainer from "./container/HeaderContainer";
import ProjectContainer from "./container/ProjectContainer";
import { ThemeColorContext } from './ThemeColorContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  const { mainColor } = useContext(ThemeColorContext)
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <div style ={{ backgroundColor: mainColor.backgroundColor, color: mainColor.color }}>
      <HeaderContainer />
      <AboutContainer />
      <ProjectContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
