import { Link } from "react-scroll"
import styled from "styled-components"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

const Container = styled.div``

const ClosableDrawer = (props) => {
  return (
    <Container>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={props.open}
        onClose={(e) => props.onClose(e, false)}
        ModalProps={{ keepMounted: true }}
      >
        <div
          onClose={(e) => props.onClose(e, false)}
          onKeyDown={(e) => props.onClose(e, false)}
        >
          <List sx={{ padding: 0 }}>
            <ListItem button>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={(event) => props.onClose(event, false)}
              >
                <ListItemText primary="Home" sx={{ padding: "20px 70px" }} />
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                onClick={(event) => props.onClose(event, false)}
              >
                <ListItemText primary="Project" sx={{ padding: "20px 70px" }} />
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={(event) => props.onClose(event, false)}
              >
                <ListItemText primary="About" sx={{ padding: "20px 70px" }} />
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={(event) => props.onClose(event, false)}
              >
                <ListItemText primary="Contact" sx={{ padding: "20px 70px" }} />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Container>
  )
}

export default ClosableDrawer
