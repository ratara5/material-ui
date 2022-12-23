import { Button, Typography } from '@mui/material';
import React from 'react';

const Hiddenm = () => {
  return (
    <>
        <Typography variant='h6' align='center'>
        The next Button 'VISIBLE!' will be visible as the next rule says:
        &lt;=xs:none&lt;=sm:block&lt;=md:block. See the next link 
        <a style={{marginLeft:'5px'}} href='https://mui.com/material-ui/customization/default-theme/#explore'>mui default theme</a>
        </Typography>
        <Button 
            variant='contained' 
            sx={{display:{xs:'none',sm:'block', md:'block'}}} 
            style={{margin:'auto', marginBottom:'10px'}}>
            VISIBLE!
        </Button> {/*It's too possible not only with 'sx' but with useMediaQuery*/}
    </>
  )
}

export default Hiddenm