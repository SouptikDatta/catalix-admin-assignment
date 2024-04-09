import React from 'react';
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/slider.css'; 

const Slide = ({ children }) => (
  <Box display='flex' flexDirection='column' alignItems='center'>
    {children}
  </Box>
);

const SliderComponent = () => {
  const settings = {
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set the duration for each slide
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box className="containerSlide">
      <Slider {...settings}>
        <Slide>
          <Button variant='contained' sx={{width:'80px', backgroundColor:'#539BBB', borderRadius:'20px', textTransform:'inherit'}}>1/6</Button>
          <Typography textAlign='center' fontSize='24px' fontWeight='500' mt='2rem' color='#000'>Build your development value stream map</Typography>
          <Button variant='contained' sx={{ marginTop:'2rem', marginBottom:'2rem', width:'170px', backgroundColor:'#2F667F', borderRadius:'20px', textTransform:'inherit'}}>Start Building</Button>
        </Slide>
        <Slide>
          <Button variant='contained' sx={{width:'80px', backgroundColor:'#539BBB', borderRadius:'20px', textTransform:'inherit'}}>2/6</Button>
          <Typography textAlign='center' fontSize='24px' fontWeight='500' mt='2rem' color='#000'>Unleash Creativity</Typography>
          <Button variant='contained' sx={{ marginTop:'2rem', marginBottom:'2rem', width:'170px', backgroundColor:'#2F667F', borderRadius:'20px', textTransform:'inherit'}}>Let's Begin</Button>
        </Slide>
        <Slide>
          <Button variant='contained' sx={{width:'80px', backgroundColor:'#539BBB', borderRadius:'20px', textTransform:'inherit'}}>3/6</Button>
          <Typography textAlign='center' fontSize='24px' fontWeight='500' mt='2rem' color='#000'>Achieve Excellence</Typography>
          <Button variant='contained' sx={{ marginTop:'2rem', marginBottom:'2rem', width:'170px', backgroundColor:'#2F667F', borderRadius:'20px', textTransform:'inherit'}}>Get Started</Button>
        </Slide>
        <Slide>
          <Button variant='contained' sx={{width:'80px', backgroundColor:'#539BBB', borderRadius:'20px', textTransform:'inherit'}}>4/6</Button>
          <Typography textAlign='center' fontSize='24px' fontWeight='500' mt='2rem' color='#000'>Embrace Innovation</Typography>
          <Button variant='contained' sx={{ marginTop:'2rem', marginBottom:'2rem', width:'170px', backgroundColor:'#2F667F', borderRadius:'20px', textTransform:'inherit'}}>Let's Innovate</Button>
        </Slide>
        <Slide>
          <Button variant='contained' sx={{width:'80px', backgroundColor:'#539BBB', borderRadius:'20px', textTransform:'inherit'}}>5/6</Button>
          <Typography textAlign='center' fontSize='24px' fontWeight='500' mt='2rem' color='#000'>Empower Change</Typography>
          <Button variant='contained' sx={{ marginTop:'2rem', marginBottom:'2rem', width:'170px', backgroundColor:'#2F667F', borderRadius:'20px', textTransform:'inherit'}}>Initiate Change</Button>
        </Slide>
        <Slide>
          <Button variant='contained' sx={{width:'80px', backgroundColor:'#539BBB', borderRadius:'20px', textTransform:'inherit'}}>6/6</Button>
          <Typography textAlign='center' fontSize='24px' fontWeight='500' mt='2rem' color='#000'>Shape the Future</Typography>
          <Button variant='contained' sx={{ marginTop:'2rem', marginBottom:'2rem', width:'170px', backgroundColor:'#2F667F', borderRadius:'20px', textTransform:'inherit'}}>Start Building</Button>
        </Slide>
      </Slider>
    </Box>
  );
};

export default SliderComponent;
