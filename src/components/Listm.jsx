//I called it 'Listm' because exists a 'List' component own of react 
import React from 'react';
import {List, ListItemButton, ListItemText, ListItemIcon, Divider} from '@mui/material';
import { AirplanemodeActive, AirportShuttle, Anchor } from '@mui/icons-material';

const Listm = () => {
  return (
    <div>
      <List components='nav'>
        <ListItemButton>
          <ListItemIcon>
            <AirplanemodeActive/>
          </ListItemIcon>
          <ListItemText primary='Aéreo'/>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AirportShuttle/>
          </ListItemIcon>
          <ListItemText primary='Terrestre'/>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Anchor/>
          </ListItemIcon>
          <ListItemText primary='Marítimo'/>
        </ListItemButton>

        <Divider/>

        <ListItemButton>
          <ListItemText primary='Otras opciones'/>
        </ListItemButton>



      </List>
    </div>
  )
}

export default Listm