import styled from 'styled-components';
import responsive from '../responsive';

export const Container = styled.div`
    height: auto;
    background-color: rgba(156, 100, 255, 0.4);

    @media only screen and ${responsive.device.s}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
    }
`
export const Heading = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    padding: 2rem;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;

    @media only screen and ${responsive.device.s}{
        padding-top: 2rem;
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.2rem;
        margin: 0 0 3rem 0;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.8rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 2.0rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 2.6rem;
        margin-bottom: 1.3rem;
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
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    @media only screen and ${responsive.device.s}{
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
export const Left = styled.div`

    @media only screen and ${responsive.device.s}{
        flex: 1;
        margin: 1rem 0 1rem 3rem;
    }
    @media only screen and ${responsive.device.xl}{
        flex: 1;
        margin: 1rem 0 1rem 8rem;
    }
`
export const LeftHeading = styled.h3`
    font-size: 1.0rem;
    letter-spacing: 1.5px;
    margin: 1.0rem 1.0rem 1.5rem 2.5rem;
    text-align: left;

    @media only screen and ${responsive.device.s}{
        padding-top: 2rem;
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.m}{
        font-size: 1.2rem;
        margin: 0 0 3rem 0;
    }
    @media only screen and ${responsive.device.l}{
        font-size: 1.3rem;
    }
    @media only screen and ${responsive.device.xl}{
        font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.9rem;
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
    justify-content: center;

    @media only screen and ${responsive.device.s}{
        justify-content: flex-start;
    }
`
export const Sns = styled.a`
    font-size: 1.2rem;
    margin-right: 1.0rem;
    color: #202020;

    &:hover {
        cursor: pointer;
        transition: all .25s ease-in;
        color: var(--base-color);
        text-shadow: 0 5px 5px rgba(255,255,255,0.7);
        transform: translateY(-3px);
    }
`
export const Right = styled.div`
    margin: 2rem 1rem;

    @media only screen and ${responsive.device.s}{
        flex: 1;
        margin: 1rem 3rem 1rem 1rem;
    }

`
export const Form = styled.form`
    width: 100%;

    @media only screen and ${responsive.device.xl}{
        width: 80%;
    }
`
export const Label = styled.label`
    letter-spacing: 1.5px;

    @media only screen and ${responsive.device.xxl}{
        font-size: 1.6rem;
    }
`
export const Input = styled.input`
    padding: 0.5rem;
    margin: 0.6rem 0;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'Nunito', sans-serif;
    outline: none;
    border-radius: 3px;
    border: .5px solid var(--base-color-lighter-1);

    @media only screen and ${responsive.device.l}{
        font-size: 1.5rem;
    }
`
export const Textarea = styled.textarea`
    padding: 0.5rem;
    margin: 0.6rem 0;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'Nunito', sans-serif;
    outline: none;
    border-radius: 3px;
    border: .5px solid var(--base-color-lighter-1);

    @media only screen and ${responsive.device.l}{
        font-size: 1.5rem;
    }
`
export const SubmitBtn = styled.button`
    font-family: 'Nunito', sans-serif;
    padding: 0.7rem 1.2rem;
    margin-top: 1rem;
    background-color: transparent;
    color: var(--base-color);
    font-weight: 500;
    letter-spacing: 3px;
    border: 1px solid var(--base-color);
    overflow: hidden;
    position: relative;
    cursor: pointer;

    @media only screen and ${responsive.device.xl}{
        font-size: 1.0rem;
        padding: 0.6rem 0.8rem;
        margin-top: 0.5rem;
    }
    @media only screen and ${responsive.device.xxl}{
        font-size: 1.3rem;
        padding: 0.8rem 1.0rem;
        margin-top: 0.5rem;
    }

    &:hover {
        background-color: #fff;
        box-shadow: 0 5px 5px rgba(156, 100, 255, 0.5);
    }
`
export const SubmitAnimation = styled.div`
    transform: rotate(150deg);
    width: 20%;
    height: 270%;
    left: -100px;
    top: -30px;
    background-color: #ffe863;
    position: absolute;
    transition: all .5s ease-Out;

    ${SubmitBtn}:hover & {
        left: 100px;
    }
`
export const SubmitText = styled.span`
    position: relative;
    transition: all .45s ease-Out;
`