import React from 'react'
import styled from 'styled-components'
import responsive from '../responsive'

import { Element } from 'react-scroll'


const Container = styled.div`
    display: block;
    height: auto;

    @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
     }
`
const Heading = styled.h2`
        text-align: center;
        font-size: 1.3rem;
        padding: 2rem;

    @media only screen and ${responsive.device.s}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.8rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 2.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.6rem;
    }
`
const Wrapper = styled.div`
    display: block;

    @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
     }
`
const Left = styled.div`
        text-align: center;

    @media only screen and ${responsive.device.s}{
        flex: 40%;
     }
`
const Image = styled.img`
    width: 30%;
    height: 30%;
    object-fit: cover;
    border-radius: 50%;

    @media only screen and ${responsive.device.s}{
        width: 60%;
        height: 60%;
     }
`
const Right = styled.div`
    margin: 1rem 2rem 1rem 3rem;

     @media only screen and ${responsive.device.s}{
        flex: 60%;
        margin: 4rem 4rem 4rem 0;
    }
     @media only screen and ${responsive.device.m}{
        margin: 3rem 2.3rem 3rem 0;
    }
`
const AboutMe = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1.2px;
    margin-bottom: 1.5rem;

    @media only screen and ${responsive.device.s}{
        font-size: 1.0rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.0rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.4rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.0rem;
        margin-bottom: 3rem;
    }
`
const AboutTech = styled.p`
    font-size: 0.6rem;
    font-weight: 300;

    @media only screen and ${responsive.device.s}{
        font-size: 0.7rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 0.9rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.1rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.8rem;
    }
`
const TechTitle = styled.span`
    font-weight: bold;
    font-size: 0.5rem;
    margin-right: 0.3rem;

    @media only screen and ${responsive.device.s}{
        font-size: 0.6rem;
        margin-right: 0.5rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 0.8rem;
        margin-right: 1.2rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 0.9rem;
        margin-right: 1.2rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.0rem;
        margin-right: 1.3rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.7rem;
    }
`


const About = () => {
  return (
    <Container id="about">
          <Heading><span><Element name='about'>About</Element></span></Heading>
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
