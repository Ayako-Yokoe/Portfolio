import React from 'react';
import { Link } from 'react-scroll';
import {
    Container,
    Wrapper,
    Name,
    Title,
    Paragraph,
    Button,
    Bottom,
    Top,
    Label,
    ButtonBorder,
    BorderTop,
    BorderRight,
    BorderBottom,
    BorderLeft
} from './Header.styles';


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

            <Button to="project">
              <Bottom></Bottom>
              <Top>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Label>projects</Label>
              </Link>
                <ButtonBorder>
                  <BorderTop></BorderTop>
                  <BorderRight></BorderRight>
                  <BorderBottom></BorderBottom>
                  <BorderLeft></BorderLeft>
                </ButtonBorder>
              </Top>
            </Button>

        </Wrapper> 
    </Container>
  )
}

export default Header