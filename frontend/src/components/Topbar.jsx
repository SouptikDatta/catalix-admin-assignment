import { Box, IconButton, TextField, useMediaQuery } from "@mui/material";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import UserIcon from '../assets/user-icon.svg'
import { AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputAdornment from '@mui/material/InputAdornment';

const Topbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box 
      display="flex" justifyContent="space-between" alignItems="center" flexDirection={isMobile ? 'column' : 'row'} 
      sx={{mt:'1.6rem', p:"5px 20px",
      '@media (min-width: 600px)': {
        flexDirection: 'row',
      },
    }}
    >
      {/* Search Bar */}
      <TextField
        label="Search"
        placeholder="Search by profile, setting, artifact etc..."
        InputProps={{ disableUnderline: true, sx: { color: 'inherit' },
          startAdornment: (<InputAdornment position="start"><AiOutlineSearch size={18} style={{color:'#539BBB'}} /></InputAdornment>),
          endAdornment: (<InputAdornment position="end"><IoIosCloseCircleOutline size={21} style={{color:'#539BBB'}} /></InputAdornment>)
        }}
        sx={{ width: '408px', height:'35px', ml:'4rem' }}
      />

      {/* ICONS */}
      <Box display='flex' flexDirection='row' alignItems='center' pt='2px'>
        
        <Link to="/notifications">
          <Box sx={{color:'#2F667F',backgroundColor:'#fff',borderRadius:'0.5rem', boxShadow: '5px 4px 5px lightgrey',p:'3px', pb:'1px', marginRight: 2 }} >
            <IoNotificationsOutline size={25} />
            <Badge color="secondary" variant="dot" sx={{bottom:'15px', right:'3px'}} />
          </Box>
        </Link>
        
        <Link to="/messages">
          <Box sx={{color:'#2F667F',backgroundColor:'#fff',borderRadius:'0.5rem', boxShadow: '5px 4px 5px lightgrey',p:'3px', pb:'1px', marginRight: 2 }} >
            <AiOutlineMessage size={25} />
            <Badge color="secondary" variant="dot" sx={{bottom:'15px', right:'1px'}} />
          </Box>
        </Link>
        
        <Link to="/settings">
          <Box sx={{color:'#2F667F',backgroundColor:'#fff',borderRadius:'0.5rem', boxShadow: '5px 4px 5px lightgrey',p:'3px', pb:'1px', marginRight: 2 }} >
            <IoSettingsOutline size={25} />
          </Box>
        </Link>
        
        <Tooltip title="Account settings" onClick={handleClick} sx={{color:'#2F667F', marginRight: 2, p:0,  boxShadow: '5px 4px 5px lightgrey' }}>
          <IconButton           
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar ><img src={UserIcon} style={{position:'relative', top:'15px', left:'10px'}} alt="" /></Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}  component={Link} to="/">
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}  component={Link} to="/settings" >
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
          </MenuItem>
          <MenuItem onClick={handleClose}  component={Link} to="/login" >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
