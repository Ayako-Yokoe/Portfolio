import styled from 'styled-components';
import responsive from '../responsive';

export const Container = styled.div`
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
export const Heading = styled.h2`
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
export const SubTitle = styled.p`
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
export const Wrapper = styled.div`
    display: block;

    @media only screen and ${responsive.device.s}{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`
export const ProjectLink = styled.a`
    text-decoration: none;
    color: #000;
`
