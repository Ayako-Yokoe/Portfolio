import React from 'react'
import {
    Container,
    Wrapper,
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

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import responsive from '../responsive'


const Project = () => {
  return (

    <Container id="project" data-aos="fade-up">
      <Heading>Projects</Heading>
      <SubTitle>subtitle or some explanation</SubTitle>
      <Wrapper>
      {projects.map(project => (
        <Card key={project.id} 
          sx={{ 
            maxWidth: {xs: 345, sm: 200, md: 300, xl: 345} , 
            margin: {xs: '1rem 0 1rem 0', sm: '0.5rem' },
            // background: 'linear-gradient(to right bottom, rgba(0,0,0,0.9) rgba(0,0,0,0,0.9))', hover: 'linear-gradient(rgba(0,0,0,0)) '
          }}
        >
        <>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem'}}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem'}}>
          {project.caption}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </>

        </Card>
      ))}
      </Wrapper>

    </Container>
  )
}


      // <Container id="project">
      //     <Heading>Projects</Heading>
      //     
      //     <ProjectGrid>
      //       {projects.map(project => (
      //           <Projects key={project.id}>
      //             <Figure>
      //                 <Image src={project.image} alt="project image" />
      //                 <Figcaption>
      //                     <FigcaptionHeading>{project.caption}</FigcaptionHeading>
      //                     <ProjectLink href={project.link} target="_blank"><span>Visit Website >></span></ProjectLink>
      //                 </Figcaption>
      //             </Figure>
      //         </Projects>

      //       ))}
      //     </ProjectGrid>
      // </Container>

export default Project
