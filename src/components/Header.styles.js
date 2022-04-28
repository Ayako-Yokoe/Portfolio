import styled from 'styled-components';
import responsive from '../responsive';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`
export const Wrapper = styled.div`
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`
export const Name = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
    padding-bottom: 0.3rem;
    color: var(--base-color);

    @media only screen and ${responsive.device.s}{
        font-size: 2rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 3rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 3.5rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 4.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 6rem;
    }
`
export const Title = styled.h2`
    font-size: 1.0rem;
    font-weight: 700;
    padding-bottom: 0.3rem;

    @media only screen and ${responsive.device.s}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 2.5rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 3.0rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 4.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 5.5rem;
    }
`
export const Paragraph = styled.p`
    font-size: 0.5rem;
    font-weight: 400;

    @media only screen and ${responsive.device.s}{
        font-size: 0.7rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.6rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2rem;
        padding-top: 1rem;
    }
`
export const Button = styled.div`
    display: inline-block;
    text-decoration: none;
    position: relative;
    margin-top: 40px;
    cursor: pointer;

    @media only screen and ${responsive.device.s}{
        font-size: 2rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 3rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 3.5rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 4.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 6rem;
    }
`
export const Bottom = styled.div`
    position: absolute;
    left: 7px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: #ffe863;
    display: block;
    transition: all .5s ease-out;

    @media only screen and ${responsive.device.l}{
        left: 10px;
        top: 10px;
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
    padding: 8px 18px 6px 18px;
    border: 1px solid var(--base-color);

    @media only screen and ${responsive.device.s}{
        padding: 10px 20px 8px 20px;
    }
    @media only screen and ${responsive.device.m}{
        padding: 24px 34px 22px 34px;
        border: 2px solid var(--base-color);
    }
    @media only screen and ${responsive.device.l}{
        padding: 28px 36px 26px 36px;
    }
    @media only screen and ${responsive.device.xl}{
        padding: 30px 40px 28px 40px;
    }
    @media only screen and ${responsive.device.xxl}{
        padding: 32px 42px 30px 42px;
    }
`
export const Label = styled.div`
    font-weight: 600;
    color: var(--base-color);
    font-size: 8px;
    letter-spacing: 2px;
    text-align: center;
    transition: all .5s ease-out;

    @media only screen and ${responsive.device.s}{
        font-size: 10px;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 12px;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 14px;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 16px;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 18px;
    }
`
export const ButtonBorder = styled.div`
     position: absolute;
     transition: all .25s ease-out;
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