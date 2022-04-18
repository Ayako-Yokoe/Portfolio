import styled from 'styled-components';
import responsive from '../responsive';

export const Container = styled.div`
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    z-index: 30;
    height: 8vh;  
    background-color: ${prop => prop.bg === 'dark' ? '#000' : "#fff"};
`
export const Left = styled.div`
    align-items: center;
`
export const Logo = styled.h1`
    font-family: 'Train One', cursive;
    margin: 1rem;
    cursor: pointer;
    font-size: 0.8rem;

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
export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const NavItem = styled.li`
    display: none;

    @media only screen and ${responsive.device.m}{
        list-style: none;
        display: block;
        padding: 1rem;
        font-size: 1.2em;
        color: var(--base-color-lighter-1);
        font-weight: 700;
        letter-spacing: 2px;
        border: none;
        position: relative;

        &:hover {
            cursor: pointer;
            border: none;
        }

        &::after {
            content: '';
            position: absolute;
            width: 0px;
            height: 1px;
            left: 50%;
            bottom: 0;
            background-color: var(--base-color-lighter-2);
            transition: all ease-in .2s;
        }

        &:hover::after {
            width: 80%;
            left: 10px;
        }
    }

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
export const Hamburgermenu = styled.div`
    visibility: visible;
    margin: 1rem;
    display: block;

    @media only screen and ${responsive.device.m}{
        visibility: hidden;
    }
`