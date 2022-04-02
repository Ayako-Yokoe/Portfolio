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
                I'm enjoying creating applications thinking of <br/>
                what apps people would need and <br/>
                how they would use to make their lives better. 
            </Paragraph>
        </Wrapper> 
    </Container>
  )
}

export default Header
