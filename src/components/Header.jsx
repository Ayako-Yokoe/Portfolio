import React from 'react'
import {
    Container,
    Wrapper,
    Name,
    Title,
    Paragraph
} from './Header.styles'


const Header = () => {
  return (
      <Container id='home'>
        <Wrapper>
            <Name>Hi, I'm Ayako Yokoe</Name>
            <Title>Front-End Developer</Title>
            <Paragraph>
                I enjoy creating applications, thinking of <br/>
                what apps people would need and how they would use them<br/>
                to make their lives better. 
            </Paragraph>
        </Wrapper> 
    </Container>
  )
}

export default Header
