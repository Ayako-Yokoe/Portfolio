import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`

const Name = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: var(--base-color);
`

const Title = styled.h3`
    font-size: 2.8rem;
    font-weight: 700;
`

const Paragraph = styled.p`
    font-size: 2rem;
    font-weight: 700;
`


const Header = () => {
  return (
      <Container>
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
