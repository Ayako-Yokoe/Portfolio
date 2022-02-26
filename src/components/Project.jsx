import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Heading = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`

const SubTitle = styled.p`
    font-size: 1.0rem;
    font-weight: 300;
    margin: 1.5rem;
`

const ProjectGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Projects = styled.div`
    width: 40%;
    padding: 1rem;
    display: block;
`

const Figure = styled.figure`
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Figcaption = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    padding: 0.3rem 0.8rem;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    transition: left 0.5s;

    &:hover {
        left: 0;
    }
`

const FigcaptionHeading = styled.h3`
    color: #fff;
`
const ProjectLink = styled.a`
    border: 1px solid var(--base-color-lighter-1);
    color: #fff;
    padding: 1rem;
    margin: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.9);
        border: 2px solid var(--base-color-lighter-1);
        border-radius: 3px;
        font-weight: 700;
    }
`

const Project = () => {
  return (
      <Container id="project">
          <Heading><span>Projects</span></Heading>
          <SubTitle>subtitle or some explanation</SubTitle>
          <ProjectGrid>
              <Projects>
                  <Figure>
                      <Image src="assets/meritt-thomas-Ao09kk2ovB0-unsplash.jpg" />
                      <Figcaption>
                          <FigcaptionHeading>description of the project description of the project description of the project</FigcaptionHeading>
                          <ProjectLink><span>Visit Website ></span></ProjectLink>
                      </Figcaption>
                  </Figure>
              </Projects>

              <Projects>
                  <Figure>
                      <Image src="assets/vicky-ng--qQlfYB7pqM-unsplash.jpg" />
                      <Figcaption>
                          <FigcaptionHeading>description of the project description of the project description of the project</FigcaptionHeading>
                          <ProjectLink><span>Visit Website ></span></ProjectLink>
                      </Figcaption>
                  </Figure>
              </Projects>
          </ProjectGrid>
      </Container>
  )
}

export default Project
