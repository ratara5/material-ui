//I called it 'Boxm' because exists a 'Box' component own of react 
import React from 'react'
import { Box, Grid } from '@mui/material'

const Boxes = () => {
  return (
    <>
        <Grid container>
            {/*Fill whole row*/}{/*The Box is used only for prop border. prop border not defined for Grid, only through CSS (It's not best practice: This is a framework)*/}
            <Grid item xs={12}>
                <Box
                    border={2}>
                    Un valor en Grid dado a un punto de interrupción se aplica a todos los demás puntos de interrupción más anchos que él (a menos que se anule).
                    xs=12
                </Box>
            </Grid>
            {/*Fill 1/2 row*/}
            <Grid item xs={6}>
                <Box
                    border={2}>
                    xs=6
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box
                    border={2}>
                    xs=6
                </Box>
            </Grid>
            {/*Fill 2 rows*/}
            <Grid item xs={6}>
                <Box
                    border={2}>
                    xs=6
                </Box>
            </Grid>
            <Grid item xs={10}>
                <Box
                    border={2}>
                    xs=10
                </Box>
            </Grid>
            {/*Three elements in tre differents width*/}
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    border={2}>
                    Changing inter devices. xs=12 sm=6 md=4
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    border={2}>
                    Changing inter devices. xs=12 sm=6 md=4
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    border={2}>
                    Changing inter devices. xs=12 sm=6 md=4
                </Box>
            </Grid>
        </Grid>
        
        <Box
            color='primary.contrastText'
            bgcolor='primary.main'>
                This is the content of the Box
        </Box>
        <Box
            color='primary.contrastText'
            bgcolor='primary.main'
            mx={2}> {/*product(2,8px) // mr ml mt mb my m*/}
                This is the content of the Box
        </Box>
        <Box
            color='primary.contrastText'
            bgcolor='primary.main'
            mt={3}
            p={5}> {/*product(5,8px) // pr pl pt pb py p*/}
                This is the content of the Box. See
                <br/>
                <a href='https://mui.com/system/properties/' style={{marginLeft:'24px'}}>mui system properties</a>
                <br/>
                <span>A elemento &lt;a&gt; no se le pueden aplicar properties(?)</span>
        </Box>
        <Box
            m={2}
            p={2}
            border={2}
            borderColor='error.main'
            borderRadius='8px'>
                This is the content of the Box.
        </Box>
    </>
  )
}

export default Boxes