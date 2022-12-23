//IMPORTANT!: Web with NavBar, Drawerm and Boxm
import React from 'react';
import {styled} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import theme from './themeConfig'; 

import Navbar from './components/Navbar';
import Drawerm from './components/Drawerm';
import Boxes from './components/Boxes';
import Typography from '@mui/material/Typography'

const PREFIX = 'MyCard';
const classes = {
  root: `${PREFIX}-root`, 
  divOffset:'divOffset',
  content: `${PREFIX}-content`
}
const Root=styled('div')(({theme})=>({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
  [`& .${classes.divOffset}`]: {
    minHeight: theme.mixins.toolbar.minHeight
  },
  [`& .${classes.content}`]:{
    flexGrow:1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}))

function App() {
  const [mobileOpen, setMobileOpen]=React.useState(false);
  const handleDrawerToogle=()=>{
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Root className={classes.root}> {/*It's not necessary create a component Component with attr display:'flex'*/}
        <Navbar setMobileOpen={handleDrawerToogle}/>
        <Drawerm 
          variant='permanent'
          open={true}
          sx={{display:{xs:'none', sm:'block'}}}/> {/*Replaces Hidden xsDown*/}
        
        <Drawerm 
          variant='temporary'
          open={mobileOpen}
          sx={{display:{xs:'block', sm:'none'}}}
          onClose={handleDrawerToogle}/> {/*Replaces Hidden smUp*/}
       

        <main className={classes.content}>
          <div className={classes.divOffset}/> {/*None component hide behind the navbar*/}
          <Boxes/>
        </main>
      </Root>
    </ThemeProvider>
  );
}

export default App;
