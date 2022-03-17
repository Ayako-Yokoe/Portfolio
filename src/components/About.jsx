import React from 'react'
import {
    Container,
    Heading,
    Wrapper,
    Left,
    Image,
    Right,
    AboutMe,
    AboutTech,
    TechTitle,
    TechList,
    Tech
} from './About.styles'


const About = () => {
  return (
    <Container id="about">
          <Heading>About</Heading>
          <Wrapper>
              <Left>
                  <Image src="assets/mame-shiba copy.jpg" alt="" /> 
              </Left>
              <Right>
                  <AboutMe>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Est ipsa animi ab, earum accusantium, quasi aspernatur, 
                      quae nobis eum at repellat possimus qui neque excepturi 
                      debitis voluptatum amet ratione ex!
                  </AboutMe>
                  {/* <AboutTech><TechTitle>LANGUAGE:</TechTitle>HTML, CSS, JavaScript, TypeScript</AboutTech>
                  <AboutTech><TechTitle>FRAMEWORK:</TechTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</AboutTech>
                  <AboutTech><TechTitle>DATABASE:</TechTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</AboutTech> */}

                <TechList>
                  <Tech>HTML</Tech>
                  <Tech>CSS</Tech>
                  <Tech>JavaScript</Tech>
                  <Tech>TypeScript</Tech>
                  <Tech>JQuery</Tech>
                  <Tech>ReactJS</Tech>
                  <Tech>React Router</Tech>
                  <Tech>Redux</Tech>
                  <Tech>NodeJS</Tech>
                  <Tech>Express</Tech>
                  <Tech>Styled Components</Tech>
                  <Tech>MUI</Tech>
                  <Tech>Bootstrap</Tech>
                  <Tech>MongoDB</Tech>
                  <Tech>Firebase</Tech>
                </TechList>
              </Right>
          </Wrapper>
      </Container>
  )
}

export default About
