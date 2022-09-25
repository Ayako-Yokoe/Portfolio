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
  /* @media only screen and ${responsive.device.l} {
    height: 80vh;
  }
  @media only screen and ${responsive.device.xl} {
    height: 70vh;
  } */
`
export const Heading = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  padding: 2rem 0 0.8rem 0;
  position: relative;

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
    font-size: 2.6rem;
    margin-bottom: 1.3rem;
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
  //text-align: center;

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
  font-size: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin: 1rem 1rem 1.5rem 2.5rem;
  text-align: left;

  @media only screen and ${responsive.device.s} {
    padding-top: 2rem;
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1.2rem;
    margin: 0 0 3rem 0;
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
  /* @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
  } */
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

  /* letter-spacing: 1.5px;
  @media only screen and ${responsive.device.s} {
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.m} {
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
  } */
`
export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.6rem 0;
  width: 100%;
  font-size: 1.1rem;
  font-family: "Nanum Gothic", sans-serif;
  outline: none;
  border-radius: 3px;
  border: 0.5px solid var(--base-color-lighter-1);

  @media only screen and ${responsive.device.l} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
    padding: 1rem;
    margin: 1rem 0;
  }
`
export const Textarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.6rem 0;
  width: 100%;
  font-size: 1.1rem;
  font-family: "Nanum Gothic", sans-serif;
  outline: none;
  border-radius: 3px;
  border: 0.5px solid var(--base-color-lighter-1);
  resize: none;

  @media only screen and ${responsive.device.l} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 2rem;
    padding: 1rem;
  }
`
// export const SubmitBtn = styled.button`
//   font-family: "Nunito", sans-serif;
//   padding: 0.7rem 1.2rem;
//   margin-top: 1rem;
//   background-color: transparent;
//   color: var(--base-color);
//   font-weight: 500;
//   letter-spacing: 3px;
//   border: 1px solid var(--base-color);
//   overflow: hidden;
//   position: relative;
//   cursor: pointer;

//   @media only screen and ${responsive.device.xl} {
//     font-size: 1rem;
//     padding: 0.6rem 0.8rem;
//     margin-top: 0.5rem;
//   }
//   @media only screen and ${responsive.device.xxl} {
//     font-size: 1.3rem;
//     padding: 0.8rem 1rem;
//     margin-top: 0.5rem;
//   }

//   &:hover {
//     background-color: #fff;
//     box-shadow: 0 5px 5px rgba(156, 100, 255, 0.5);
//   }
// `
// export const SubmitAnimation = styled.div`
//   transform: rotate(150deg);
//   width: 20%;
//   height: 270%;
//   left: -100px;
//   top: -30px;
//   background-color: #ffe863;
//   position: absolute;
//   transition: all 0.5s ease-Out;

//   ${SubmitBtn}:hover & {
//     left: 100px;
//   }
// `
// export const SubmitText = styled.span`
//   position: relative;
//   transition: all 0.45s ease-Out;
// `

// ==========================

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum Gothic", sans-serif;
  //font-weight: lighter;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 3px;
  cursor: pointer;
  margin-top: 1.6rem;
  width: 5.5rem;
  height: 2.6rem;
  //background-color: #fff;
  background-color: var(--base-color);
  //box-shadow: 5px 5px 0 0 var(--base-color);
  box-shadow: 1px 1px #fff, 5px 5px var(--yellow);
  color: #fff;
  border: 1px solid var(--base-color);
  transition: 0.5s;

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
