//I called it 'Drawerm' because exists a 'Drawer' component own of react 
import React from 'react'
import { Divider, Drawer } from '@mui/material'
import {styled} from '@mui/material/styles';

import Listm from './Listm'

const drawerWidth=240;
const PREFIX = 'MyCard';
const classes = {
  root: `${PREFIX}-root`,
  divOffset:'divOffset',
  drawer:'drawer',
  drawerPaper:'drawerPaper'
}
const Root=styled('div')(({theme})=>({
  [`& .${classes.divOffset}`]: {
    minHeight: theme.mixins.toolbar.minHeight
  },
  [`& .${classes.drawer}`]: {
    width:drawerWidth,
    flexShrink:0
  },
  [`& .${classes.drawerPaper}`]: {
    width:drawerWidth,
  }
}));

const Drawerm = (props) => {
  return (
    <Root>
      <Drawer
        className={classes.drawer}
        variant={props.variant}
        classes={{
          paper:classes.drawerPaper
        }}
        anchor="left"
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
        sx={props.sx}> {/*Replaces Hidden xsDown*/}
          <div className={classes.divOffset}/>
        <Divider/>
        <Listm/>
      </Drawer>
    </Root>
  )
}

export default Drawerm