import styled from 'styled-components';
import responsive from '../responsive';

export const Container = styled.div`
    margin: 0 1rem;
    height: auto;
    margin: 5rem auto;

   @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
    }
`
export const Heading = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    padding: 2rem;
    letter-spacing: 3px;

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
export const Title = styled.span`
    position: relative;
    display: inline-block;
    animation: ${props => props.animation === 'animation' ? 'pop 2s' : 'none 0'};
    animation-delay: ${props =>  `calc(.1s * ${props.delay})`};

    @keyframes pop {
        0%,40%,100% {
            transform: translateY(0)
        }
        20% {
            transform: translateY(-8px)
        }
    }
`
export const SubTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    margin: 1.5rem auto 3rem auto;
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
export const ProjectLink = styled.a`
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

    @media only screen and ${responsive.device.s}{
        flex-direction: row;
        flex-wrap: wrap; 
    }
`
export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border: 1px solid #f8f8f8;
    position: relative;
    transition: all .4s ease-in-out;

    @media only screen and ${responsive.device.s}{
        flex-direction: row;
        width: 80%;
        max-height: 200px;
        margin: 3rem 1rem;
        overflow: hidden;
        object-fit: contain;

        &:nth-child(even) {
            flex-direction: row-reverse;
        }
    }

    @media only screen and ${responsive.device.m}{
        max-height: 250px;
    }
    @media only screen and ${responsive.device.l}{
        max-height: 300px;
    }
    @media only screen and ${responsive.device.xl}{
        max-height: 350px;
    }
    @media only screen and ${responsive.device.xxl}{
        max-height: 400px;
    }

    &:hover {
        box-shadow: 20px 20px rgb(255, 232, 99);
        transform: translateY(-25px);
        border: 0.5px solid var(--base-color);
    }
`
export const ImgContainer = styled.div`
        @media only screen and ${responsive.device.s}{
        flex: 1;
        object-fit: contain;
    }
`
export const Img = styled.img`

    @media only screen and ${responsive.device.s}{
        flex: 1;
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        
        height: auto;
        object-fit: contain;
    }
`
export const Detail = styled.div`
    padding: 1rem 2rem;

    @media only screen and ${responsive.device.s}{
        flex: 1;
    }
`
export const Desc = styled.div`
    font-size: 0.8rem;
    font-weight: 300;
    text-align: start;

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
export const ProjectTitle = styled.h4`
    margin: 1rem 0;
`
export const ProjectCaption = styled.p`
    margin: 1rem 0;
    line-height: 1.4rem;

    @media only screen and ${responsive.device.l}{
        line-height: 1.8rem;
    }
    @media only screen and ${responsive.device.xxl}{
        line-height: 2rem;
    }
`
export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`
export const LinkButton = styled.button`
    background-color: #fff;
    border: none;
    padding: 1rem;
    z-index: 3;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255, 0.3);
    width: 100%;
    height: 100%;
    transition: all .5s ease-in-out;

    &:hover{
        background-color: transparent;
    }
`