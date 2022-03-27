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
            <Name>My name is Ayako Yokoe</Name>
            <Title>Front-End Developer</Title>
            <Paragraph>
                Living in Vancouver, Canada
            </Paragraph>
        </Wrapper> 
    </Container>
  )
}

export default Header
