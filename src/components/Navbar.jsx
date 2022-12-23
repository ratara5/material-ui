import React from 'react';
import {AppBar, Toolbar, Button} from '@mui/material'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton'
import { Menu} from '@mui/icons-material';

const drawerWidth=240;

const PREFIX = 'MyComponent';
const classes = {
  appBar:'appBar',
  menuButton:`menuButton`,
  typography:`typography`
}

//None component hide behind the navbar. Functionallity moves to App.jsx Root component
const Root=styled('div')(({theme})=>({
    [`& .${classes.appBar}`]: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft:drawerWidth
        }
    },
    [`& .${classes.menuButton}`]:{
        marginRight:theme.spacing(10),
        backgroundColor:'yellow',
        [theme.breakpoints.up('sm')]: {
            display:'none'
        }
    },
    [`& .${classes.typography}`]:{
        flexGrow:1
    }
}))

const Navbar=(props)=>{
    return (
        <Root>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton aria-label="menu" className={classes.menuButton} onClick={()=>props.setMobileOpen()}>
                        <Menu color="accent"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.typography}>
                        RayNet
                    </Typography> {/*With its style flexGrow Typography push Button at right*/}
                    <Button variant='text' color='inherit'>
                        Iniciar Sesión
                    </Button>
                </Toolbar>
            </AppBar>
        </Root>
    )
}

export default Navbar;