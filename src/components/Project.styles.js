import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  height: auto;
  background-color: rgba(255, 253, 208, 0.5);

  @media only screen and ${responsive.device.s} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Heading = styled.h2`
  position: relative;
  padding: 5rem 0 0.8rem 0;
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 3px;

  @media only screen and ${responsive.device.m} {
    padding: 5rem 0 1rem 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    left: 40%;
    bottom: 0;
    border-bottom: 1px solid red;

    @media only screen and ${responsive.device.m} {
      width: 100%;
      left: 0;
    }
  }

  @media only screen and ${responsive.device.s} {
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.8rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 2rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2.6rem;
  }
`
export const Title = styled.span`
  position: relative;
  display: inline-block;
  animation: ${(props) =>
    props.animation === "animation" ? "pop 2s" : "none 0"};
  animation-delay: ${(props) => `calc(.1s * ${props.delay})`};

  @keyframes pop {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-8px);
    }
  }
`
export const SubTitle = styled.p`
  text-align: center;
  margin: 1.5rem auto 3rem auto;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;

  @media only screen and ${responsive.device.s} {
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
  }
`
export const ProjectLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${responsive.device.m} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 2rem auto 4rem auto;

  @media only screen and ${responsive.device.m} {
    flex-direction: row;
    height: 278px;
    margin: 3rem 1.5rem 3rem 1rem;
    object-fit: contain;
  }
  @media only screen and ${responsive.device.l} {
    width: 90%;
    height: 321px;
  }
  @media only screen and ${responsive.device.xl} {
    height: 480px;
    margin-bottom: 8rem;
  }
  @media only screen and ${responsive.device.xxl} {
    height: 612px;
    margin-bottom: 9rem;
  }
`
export const ImgContainer = styled.div`
  position: absolute;
  top: -30px;
  width: 80%;
  max-width: 300px;
  z-index: 10;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.2);

  @media only screen and ${responsive.device.m} {
    flex: 1;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 348px;
  }
  @media only screen and ${responsive.device.l} {
    max-width: 402px;
  }
  @media only screen and ${responsive.device.xl} {
    max-width: 570px;
  }
  @media only screen and ${responsive.device.xxl} {
    max-width: 765px;
  }
`
export const Img = styled.img`
  flex: 1;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;
  object-fit: contain;
`
export const Detail = styled.div`
  background-color: #fbdf5a;
  width: 95%;
  padding: 160px 15px 15px 15px;

  @media only screen and ${responsive.device.xs} {
    font-size: 0.9rem;
    padding: 210px 30px 25px 30px;
  }
  @media only screen and ${responsive.device.s} {
    font-size: 0.9rem;
    padding: 220px 30px 25px 30px;
  }
  @media only screen and ${responsive.device.m} {
    flex: 1;
    position: relative;
    top: 35px;
    left: 20px;
    height: 278px;
    padding: 1rem 2.5rem;
    padding-left: 360px;
  }
  @media only screen and ${responsive.device.l} {
    height: 321px;
    padding: 1rem 2.5rem;
    padding-left: 420px;
  }
  @media only screen and ${responsive.device.xl} {
    height: 480px;
    padding: 1.8rem 2.8rem;
    padding-left: 595px;
  }
  @media only screen and ${responsive.device.xxl} {
    top: 45px;
    left: 30px;
    height: 612px;
    padding: 3rem 4.5rem;
    padding-left: 800px;
  }
`
export const Desc = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: start;
  color: #404040;

  @media only screen and ${responsive.device.s} {
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.6rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
  }
`
export const ProjectTitle = styled.h4`
  margin: 1rem 0;

  @media only screen and ${responsive.device.m} {
    margin: 1rem 0 0.6rem 0;
  }
  @media only screen and ${responsive.device.xl} {
    margin: 1.2rem 0;
  }
`
export const ProjectCaption = styled.p`
  margin: 1rem 0;
  line-height: 1.4;

  @media only screen and ${responsive.device.m} {
    margin: 0.6rem 0;
  }
  @media only screen and ${responsive.device.l} {
    line-height: 1.5;
  }
  @media only screen and ${responsive.device.xl} {
    margin: 1.2rem 0;
  }
`
export const ProjectTech = styled.p`
  margin-bottom: 1rem;
  font-size: 0.6rem;
  line-height: 1.5;
  font-weight: bold;

  @media only screen and ${responsive.device.m} {
    margin-bottom: 2px;
    font-size: 0.7rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 0.85rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.6rem;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;

  @media only screen and ${responsive.device.l} {
    margin: 0.5rem 0;
  }
  @media only screen and ${responsive.device.xl} {
    margin: 0.4rem 0;
  }
  @media only screen and ${responsive.device.xxl} {
    margin: 2rem 0;
  }
`
export const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  z-index: 3;
`
export const LinkTitle = styled.p`
  margin-left: 0.3rem;
  font-family: "Nanum Gothic", sans-serif;
  color: #404040;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.8rem;

  @media only screen and ${responsive.device.m} {
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.4rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
    margin-left: 1.4rem;
  }
`
