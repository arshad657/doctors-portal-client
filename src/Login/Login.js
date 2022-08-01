import { Alert, Button, CircularProgress, Container, Grid,  TextField, Typography } from '@mui/material'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import login from '../images/login.png'
import useAuth from '../Hooks/useAuth'

function Login() {
    const [loginData, setLoginData] =useState({})
    const {user, loginUser, isLoading, authError} = useAuth()
    const location = useLocation()
    
    const navigate = useNavigate()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target. value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
        
    }
    const handleSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{mt: 8}}>
                <Typography variant='h5' gutterBottom>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    name='email'
                    onChange={handleOnChange}
                    label='Your Email'
                    variant='standard' />
                    <TextField
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    label='Your Password'
                    name='password'
                    onChange={handleOnChange}
                    type='password'
                    variant='standard' />
                    <Button variant='contained' type='submit' sx={{width: '75%', m: 1}}> Login</Button>

                    <Link to='/register' style={{textDecoration: 'none'}}>
                    <Button variant='text'>New User? Please Register</Button>
                    </Link> 
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity='success'>User logged in successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={login} alt="" style={{width: '100%'}}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Login