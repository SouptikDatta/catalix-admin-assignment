import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, description, profit, price, secondColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box width="228px" height='134px'>
      <Box position="absolute" zIndex={1} p={2} pt='10px'>

        <Typography fontSize='13px' fontWeight='600' >{title}</Typography>
        
        <Typography fontSize='10px' color={secondColor} >{description}</Typography>
        
        <Typography fontSize='24px' fontWeight='500'
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            mt: 1,
          }}
        >{subtitle}</Typography>
        
        <Typography fontSize='12px' >{profit}</Typography>
        
        <Typography fontSize='10px' color={secondColor} pt='4px' >{price}</Typography>

      </Box>

      <Box display="flex" position='relative' top="18.5px"  borderRadius={2} sx={{overflow:'hidden'}}>
        <img src={icon} alt="Avatar" />
      </Box>

    </Box>
  );
};

export default StatBox;
