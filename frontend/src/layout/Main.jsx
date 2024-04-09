import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import { SiNintendogamecube } from "react-icons/si";
import CatalixLogo from '../assets/catalix-logo.svg'
import MenuList from '../components/MenuList';
import MenuList2 from '../components/MenuList2';
import Topbar from '../components/Topbar';
import { CssBaseline, Divider, ThemeProvider } from "@mui/material";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Box from '@mui/material/Box'
import { Layout } from "antd";
import { theme } from "../theme";
import '../assets/sider.css'

const Main = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
        <Sider collapsed={!collapsed} collapsible trigger={null} className="sider">
          <Box display='flex' justifyContent='flex-end' marginRight='1rem'>
            {collapsed ? (
              <CiCircleChevLeft size={45} color='#fff' onClick={toggleCollapsed} />
            ) : (
              <CiCircleChevRight size={45} color='#fff' onClick={toggleCollapsed} />
            )}
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Box marginTop='1rem' marginBottom='2rem'>
              {collapsed? <img className="logo-icon" src={CatalixLogo} alt='Logo'/> : <SiNintendogamecube color='#fff' size={25}/>}
            </Box>
            <MenuList collapsed={!collapsed} />
            <Box display='flex' marginTop='4rem' marginBottom='1.5rem'
              sx={{backgroundColor:'#fff', width:'80%', marginLeft:'20px', marginRight:'20px'
            }}>
              <Divider variant='middle' />
            </Box>
            <MenuList2 collapsed={!collapsed} />
          </Box>     
        </Sider>
        <Layout>
          <Topbar />       
          <Outlet/>
        </Layout>
      </Layout>
    </ThemeProvider>
  )
}

export default Main