import React from 'react'
import { Box } from "@mui/material";
import { styled} from "@mui/system";
import OutboundIcon from '@mui/icons-material/Outbound';

const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    background: "#FFF",
    boxSizing: "border-box",
    padding: "30px",
    borderRadius: "12px",
    height: "150px",
    width: "100%",
    margin:"10px"
  }));
  const LeftBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItem: "center",
    width:"50%"
    
  }));
type Props = {}

const Transactions = (props: Props) => {
  return (
    <MainBox>
        <LeftBox>
            <Box color={"#453DE0"} >
            <OutboundIcon fontSize='large' />

            </Box>
            <Box sx={{color:"#9FA2B2", fontSize:"20px"}}>Total transactions this week</Box>
        </LeftBox>
        <Box sx={{color:"#4C506B", fontSize:"40px"}} >
            17
        </Box>
    </MainBox>
  )
}

export default Transactions