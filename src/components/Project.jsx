import React from 'react'
import styled from 'styled-components'
import responsive from '../responsive'


const Container = styled.div`
    margin: 0 1rem;
    height: auto;

   @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;   
    }
`
const Heading = styled.h2`
    padding-top: 2rem;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;

    @media only screen and ${responsive.device.s}{
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.8rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 2.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.6rem;
    }
`
const SubTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    margin: 1.5rem;
    text-align: center;

    @media only screen and ${responsive.device.s}{
        font-size: 0.9rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.0rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.2rem;
        letter-spacing: 1.5px;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.4rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.0rem;
    }
`
const ProjectGrid = styled.div`
    display: block;

    @media only screen and ${responsive.device.s}{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`
const Projects = styled.div`
    width: 100%;
    margin: 1rem auto;

    &:hover figcaption {
        left: 0;
    }

    @media only screen and ${responsive.device.s}{
        width: 40%;
        padding: 1rem;
        display: block;
    }
    @media only screen and ${responsive.device.xxl}{
        width: 50%;
        padding: 2rem;
    }
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
`
const FigcaptionHeading = styled.h3`
    color: #fff;
    font-size: 1.2rem;

    @media only screen and ${responsive.device.s}{
        font-size: 0.7rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.0rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.2rem;
        letter-spacing: 1.5px;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.4rem;
        padding: 1.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.8rem;
    }
`
const ProjectLink = styled.a`
    border: 1px solid var(--base-color-lighter-1);
    color: #fff;
    padding: 1rem;
    margin: 1.5rem;
    font-size: 1.0rem;

    @media only screen and ${responsive.device.s}{
        font-size: 0.5rem;
        padding: 0.3rem;
        margin: 1.0rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 0.8rem;
        padding: 0.5rem 0.7rem;
        margin: 1.2rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.0rem;
        letter-spacing: 1.5px;
        padding: 0.8rem 1.0rem;
        margin: 1.2rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.2rem;
        padding: 1.0rem 1.2rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.6rem;
        padding: 1.2rem 1.4rem;
    }

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
