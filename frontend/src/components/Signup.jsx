import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Logo from '../assets/catalix-logo.svg'
import Pattern1 from '../assets/s-shape-pattern.svg';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TtyIcon from '@mui/icons-material/Tty';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    
  return (
    <Box  display="flex" alignItems="center" justifyContent="center" flexDirection="column">

        {/* Form Part */}
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'
            marginTop="8%" marginLeft='auto' marginRight='auto'
            sx={{position:'relative', zIndex: 1}}
        >
            <Box marginBottom='4rem' sx={{width:'382.84px', height:'88.58px'}} >
                <img alt="" src={Logo}/>
            </Box>

            <Typography variant='h3' color='#fff' fontWeight='600' marginBottom='3rem' >Welcome</Typography>
            <Typography variant='h6' color='#fff' fontWeight='700' marginBottom='1.5rem' sx={{fontFamily:'Lato !important'}} >Start with signing up</Typography>

            <FormControl variant="outlined"
                sx={{ width: '36ch', marginBottom:'1rem',
                    '& .MuiOutlinedInput-root': { 
                        color: 'white',
                        boxShadow: '0 0 0 1px white',
                        '& .MuiSvgIcon-root': {
                            color: 'white'
                        }
                    }
                }} 
            >
                <OutlinedInput
                    id="email"
                    placeholder='Email'
                    startAdornment={
                        <InputAdornment position="start"> <EmailIcon /></InputAdornment>
                    }
                />
            </FormControl>

            <FormControl variant="outlined"
                sx={{ width: '36ch', marginBottom:'1rem',
                    '& .MuiOutlinedInput-root': { 
                        color: 'white',
                        boxShadow: '0 0 0 1px white',
                        '& .MuiSvgIcon-root': {
                            color: 'white'
                        }
                    }
                }} 
            >
                <OutlinedInput
                    id="username"
                    placeholder='Username'
                    startAdornment={
                        <InputAdornment position="start"><VerifiedUserIcon/></InputAdornment>
                    }
                />
            </FormControl>

            <FormControl variant="outlined"
                sx={{ width: '36ch', marginBottom:'1rem',
                    '& .MuiOutlinedInput-root': { 
                        color: 'white',
                        boxShadow: '0 0 0 1px white',
                        '& .MuiSvgIcon-root': {
                            color: 'white'
                        }
                    }
                }} 
            >
                <OutlinedInput
                    id="mobile-number"
                    placeholder='Mobile Number'
                    startAdornment={
                        <InputAdornment position="start"> <TtyIcon /></InputAdornment>
                    }
                />
            </FormControl>

            <FormControl variant="outlined"
                sx={{ width: '36ch', '& .MuiOutlinedInput-root': { color: '#fff', boxShadow: '0 0 0 1px white','& .MuiSvgIcon-root': {  color: '#fff'} }
                }} 
            >
              <OutlinedInput
                id="password"
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position="start"> <LockIcon /></InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Link to="/signup">
                <Button variant="contained"
                    sx={{ marginTop:'1.2rem', textTransform:'inherit', fontSize:'20px', fontWeight:'600', borderRadius:'0.6rem',
                        color:'#fff', backgroundColor:'#00E276', height:'52px', width:'366px', gap:'0.8rem',
                    }} 
                ><HowToRegIcon size={25}/>Signup
                </Button>
            </Link>

            <Box marginTop='3rem' display='flex' alignItems='center' flexDirection='row'>
                <Typography sx={{color:'#fff'}}>Already have an account?</Typography>
                <Link to='/login'><Button variant='text' sx={{color: '#fff', textTransform:'inherit', fontSize:'16px'}}>SignIn</Button></Link>
            </Box>
        </Box>
        
        {/* Outside Pattern */}
        <Box sx={{top:'10%', left:'5%', position:'absolute', overflow:'hidden'}}><img alt="" src={Pattern1} /></Box>
    </Box>
  );
};

export default Signup;
