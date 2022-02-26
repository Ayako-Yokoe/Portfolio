import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
`
const Heading = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Left = styled.div`
    flex: 40%;
    text-align: center;
`

const Image = styled.img`
    width: 60%;
    height: 60%;
    object-fit: cover;
    border-radius: 50%;
`

const Right = styled.div`
    flex: 60%;
    margin: 4rem 4rem 4rem 0;
`

const AboutMe = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1.2px;
    margin-bottom: 1.5rem;
`

const AboutTech = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

const TechTitle = styled.span`
    font-weight: bold;
    font-size: 0.7rem;
    margin-right: 1.2rem;
`


const About = () => {
  return (
    <Container id="about">
          <Heading><span>About</span></Heading>
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
