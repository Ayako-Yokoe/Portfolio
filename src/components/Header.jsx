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
            <Name>My name is namae</Name>
            <Title>Front-End Developer</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                {/* Est ipsa animi ab, earum accusantium, quasi aspernatur, */}
            </Paragraph>

        </Wrapper> 
    </Container>
  )
}

export default Header
