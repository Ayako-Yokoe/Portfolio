import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Link } from 'react-scroll'
import ClosableDrawer from './ClosableDrawer';
import DarkModeToggle from 'react-dark-mode-toggle'
import { ThemeColorContext } from '../ThemeColorContext';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Container,
    Wrapper,
    Left,
    Logo,
    Right,
    NavItem,
    Hamburgermenu
} from './Navbar.styles'


const Navbar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [bg, setBg] = useState('')
    const { turnOn, setTurnOn } = useContext(ThemeColorContext)

    const handleDrawerToggle = useCallback((event, isOpen) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return
        }
        setSideBarOpen(isOpen)
    }, [setSideBarOpen])

    useEffect(() => {
        turnOn ? setBg('dark') : setBg('light')
    }, [turnOn, setTurnOn])


  return (
    <>
    <Container>
      <Wrapper bg={bg}>
        <Left>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >  
                <Logo>AY</Logo>
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
                style={{ marginRight: "1rem" }}
            >
                <NavItem>Contact</NavItem>
            </Link>

            <DarkModeToggle onChange={setTurnOn} checked={turnOn} size={60} />
            
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
