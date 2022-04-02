import styled from 'styled-components'
import responsive from '../responsive'

export const Container = styled.div`
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
    font-weight: bold;
    margin-bottom: 1.5rem;
    padding-top: 2rem;
    text-align: center;

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
        margin: 1rem 2rem 1rem 3rem;
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
    margin-bottom: -5px;
    color: var(--base-color-lighter-1);

    &:hover {
        cursor: pointer;
        color: var(--base-color-lighter-2);
    }
`
export const Right = styled.div`
    margin: 2rem 1rem;

    @media only screen and ${responsive.device.s}{
        flex: 1;
        margin: 1rem 3rem 1rem 2rem;
    }
`
export const Form = styled.form`
    width: 100%;
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
    border: none;
    border-radius: 3px;
    box-shadow:  3px 3px 15px rgba(0, 0, 0, 0.1) inset;
    background-color: rgba(156, 100, 255, 0.9);
    color: #fff;

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
    border: none;
    border-radius: 3px;
    box-shadow:  3px 3px 15px rgba(0, 0, 0, 0.1) inset;
    background-color: rgba(156, 100, 255, 0.9);
    color: #fff;

    @media only screen and ${responsive.device.l}{
        font-size: 1.5rem;
    }
`
export const SubmitBtn = styled.button`
    font-family: 'Nunito', sans-serif;
    padding: 0.5rem 0.7rem;
    margin-top: 0.3rem;
    border: none;
    border-radius: 5px;
    background-color: var(--base-color-lighter-1);
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    transition: 0.2s all ease-in-out;

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
        cursor: pointer;
        background-color: var(--base-color-lighter-2);
    }
`