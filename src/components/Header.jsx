import React from 'react'
import styled from 'styled-components'
import responsive from '../responsive'


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
`
const Wrapper = styled.div`
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`
const Name = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--base-color);

    @media only screen and ${responsive.device.s}{
        font-size: 2rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 3rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 3.5rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 4.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 6rem;
    }
`
const Title = styled.h3`
    font-size: 1.0rem;
    font-weight: 500;

    @media only screen and ${responsive.device.s}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 2.5rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 3.0rem;
        font-weight: 700;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 4.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 5.5rem;
    }
`
const Paragraph = styled.p`
    font-size: 0.8rem;
    font-weight: 500;

    @media only screen and ${responsive.device.s}{
        font-size: 1.0rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 2rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 2.0rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 3.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 4.5rem;
        padding-top: 1rem;
    }
`


const Header = () => {
  return (
      <Container id='home'>
        <Wrapper>
            <Name>My name is namae</Name>
            <Title>Front-End Developer</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                {/* Est ipsa animi ab, earum accusantium, quasi aspernatur, */}
            </Paragraph>
            {/* <a class="project-btn" href="#project">projects</a> */}

        </Wrapper> 

        <div class="home-sns">
            <a href="#" target="_blank" class="home-sns"><i class="fab fa-linkedin"></i>GIT</a>
            <a href="#" target="_blank" class="home-sns"><i class="fab fa-github-square"></i></a>
        </div>

    </Container>
  )
}

export default Header
