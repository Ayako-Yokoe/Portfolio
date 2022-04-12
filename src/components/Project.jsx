import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { projects } from '../data';
import {
    Container,
    Wrapper,
    Heading,
    SubTitle,
    ProjectLink
} from './Project.styles';


const Project = () => {
  return (

    <Container id="project" data-aos="fade-up">
      <Heading>Projects</Heading>
      <SubTitle>
        Here are some of my recent projects.<br/>
        I’d appreciate it if you’d take a look at them.
      </SubTitle>
      <Wrapper>
      {projects.map(project => (
        <Card key={project.id} 
          sx={{ 
            maxWidth: {xs: 345, sm: 200, md: 300, xl: 345} , 
            margin: {xs: '1rem 0 1rem 0', sm: '0.5rem', lg: '1rem' },
            backgroundColor: "#f8f8f8"
          }}
        >
        <>
        <CardMedia
          component="img"
          height="140"
          sx={{ borderBottom: "2px solid #707070" }}
          image={project.image}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem' }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem'}}>
          {project.caption}
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "relative", overflow: "hidden", justifyContent: "end" }}>
          <Button aria-label="github icon" size="small" sx={{ ":hover": { backgroundColor: "transparent" }}}>
            <ProjectLink href={project.gitHubLink} target="_blank">
              <GitHubIcon 
                sx={{
                  transform: "scale(1)",
                  transition: "0.5s ease-in-out",
                  ":hover": {
                    transform: "scale(1.1)"
                  }
                 }} 
                />
            </ProjectLink>
          </Button>
          <Button aria-label="project link icon" size="small" sx={{ ":hover": { backgroundColor: "transparent" }}}>
            <ProjectLink href={project.deployedLink} target="_blank">
              <OpenInNewIcon
                sx={{
                  transform: "scale(1)",
                  transition: "0.5s ease-in-out",
                  ":hover": {
                    transform: "scale(1.1)"
                  }
                }}
              />
            </ProjectLink>
          </Button>
        </CardActions>
        </>

        </Card>
      ))}
      </Wrapper>

    </Container>
  )
}


export default Project