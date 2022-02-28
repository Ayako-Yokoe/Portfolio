import styled from 'styled-components'
import responsive from '../responsive'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
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
export const Title = styled.h3`
    font-size: 1.0rem;
    font-weight: 700;

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
    font-size: 0.8rem;
    font-weight: 500;

    @media only screen and ${responsive.device.s}{
        font-size: 1.0rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 2rem;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 2.0rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 3.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 4.5rem;
        padding-top: 1rem;
    }
`