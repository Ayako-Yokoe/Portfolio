import React, { useState, useCallback } from "react"
import { Link } from "react-scroll"
import MenuIcon from "@mui/icons-material/Menu"
import ClosableDrawer from "./ClosableDrawer"
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  NavItem,
  Hamburgermenu,
} from "./Navbar.styles"

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleDrawerToggle = useCallback(
    (event, isOpen) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }
      setSideBarOpen(isOpen)
    },
    [setSideBarOpen]
  )

  const handleShadow = () => {
    if (window.scrollY >= 70) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }

  window.addEventListener("scroll", handleShadow)

  return (
    <>
      <Container>
        <Wrapper shadow={shadow}>
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
              to="project"
              spy={true}
              smooth={true}
              duration={500}
            >
              <NavItem>Project</NavItem>
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

            <a href="https://dev.to/ayako_yk" target="_blank" rel="noreferrer">
              <NavItem>Blog</NavItem>
            </a>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <NavItem>Contact</NavItem>
            </Link>

            <Hamburgermenu onClick={(event) => handleDrawerToggle(event, true)}>
              <MenuIcon sx={{ fontSize: "2.2rem" }} />
            </Hamburgermenu>
          </Right>
        </Wrapper>
        <ClosableDrawer open={sideBarOpen} onClose={handleDrawerToggle} />
      </Container>
    </>
  )
}

export default Navbar
