import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { styled} from "@mui/system";



const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  background: "#FFF",
  boxSizing: "border-box",
  padding: "30px 20px",
  borderRadius: "12px",
  height: "200px",
  width: "100%",
  margin:"10px"
}));
const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection:"column",
  justifyContent: "space-between",
  alignItem: "center",
  
}));
const TextBox = styled(Box)(({ theme }) => ({
  fontSize: "20px",
}));

type Props = {};
function CircularProgressWithLabel(props: Props) {
  return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          thickness={2.5}
          {...props}
          size={110}
          sx={{"& .MuiCircularProgress-circle":{color:"#453DE0"}}}
        />
        <Box
          sx={{
            top: 30,
            left: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography  component="div" >
            <TextBox>70%</TextBox>
            <Box sx={{color:"#9FA2B2" , fontSize:"14px"}}>Limit</Box>
            
          </Typography>
        </Box>
      </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const DailyDiposit = () => {
  const [progress, setProgress] = React.useState(70);
  return (
    <MainBox>
        <LeftBox>
            <Box sx={{color:"#9FA2B2",fontSize:"19px", lineHeight:"23px"}}>
                You reach {progress}% of your daily deposit of $10,000
            </Box>
            <Box sx={{color:"#453DE0", fontSize:"20px"}}>Expand limit</Box>
        </LeftBox>
      <CircularProgressWithLabel value={progress} />
    </MainBox>
  );
};
export default DailyDiposit;
