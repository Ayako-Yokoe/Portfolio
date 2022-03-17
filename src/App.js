import React, { useContext } from 'react'
import AboutContainer from "./container/AboutContainer";
import ContactContainer from "./container/ContactContainer";
import HeaderContainer from "./container/HeaderContainer";
import ProjectContainer from "./container/ProjectContainer";
import { ThemeColorContext } from './ThemeColorContext'


function App() {
  const { mainColor } = useContext(ThemeColorContext)

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
