import React, { useState } from 'react'
import { Container, Grid } from '@mui/material'
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import chair from '../../images/chair.png'

function AppointmentHeader({date, setDate}) {
    

  return (
    <Container>
        <Grid container spacing={2} sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '55px'
        }}>
            <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs='desktop'
                    value={date}
                    
                    onChange={(newValue) => {
                    setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
                
                <img src={chair} alt="" style={{maxWidth: "80%"}}/>
            </Grid>
        </Grid>
        </Container>
  )
}

export default AppointmentHeader