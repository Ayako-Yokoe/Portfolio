import React from "react"
import { Link } from "react-scroll"
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
  BorderLeft,
} from "./Header.styles"

const Header = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Name>Hi, I'm Ayako Yokoe</Name>
        <Title>Full Stack Developer</Title>
        <Paragraph>
          I enjoy creating applications, thinking of what apps people would need
          and how they would use them to make their lives better.
        </Paragraph>
        <Button>
          <Bottom></Bottom>
          <Top>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Label>Projects</Label>
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
