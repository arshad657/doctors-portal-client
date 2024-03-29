import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import doctor from '../../images/doctor.png';
import bg from '../../images/appointment-bg.png'

const appointmentBanner ={
    background: `url(${bg})`,
    backgroundColor: 'rgba(128,139,150)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
    color: 'black'
}

function AppointmentBanner() {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <img src={doctor} 
        style={{maxWidth: "61%", minWidth: "370px", marginTop: '-120px'}}
        />
        </Grid>

        <Grid item xs={12} md={6} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
        }}>
            <Box>
                <Typography varient='h6' sx={{mb: 5, mt: 2}} style={{color: '#2C3E50',fontSize: 25}}>
                Appointment
                </Typography>
                <Typography varient='h4' sx={{my: 5}} style={{ fontSize: 30}}>
                Make an Appointment Today
                </Typography>
                <Typography varient='h6' sx={{my: 5}} style={{ fontWeight:350, fontSize: 17, maxWidth: '350px' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid assumenda voluptatem pariatur nobis ab quae cumque vero eligendi doloremque!
                </Typography>
                <Button variant='contained' sx={{mb: 5,backgroundColor:'#118494'}}style={{ }}>Learn More
                </Button>
            </Box>
        </Grid>
      
      
    </Grid>
  </Box>
  )
}

export default AppointmentBanner