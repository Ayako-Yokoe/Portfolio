import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { keyframes } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';
import {
    Container,
    Wrapper,
    Heading,
    Title,
    SubTitle,
    ProjectLink,
    ProjectCard,
    ImgContainer,
    Img,
    Detail,
    Desc,
    ProjectTitle,
    ProjectCaption,
    LinkContainer,
    LinkButton,
    Overlay,
} from './Project.styles';

const swing = keyframes`
    10% {
        transform: translateY(5px);
    }
    30% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(3px);
    }
    65% {
        transform: translateY(-3px);
    }
    85% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(-2px);
    }
`

const Project = () => {
  const { ref, inView } = useInView()

  return (
    <Container id="project" data-aos="fade-up">
      <Heading ref={ref}>
        <Title animation={inView ? 'animation' : 'none'} delay="1">P</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="2">r</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="3">o</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="4">j</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="5">e</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="6">c</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="7">t</Title>
        <Title animation={inView ? 'animation' : 'none'} delay="8">s</Title>
      </Heading>
      <SubTitle>
        Here are some of my recent projects.<br/>
        I’d appreciate it if you’d take a look at them.
      </SubTitle>

    <Wrapper>
    {projects.map(project => (
        <ProjectCard key={project.id}>
          <ImgContainer>
            <Img src={project.image} />
          </ImgContainer>
          <Detail>
            <Desc>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectCaption>{project.caption}</ProjectCaption>
            </Desc>
            <LinkContainer>
              <LinkButton >
                  <ProjectLink href={project.gitHubLink} target="_blank">
                    <GitHubIcon 
                      sx={{
                        ":hover": {
                          animation: `${swing} 1s ease`,
                          animationIterationCount: 1
                        }
                      }} 
                      />
                  </ProjectLink>
              </LinkButton>
              <LinkButton>
                <ProjectLink href={project.deployedLink} target="_blank">
                <OpenInNewIcon
                  sx={{
                    ":hover": {
                      animation: `${swing} 1s ease`,
                      animationIterationCount: 1
                    }
                  }} 
                />
              </ProjectLink>
              </LinkButton>
            </LinkContainer>
          </Detail>
          <Overlay></Overlay>
        </ProjectCard>
      ))}
    </Wrapper>
    </Container>
  )
}

export default Project