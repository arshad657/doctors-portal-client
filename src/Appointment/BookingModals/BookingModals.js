import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function BookingModals({open, handleClose, booking, date, setBookingSuccess}) {
    const {name, time, status} = booking;
    // console.log(status)
    const {user} = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleBookingSubmit = e => {
      
     //collect data
     const appointment = {
      ...bookingInfo,
      time,
      status: status,
      serviceName: name,
      date: date.toLocaleDateString()
     }
    // //   //send to the server
      fetch('https://evening-caverns-74385.herokuapp.com/appointments',{
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      })
      .then(res=> res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSuccess(true)
          handleClose()
        }
      })
      e.preventDefault()
}
  
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    setBookingInfo(newInfo)
  }
      
  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField 
              disabled
              sx={{width: '90%', m: 1}}
              id='outlined-size-small'
              defaultValue = {time}
              size='small'
              />              
              <TextField
              sx={{width: '90%', m: 1}}
              id='outlined-size-small'
              name= 'patientName'
              defaultValue = {user.displayName}
              onBlur={handleOnBlur}
              size='small'
              />              
              <TextField
              sx={{width: '90%', m: 1}}
              id='outlined-size-small'
              name='email'
              defaultValue = {user.email}
              onBlur={handleOnBlur}
              size='small'
              />              
              <TextField
              sx={{width: '90%', m: 1}}
              id='outlined-size-small'
              name='phone'
              defaultValue = 'Your Phone Number'
              onBlur={handleOnBlur}
              size='small'
              />              
              <TextField
              disabled
              sx={{width: '90%', m: 1}}
              id='outlined-size-small'
              defaultValue = {date}
              size='small'
              />     
              <TextField
              disabled
              sx={{width: '90%', m: 1}}
              id='outlined-size-small'
              defaultValue = 'Pending'
              size='small'
              />     
              <Button variant='contained' type='submit' >Submit</Button>         
            </form>
          </Box>
        </Fade>
      </Modal>
  )
}

export default BookingModals