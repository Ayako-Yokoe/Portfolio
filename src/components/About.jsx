import React from 'react'
import {
    Container,
    Heading,
    Wrapper,
    Left,
    Image,
    Right,
    AboutMe,
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
                <AboutMe>
                  I've always been passionate about learning and growing in tech. 
                  As a former English language teacher, I bring transferable skills 
                  to my tech careers, such as focus, patience, and communication. 
                  I've dedicated myself to leveraging my front-end development skills 
                  to become a valuable member of a professional software development team.
                </AboutMe>
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
