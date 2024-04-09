import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import BlueGraph from '../assets/blue-graph.svg'
import GreenGraph from '../assets/green-graph.svg'
import WhiteGraph from '../assets/white-graph.svg'
import RedGraph from '../assets/red-graph.svg'
import StatBox from "../components/StatBox";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataVendors } from "../data/mockData";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FaPlus } from "react-icons/fa6";
import * as React from 'react';
import Iteration from "../components/Iteration";

import Views from '../assets/pagetable/views-graph.svg'
import UniqueViews from '../assets/pagetable/unique-views-graph.svg';
import AvgTime from '../assets/pagetable/avg-time-graph.svg';
import Extrances from '../assets/pagetable/extrances-graph.svg';
import Exit from '../assets/pagetable/exit-graph.svg';
import PageValue from '../assets/pagetable/page-value-graph.svg';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Analytics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [year, setYear] = React.useState('');
  const [yearNum, setYearNum] = React.useState('');
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleYearNumChange = (event) => {
    setYearNum(event.target.value);
  };

  const [views, setViews] = React.useState('');

  const handleChange = (event) => {
    setViews(event.target.value);
  };

  const [period, setPeriod] = React.useState('');

  const handlePeriod = (event) => {
    setPeriod(event.target.value);
  };


  const columns = [
    { field: "page", headerName: "Page", flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "pageViews",
      headerName: <Box>
                    <Typography fontSize='11px' fontWeight='500'>Pageviews</Typography>
                    <Typography fontSize='14px' fontWeight='600'>356,982</Typography>
                    <img src={Views} alt=""/>
                  </Box>,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "uniqueViews",
      headerName: <Box>
                    <Typography fontSize='11px' fontWeight='500'>Unique pageviews</Typography>
                    <Typography fontSize='14px' fontWeight='600'>275,588</Typography>
                    <img src={UniqueViews} alt=""/>
                  </Box>,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "avgTime",
      headerName: <Box>
                    <Typography fontSize='11px' fontWeight='500'>Avg. Time on page</Typography>
                    <Typography fontSize='14px' fontWeight='600'>00:03:51</Typography>
                    <img src={AvgTime} alt=""/>
                  </Box>,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "extrances",
      headerName: <Box>
                    <Typography fontSize='11px' fontWeight='500'>Extrances</Typography>
                    <Typography fontSize='14px' fontWeight='600'>315,643</Typography>
                    <img src={Extrances} alt=""/>
                  </Box>,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "exit",
      headerName: <Box>
                    <Typography fontSize='11px' fontWeight='500'>% Exit</Typography>
                    <Typography fontSize='14px' fontWeight='600'>39,84%</Typography>
                    <img src={Exit} alt=""/>
                  </Box>,
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pageValue",
      headerName: <Box>
                    <Typography fontSize='11px' fontWeight='500'>Page Value</Typography>
                    <Typography fontSize='14px' fontWeight='600'>$19,983</Typography>
                    <img src={PageValue} alt=""/>
                  </Box>,
      flex: 1,
      headerAlign: "center",
      align: "center",
    }    
  ];

  return (
    <Box display="flex" 
    flexDirection='column'>

        {/* ROW 1 */}
        <Box pt='2rem'
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Button sx={{ width:'192px', height:'40px', fontSize:'18px', borderRadius:'20px', 
            backgroundColor:'#2F667F', color:'#fff', textTransform:'inherit', gap:'8px'
          }}>
            <FaPlus/> Create Report
          </Button>

          <Button sx={{ width:'245px', height:'40px', fontSize:'18px', borderRadius:'20px', 
            backgroundColor:'transparent', color:'#2F667F', textTransform:'inherit', border:'2px solid #2F667F'
          }}>
            Share this dashboard
          </Button>
          <Button sx={{ width:'188px', height:'40px', fontSize:'18px', borderRadius:'20px', 
            backgroundColor:'transparent', color:'#2F667F', textTransform:'inherit', border:'2px solid #2F667F'
          }}>
            Select Duration
          </Button>
          <Button sx={{ width:'265px', height:'40px', fontSize:'18px', borderRadius:'20px', 
            backgroundColor:'transparent', color:'#2F667F', textTransform:'inherit', border:'2px solid #2F667F'
          }}>
            Compare with Duration
          </Button>
        </Box>


        {/* ROW 2 */}
        <Box display='flex' flexDirection='row' justifyContent='space-evenly' mt='1rem'>
          <Box width="210px" height="134px" mr={2} mb={4}
            backgroundColor='#8EBAE3'
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={2}
            sx={{ boxShadow:"4px 5px 5px rgba(0,0,0,.2)", color : '#fff'
            }}
          >
            <StatBox
              title="EFFICIENCY"
              description='Lorem Ipsum'
              subtitle="1.1921"
              profit='+0.0015 (+0.13%)'
              price='0.00 USD'
              secondColor='#D9EAFF'
              icon={BlueGraph}
            />
          </Box>
          <Box width="208px" height="134px" mr={2} mb={4}
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor='#29AB87'
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={2}
            sx={{ boxShadow:"4px 5px 5px rgba(0,0,0,.2)", color : '#fff'
            }}
          >
            <StatBox
              title="TIME TO MARKET"
              description='Lorem Ipsum'
              subtitle="327,176"
              profit='-97,914.00 (-23.03%)'
              price='131,040,723,108 JPY'
              secondColor='#FFEEB2'
              icon={GreenGraph}
            />
          </Box>
          <Box width="208px" height="134px" mr={2} mb={4}
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor={colors.primary[900]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={2}
            sx={{ boxShadow:"4px 5px 5px rgba(0,0,0,.2)", color : '#000',
            }}
          >
            <StatBox
              title="TECH DEBT"
              description='Lorem Ipsum'
              subtitle="1.1763"
              profit='+0.0015 (+0.13%)'
              price='0.00 USD'
              secondColor='#939699'
              icon={WhiteGraph}
            />
          </Box>
          <Box width="208px" height="134px" mr={2} mb={4}
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor='#FF4F52'
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={1}
            sx={{ boxShadow:"4px 5px 5px rgba(0,0,0,.2)", color : '#fff'
            }}
          >
            <StatBox
              title="PREDICTABILITY"
              description='Lorem Ipsum'
              subtitle="0.00313010"
              profit='-0.00050430 (-13.88%)'
              price='1,566 BTC'
              secondColor='#D9DADB'
              icon={RedGraph}
            />
          </Box>
        </Box>


        {/* ROW 3 */}
        <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
          <Iteration status='On Time' badge='success'
            completed='Completed Iterations' completedNo='7' 
            total='Total Iterations' totalNo= '9'
            percent='% Iterations Done' percentDone= '77.8%'
          />

          <Iteration status='On Scope' badge='success'
            completed='Story points done' completedNo='3200' 
            total='Total Story points' totalNo= '4230'
            percent='% Stories Done' percentDone= '70.9%'
          />

          <Iteration status='On Velocity' badge='error'
            completed='Average Velocity' completedNo='428.6' 
            total='Rrequired Velocity' totalNo= '615.0'
          />
        </Box>


        {/* ROW 4 */}
        <Box m='2rem' sx={{backgroundColor:'#fff'}}
          borderRadius={2}
        >
          <Box
            sx={{
              height:"68vh",
              '@media (max-width: 1025px) and (min-width: 822px)': {
                height: '30vh', // Adjusted height for smaller screens
              },
              '@media (max-width: 821px) and (min-width: 768px)': {
                height: '32vh', // Adjusted height for smaller screens
              },
              "& .css-1xui73c-MuiDataGrid-root .MuiDataGrid-withBorderColor":{
                backgroundColor: '#fff',
              },
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[800],
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
              "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar":{
                
              }
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="5px 20px" mb={2} borderBottom={1} borderColor="lightgray">
              <FormControl variant="standard" sx={{width:'130px'}}>
                <InputLabel id="views-label" >PAGEVIEWS</InputLabel>
                <Select sx={{height:'30px'}}
                  labelId="views-label"
                  id="views-select"
                  value={views}
                  label="Page views"
                  onChange={handleChange}
                >
                  <MenuItem value='arrival'>Arrival Rate</MenuItem>
                  <MenuItem value='fixed'>Fixed Rate</MenuItem>
                  <MenuItem value='cycle'>Cycle time</MenuItem>
                  <MenuItem value='lead'>Lead time</MenuItem>
                  <MenuItem value='new'>New Features</MenuItem>
                  <MenuItem value='ready'>Ready Features</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <Box display='flex' alignItems='center' mr='1rem' >
                  <Button variant="outlined" sx={{ backgroundColor: period === 'today' ? 'lightblue' : 'inherit', borderRadius:'0px', width:'57px', height:'23px', textTransform:'inherit' }}>Today</Button>
                  <Button variant="outlined" sx={{ backgroundColor: period === 'yesterday' ? 'lightblue' : 'inherit', borderRadius:'0px', width:'57px', height:'23px', textTransform:'inherit' }}>Yesterday</Button>
                  <Button variant="outlined" sx={{ backgroundColor: period === 'week' ? 'lightblue' : 'inherit', borderRadius:'0px', width:'57px', height:'23px', textTransform:'inherit' }}>Week</Button>
                  <Button variant="outlined" sx={{ backgroundColor: period === 'month' ? 'lightblue' : 'inherit', borderRadius:'0px', width:'57px', height:'23px', textTransform:'inherit' }}>Month</Button>
                  <Button variant="outlined" sx={{ backgroundColor: period === 'quarter' ? 'lightblue' : 'inherit', borderRadius:'0px', width:'57px', height:'23px', textTransform:'inherit' }}>Quarter</Button>
                  <Button variant="outlined" sx={{ backgroundColor: period === 'year' ? 'lightblue' : 'inherit', borderRadius:'0px', width:'57px', height:'23px', textTransform:'inherit' }}>Year</Button>
                </Box>
            
                <FormControl sx={{minWidth:'140px'}}>
                  <InputLabel id="period-label" >Select Period</InputLabel>
                  <Select sx={{height:'46px'}}
                    labelId="period-label"
                    id="period-select"
                    value={period}
                    label="Select Period"
                    onChange={handlePeriod}
                  >
                    <MenuItem value='today'>Today</MenuItem>
                    <MenuItem value='yesterday'>Yesterday</MenuItem>
                    <MenuItem value='week'>Week</MenuItem>
                    <MenuItem value='month'>Month</MenuItem>
                    <MenuItem value='quarter'>Quarter</MenuItem>
                    <MenuItem value='year'>Year</MenuItem>
                  </Select>
                </FormControl>
              </Box>      
            </Box>

            <DataGrid
              rows={mockDataVendors}
              columns={columns}
            />
            
          </Box>

      </Box>
    </Box>
  );
};

export default Analytics;
