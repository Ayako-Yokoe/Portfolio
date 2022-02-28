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
    TechTitle
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
                  <AboutTech><TechTitle>LANGUAGE:</TechTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</AboutTech>
                  <AboutTech><TechTitle>FRAMEWORK:</TechTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</AboutTech>
                  <AboutTech><TechTitle>DATABASE:</TechTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</AboutTech>
              </Right>
          </Wrapper>
      </Container>
  )
}

export default About
