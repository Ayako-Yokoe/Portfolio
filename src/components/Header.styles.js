import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;

  @media only screen and ${responsive.device.m} {
    height: 100vh;
  }
`
export const Wrapper = styled.div`
  width: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Name = styled.h1`
  padding-bottom: 0.3rem;
  font-size: 1.85rem;
  font-weight: 700;
  color: var(--base-color);

  @media only screen and ${responsive.device.s} {
    padding-bottom: 0.4rem;
    font-size: 2rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 3rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 3.5rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 4.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 6rem;
  }
`
export const Title = styled.h2`
  padding-bottom: 0.3rem;
  font-size: 1.75rem;
  font-weight: 700;

  @media only screen and ${responsive.device.s} {
    font-size: 1.9rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 2.9rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 3.4rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 4.4rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 5.9rem;
  }
`
export const Paragraph = styled.p`
  padding-top: 0.4rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.4;
  max-width: 90%;

  @media only screen and ${responsive.device.s} {
    font-size: 0.7rem;
  }
  @media only screen and ${responsive.device.m} {
    padding-top: 0.8rem;
    font-size: 1.2rem;
    max-width: 80%;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
    max-width: 65%;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.6rem;
    max-width: 55%;
  }
  @media only screen and ${responsive.device.xxl} {
    padding-top: 1rem;
    font-size: 2rem;
    max-width: 54%;
  }
`
export const Button = styled.div`
  display: inline-block;
  text-decoration: none;
  position: relative;
  margin-top: 30px;

  @media only screen and ${responsive.device.s} {
    font-size: 2rem;
  }
  @media only screen and ${responsive.device.m} {
    margin-top: 40px;
    font-size: 3rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 3.5rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 4.5rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 6rem;
  }
`
export const Bottom = styled.div`
  position: absolute;
  left: 7px;
  top: 7px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: var(--yellow);
  transition: all 0.5s ease-out;

  @media only screen and ${responsive.device.l} {
    left: 10px;
    top: 10px;
  }
  @media only screen and ${responsive.device.xxl} {
    left: 20px;
    top: 20px;
  }

  ${Button}:hover & {
    left: 0;
    top: 0;
    background-color: #fff;
  }
`
export const Top = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--base-color);
  line-height: 0;

  @media only screen and ${responsive.device.xxl} {
    border: 3px solid var(--base-color);
  }
`
export const Label = styled.button`
  text-align: center;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 3px;
  border: none;
  color: var(--base-color);
  background-color: transparent;
  padding: 20px 25px 18px 25px;
  transition: all 0.5s ease-out;
  cursor: pointer;

  @media only screen and ${responsive.device.m} {
    padding: 24px 34px 22px 34px;
    font-weight: 600;
  }
  @media only screen and ${responsive.device.l} {
    padding: 28px 36px 26px 36px;
  }
  @media only screen and ${responsive.device.xl} {
    padding: 30px 40px 28px 40px;
    font-size: 1.3rem;
  }
  @media only screen and ${responsive.device.xxl} {
    font-size: 1.8rem;
    padding: 52px 62px 50px 62px;
  }
`
export const ButtonBorder = styled.div`
  position: absolute;
  transition: all 0.25s ease-out;
`
export const BorderTop = styled.div`
  left: -2px;
  top: -2px;
  width: 0;
  height: 2px;

  ${Button}:hover & {
    width: calc(100% + 2px);
  }
`
export const BorderRight = styled.div`
  right: -2px;
  top: -2px;
  width: 2px;
  height: 0;

  ${Button}:hover & {
    height: calc(100% + 2px);
  }
`
export const BorderBottom = styled.div`
  right: -2px;
  bottom: -2px;
  width: 0;
  height: 2px;

  ${Button}:hover & {
    width: calc(100% + 2px);
  }
`
export const BorderLeft = styled.div`
  left: -2px;
  bottom: -2px;
  width: 2px;
  height: 0;

  ${Button}:hover & {
    height: calc(100% + 2px);
  }
`
