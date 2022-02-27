import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useCallback } from 'react';
import ClosableDrawer from './ClosableDrawer';
import responsive from '../responsive'




const Container = styled.div`
    /* height: 10vh;
    background-color: pink; */
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    z-index: 30;
    height: 10vh;
    background-color: pink;
`
const Left = styled.div`
    align-items: center;
`
const Logo = styled.h1`
    margin: 1rem;
    cursor: pointer;

    font-size: 1rem;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const NavItem = styled.li`
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
const Hamburgermenu = styled.div`
    visibility: visible;
    margin-right: 1rem;
    display: block;

    @media only screen and ${responsive.device.m}{
        visibility: hidden;
    }
`

const Navbar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const handleDrawerToggle = useCallback((event, isOpen) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return
        }
        setSideBarOpen(isOpen)
    }, [setSideBarOpen])

  return (
    <>
    <Container>
      <Wrapper>
        <Left>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >  
                <Logo>logo</Logo>
            </Link>
        </Left>

        <Right>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >
                <NavItem>Home</NavItem>
            </Link>

            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
            >
                <NavItem>About</NavItem>
            </Link>

            <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
            >
                <NavItem>Project</NavItem>
            </Link>

            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
            >
                <NavItem>Contact</NavItem>
            </Link>

            {/* <i class="fa-regular fa-moon change-theme theme-list" id="theme-btn"></i> */}
            
            <Hamburgermenu onClick={(event) => handleDrawerToggle(event, true)} >
                <MenuIcon />
            </Hamburgermenu>

        </Right>

      </Wrapper>
      <ClosableDrawer open={sideBarOpen} onClose={handleDrawerToggle} />
    </Container>
    </>
  )
}

export default Navbar
