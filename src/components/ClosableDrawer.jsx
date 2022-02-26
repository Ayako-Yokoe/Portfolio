import styled from 'styled-components'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Container = styled.div``


const ClosableDrawer = (props) => {
    const selectMenu = (event, path) => {
        // navigate(path)
        props.onClose(event, false)
    }

    const menus = [
        {func: selectMenu, label: 'Home', id: 'home', value: '/register'},
        {func: selectMenu, label: 'About', id: 'about', value: '/login'},
        {func: selectMenu, label: 'Project', id: 'project', value: '/cart'},
        {func: selectMenu, label: 'Contact', id: 'contact', value: '/cart'}
    ]

  return (
    <Container>
        <Drawer
            variant='temporary'
            anchor={'right'}
            open={props.open}
            onClose={(e) => props.onClose(e, false)}
            ModalProps={{keepMounted: true}}
        >
        <div
            onClose={(e) => props.onClose(e, false)}
            onKeyDown={(e) => props.onClose(e, false)}
        >
        <List>
            {menus.map(menu => (
                <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                    <ListItemText primary={menu.label} />
                </ListItem>
            ))}
        </List>
        </div>
        </Drawer>
    </Container>
  );
}

export default ClosableDrawer
