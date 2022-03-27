import styled from 'styled-components'
import responsive from '../responsive'


export const Container = styled.div`
    display: block;
    height: auto;

    @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    @media only screen and ${responsive.device.l}{
        margin: 0 2.5rem;
    }
`
export const Heading = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    padding: 2rem;

    @media only screen and ${responsive.device.s}{
        font-size: 1.5rem;
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
export const Wrapper = styled.div`
    display: block;

    @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
export const Left = styled.div`
    text-align: center;

    @media only screen and ${responsive.device.s}{
        flex: 40%;
    }
`
export const Image = styled.img`
    width: 30%;
    height: 30%;
    object-fit: cover;
    border-radius: 50%;

    @media only screen and ${responsive.device.s}{
        width: 60%;
        height: 60%;
    }
`
export const Right = styled.div`
    margin: 1rem 2rem 1rem 3rem;

    @media only screen and ${responsive.device.s}{
        flex: 60%;
        margin: 4rem 4rem 4rem 0;
    }
    @media only screen and ${responsive.device.m}{
        margin: 3rem 2.3rem 3rem 0;
    }
`
export const AboutMe = styled.p`
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1.2px;
    margin-bottom: 1.5rem;

    @media only screen and ${responsive.device.s}{
        font-size: 1.0rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.0rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.4rem;
        margin-bottom: 3rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.0rem;
        margin-bottom: 3rem;
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
    border-radius: 10px;

    @media only screen and ${responsive.device.s}{
        font-size: 0.8rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 0.8rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 0.9rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.0rem;
        margin: 0.3rem 0.3rem 0 0;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.5rem;
        margin: 0.4rem 0.4rem 0 0;
    }
`