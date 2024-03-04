import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../services/UserService'

export function Login() {

    const nav = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () => {

        console.log(username)

        //userService.getAll().then(r => console.log(r))

        //userService.findByUsername(username).then(u => {
        //  if(u.password === password) nav('/dashboard')
        //    else console.log('error')
        //})

        nav('/dashboard')
        
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleUPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    //on Submit: get user by username, compare passwords, authenticate

    return (
      
        <Box width={'100vh'} height={'100vh'} display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <form onSubmit={onSubmit}>
                <Box display={"flex"} flexDirection={"column"} > 
                <Typography variant='h5' fontFamily={"serif"}> BME Test Trading Platform </Typography>
                <TextField id="username" onChange={handleUsernameChange} label="Username" margin="dense" />
                <TextField id="password" onChange={handleUPasswordChange} label="Password" margin="dense"/>
                <Button variant="contained" onClick={onSubmit} id="submit" margin="dense" >Login</Button>
                </Box>
            </form>
        </Box>

    );

}