import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  height: auto;
  background-color: rgba(156, 100, 255, 0.4);

  @media only screen and ${responsive.device.s} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
  }
`
export const Heading = styled.h2`
  position: relative;
  margin-bottom: 1.5rem;
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
    padding-top: 2rem;
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.m} {
    margin: 0 0 3rem 0;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.8rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 2rem;
  }
  @media only screen and ${responsive.device.xxl} {
    margin-bottom: 1.3rem;
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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${responsive.device.s} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
export const Left = styled.div`
  @media only screen and ${responsive.device.s} {
    flex: 1;
    margin: 1rem 0 1rem 3rem;
  }
  @media only screen and ${responsive.device.xl} {
    margin: 1rem 0 1rem 8rem;
  }
`
export const LeftHeading = styled.h3`
  margin: 1rem 1rem 1.5rem 2.5rem;
  text-align: left;
  font-size: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.5;

  @media only screen and ${responsive.device.s} {
    padding-top: 2rem;
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.m} {
    margin: 0 0 3rem 0;
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
  }
`
export const Message1 = styled.span`
  color: var(--base-color);
`
export const Message2 = styled.span`
  color: var(--base-color-lighter-2);
`
export const SnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and ${responsive.device.s} {
    justify-content: flex-start;
  }
`
export const Sns = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  color: #202020;

  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    transition: all 0.25s ease-in;
    color: var(--base-color);
    text-shadow: 0 5px 5px rgba(255, 255, 255, 0.7);
    transform: translateY(-3px);
  }
`
export const LinkedInTitle = styled.p`
  margin-left: 0.3rem;

  @media only screen and ${responsive.device.s} {
    margin-right: 2rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.8rem;
  }
`
export const GitHubTitle = styled.p`
  margin-left: 0.5rem;

  @media only screen and ${responsive.device.xxl} {
    font-size: 1.8rem;
  }
`
export const Right = styled.div`
  margin: 2rem 1rem;

  @media only screen and ${responsive.device.s} {
    flex: 1;
    margin: 1rem 3rem 1rem 1rem;
  }
`
export const Form = styled.form`
  width: 100%;
  letter-spacing: 1.5px;
  font-family: "Nanum Gothic", sans-serif;

  @media only screen and ${responsive.device.s} {
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1.1rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
    width: 80%;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.9rem;
  }
`
export const Label = styled.label`
  padding-top: 5px;
`
export const Input = styled.input`
  width: 100%;
  margin: 0.6rem 0;
  padding: 0.5rem;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.1rem;
  outline: none;
  border-radius: 3px;
  border: 0.5px solid var(--base-color-lighter-1);

  @media only screen and ${responsive.device.l} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    margin: 1rem 0;
    padding: 1rem;
    font-size: 2rem;
  }
`
export const Textarea = styled.textarea`
  width: 100%;
  margin: 0.6rem 0;
  padding: 0.5rem;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.1rem;
  outline: none;
  border-radius: 3px;
  border: 0.5px solid var(--base-color-lighter-1);
  resize: none;

  @media only screen and ${responsive.device.l} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    padding: 1rem;
    font-size: 2rem;
  }
`
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 2.6rem;
  margin-top: 1.6rem;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 3px;
  border: 1px solid var(--base-color);
  color: #fff;
  background-color: var(--base-color);
  box-shadow: 1px 1px #fff, 5px 5px var(--yellow);
  transition: all 0.5s ease-out;
  cursor: pointer;

  @media only screen and ${responsive.device.xl} {
    font-size: 1.3rem;
    width: 6.5rem;
    height: 3.6rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.8rem;
    width: 8.5rem;
    height: 4.6rem;
  }

  &:hover {
    box-shadow: none;
  }
`
