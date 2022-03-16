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

import { projects } from '../data'


const Project = () => {
  return (
      <Container id="project">
          <Heading>Projects</Heading>
          <SubTitle>subtitle or some explanation</SubTitle>
          <ProjectGrid>
            {projects.map(project => (
                <Projects key={project.id}>
                  <Figure>
                      <Image src={project.image} alt="project image" />
                      <Figcaption>
                          <FigcaptionHeading>{project.caption}</FigcaptionHeading>
                          <ProjectLink href={project.link} target="_blank"><span>Visit Website >></span></ProjectLink>
                      </Figcaption>
                  </Figure>
              </Projects>

            ))}
          </ProjectGrid>
      </Container>
  )
}

export default Project
