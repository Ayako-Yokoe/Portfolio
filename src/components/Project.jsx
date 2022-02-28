import React from 'react'
import {
    Container,
    Heading,
    SubTitle,
    ProjectGrid,
    Projects,
    Figure,
    Image,
    Figcaption,
    FigcaptionHeading,
    ProjectLink
} from './Project.styles'


const Project = () => {
  return (
      <Container id="project">
          <Heading>Projects</Heading>
          <SubTitle>subtitle or some explanation</SubTitle>
          <ProjectGrid>
              <Projects>
                  <Figure>
                      <Image src="assets/meritt-thomas-Ao09kk2ovB0-unsplash.jpg" />
                      <Figcaption>
                          <FigcaptionHeading>description of the project description of the project description of the project</FigcaptionHeading>
                          <ProjectLink><span>Visit Website >></span></ProjectLink>
                      </Figcaption>
                  </Figure>
              </Projects>

              <Projects>
                  <Figure>
                      <Image src="assets/vicky-ng--qQlfYB7pqM-unsplash.jpg" />
                      <Figcaption>
                          <FigcaptionHeading>description of the project description of the project description of the project</FigcaptionHeading>
                          <ProjectLink><span>Visit Website >></span></ProjectLink>
                      </Figcaption>
                  </Figure>
              </Projects>
          </ProjectGrid>
      </Container>
  )
}

export default Project
