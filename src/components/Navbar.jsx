import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useCallback } from 'react';
import ClosableDrawer from './ClosableDrawer';



const Container = styled.div`
    height: 5rem;
    background-color: pink;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    z-index: 30;
`
const Left = styled.div`
    align-items: center;
`
const Logo = styled.h1`
    margin: 1rem;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const NavItem = styled.li`
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
`

const Hamburgermenu = styled.div`
    visibility: hidden;
    
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
            {/* <a class="logo" href="#">logo</a> */}
            <Logo>logo</Logo>
        </Left>

        <Right>                              
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Project</NavItem>
            <NavItem>Contact</NavItem>
            {/* <i class="fa-regular fa-moon change-theme theme-list" id="theme-btn"></i> */}
            <Hamburgermenu onClick={(event) => handleDrawerToggle(event, true)} />
                <MenuIcon />
            <Hamburgermenu />

        </Right>
      </Wrapper>
    </Container>
    </>
  )
}

export default Navbar
