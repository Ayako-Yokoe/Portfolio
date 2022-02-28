import styled from 'styled-components'
import responsive from '../responsive'

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
`
export const Left = styled.div`
    align-items: center;
`
export const Logo = styled.h1`
    margin: 1rem;
    cursor: pointer;

    font-size: 1rem;
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
        transition: 0.5s ease;

        &:hover {
            cursor: pointer;
            color: var(--base-color-lighter-2);
        }
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