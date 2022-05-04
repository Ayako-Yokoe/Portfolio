import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
    Container,
    Heading,
    Wrapper,
    Left,
    Image,
    Right,
    AboutMe,
    TechList,
    Tech,
    Title
} from './About.styles';


const About = () => {
  const { ref, inView } = useInView()

  return (
    <Container id="about" data-aos="fade-up">
          <Heading ref={ref}>
            <Title animation={inView ? 'animation' : 'none'} delay="1">A</Title>
            <Title animation={inView ? 'animation' : 'none'} delay="2">b</Title>
            <Title animation={inView ? 'animation' : 'none'} delay="3">o</Title>
            <Title animation={inView ? 'animation' : 'none'} delay="4">u</Title>
            <Title animation={inView ? 'animation' : 'none'} delay="5">t</Title>
          </Heading>

          <Wrapper>
              <Left>
                  <Image src="assets/photo.jpg" alt="profile picture" /> 
              </Left>
              <Right>
                <AboutMe>
                  I've always been passionate about learning and growing in tech. 
                  As a former English language teacher, I bring transferable skills 
                  to my tech careers.
                  I've dedicated myself to leveraging my front-end development skills 
                  to become a valuable member of a professional software development team.
                </AboutMe>
                <TechList>
                  <Tech>HTML</Tech>
                  <Tech>CSS</Tech>
                  <Tech>JavaScript</Tech>
                  <Tech>TypeScript</Tech>
                  <Tech>PHP</Tech>
                  <Tech>JQuery</Tech>
                  <Tech>ReactJS</Tech>
                  <Tech>React Router</Tech>
                  <Tech>Redux</Tech>
                  <Tech>NodeJS</Tech>
                  <Tech>Express</Tech>
                  <Tech>Styled Components</Tech>
                  <Tech>MUI</Tech>
                  <Tech>Bootstrap</Tech>
                  <Tech>MongoDB</Tech>
                  <Tech>Firebase</Tech>
                </TechList>
              </Right>
          </Wrapper>
      </Container>
  )
}

export default About
