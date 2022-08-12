// import React from 'react'

import React from 'react'
// import { Grid, Paper}
// import { Avatar, Grid, Paper, Checkbox, Button, Typography, Link } from '@mui/material'
// import LockOpenIcon from '@mui/icons-material/LockOpen'
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// // import Input from '@mui/material/Input';
// // import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// // import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// // import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Paper, Typography, Avatar, TextField, Button } from '@mui/material';
// import { style } from 'styled';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';



const SignupElements = () => {

  const paperStyle={
    padding: 20,
    height: '70vh',
    width: '60vh',
    margin: '2rem auto',
    backgroundColor: 'rgb(13, 59, 102, 0.1)'
    }

    const avatarStyle={
    backgroundColor:'#377D33',
    marginBottom: '1.4rem'
    }



  return (
    <Grid align='center'>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            {/* escolher imagem */}
          </Avatar>
          <h2>Cadastre-se</h2>
          <Typography variant='caption'>Por favor, preencha o formulário com as suas informações.</Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label='Nome completo'
            // error
            // helperText='TESTETESTE'
            color='success'
            sx={{ marginTop: 5 }}
            required
            id="outlined-required"
            size="small"
            placeholder='Nome completo'/>
          <TextField
            fullWidth
            label='Email'
            color='success'
            sx={{ marginTop: 3 }}
            required
            id="outlined-required"
            size="small"/>
          <TextField fullWidth
            label='Telefone'
            color='success'
            sx={{ marginTop: 3 }}
            required
            id="outlined-required"
            size="small"/>
          <FormControl size="small" fullWidth variant="outlined" sx={{marginTop: 3}} color='success'>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end">
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl size="small" fullWidth variant="outlined" sx={{marginTop: 3}} color='success'>
            <InputLabel htmlFor="outlined-adornment-password">Confirmar senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-confirm"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button type='submit' variant='contained' color='success' sx={{marginTop: 3}} align='center'>Cadastrar</Button>
        </form>
      </Paper>
  </Grid>
  )
}

export default SignupElements
