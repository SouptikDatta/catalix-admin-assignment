import { Box, Button, Typography } from "@mui/material";
import SliderComponent from "../components/SliderComponent";
import ReactPlayer from 'react-player';
import { useState } from "react";
import Video from '../assets/video.mp4'
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";

const Home = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  return (
    <Box display='flex' flexDirection='row' mt='2rem'>
      <Box display='flex' flexDirection='column' alignItems='start' sx={{backgroundColor:'transparent'}} m='1rem' >
        <Typography fontSize='24px' fontWeight='600'>Set-up Catalix for Success</Typography>
        <Typography fontSize='16px' mt='1rem' >Get Catalix up to date or start your transformation by following the guide below.</Typography>
        <SliderComponent/>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='start' sx={{backgroundColor:'#fff'}} p='4rem' pt='1rem'  minHeight='750px'>
        <Typography fontSize='24px' fontWeight='600' >Get ready to transform</Typography>
        <Typography fontSize='16px' mt='1rem'>Here’s a video to get started. As your transformation progresses, you’ll get fresh tips and insights here.</Typography>
        {/* Video Player with play pause button within video */}
        <Box mt='2rem'>
          <ReactPlayer height='auto' width='90%'
            url={Video}
            playing={isPlaying}
            onProgress={handleProgress}
          />
          <Button sx={{zIndex:2, fontSize:'16px' , position:'relative',left:'20px', bottom:'50px',color:'white', backgroundColor:'#393939'}} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <CiPause1 size={20}  style={{marginRight:'5px'}} /> : <IoPlayOutline size={20} style={{marginRight:'5px'}}/>} {currentTime.toFixed(2)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
