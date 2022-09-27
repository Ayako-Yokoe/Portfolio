import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  height: auto;
  margin: 3rem 1rem;

  @media only screen and ${responsive.device.m} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Heading = styled.h2`
  position: relative;
  margin-bottom: 2rem;
  padding: 2rem 0 0.8rem 0;
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 3px;

  @media only screen and ${responsive.device.m} {
    padding: 2rem 0 1rem 0;
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
    props.animation === "animation" ? "pop 1s" : "none 0"};
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${responsive.device.m} {
    flex-direction: row;
  }
`
export const Left = styled.div`
  flex: 1;
  text-align: center;

  @media only screen and ${responsive.device.m} {
    flex: 40%;
  }
`
export const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  outline: 0.5px solid var(--base-color-lighter-1);
  outline-offset: 10px;

  @media only screen and ${responsive.device.m} {
    width: 60%;
    height: 60%;
  }
`
export const Right = styled.div`
  flex: 2;
  margin: 1rem 2rem 1rem 3rem;

  @media only screen and ${responsive.device.m} {
    flex: 60%;
    margin: 4rem 4rem 4rem 0;
  }
`
export const AboutMe = styled.p`
  margin: 1.3rem 0 1.5rem 0;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1.4;
  line-height: 1.4;

  @media only screen and ${responsive.device.s} {
    margin-bottom: 3rem;
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
  }
`
export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`
export const Tech = styled.button`
  padding: 0.2rem 0.8rem;
  margin: 0.2rem 0.2rem 0 0;
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 1.2px;
  background-color: var(--base-color-lighter-2);
  color: #fff;
  border: 1px solid var(--base-color-lighter-2);
  border-radius: 5px;

  @media only screen and ${responsive.device.s} {
    font-size: 0.8rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1rem;
    margin: 0.3rem 0.3rem 0 0;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.5rem;
    margin: 0.4rem 0.4rem 0 0;
  }
`
