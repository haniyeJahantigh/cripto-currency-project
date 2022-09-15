import React from 'react'
import { Box } from "@mui/material";
import { styled } from "@mui/system";

type Props = {}
const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    flexDirection: "column",
    background: "#FFF",
    boxSizing: "border-box",
    padding: "30px 0",
    borderRadius: "12px",
    height: "200px",
    width: "100%",
    margin: "10px",
  }));
  const TopBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    flexDirection: "column",
    borderBottom:" 0.2px solid #A9ACBB",
  }));
  const BottomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    flexDirection: "column",
  }));
  const InnerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems:"space-between",
    margin:"7px 20px"
  }));

const Stacking = (props: Props) => {
  return (
   <MainBox>
    <TopBox>
       <Box sx={{margin:"0 20px"}} >Stacking</Box>
       <Box sx={{color:"#A9ACBB", fontSize:"16px",margin:"5px 20px 10px"}}>You have 6 active stacking</Box>
    </TopBox>
    <BottomBox>
        <InnerBox>
            <Box sx={{color:"#A9ACBB", fontSize:"16px"}}>Estimate Annual Revards</Box>
            <Box sx={{fontSize:"16px"}}>9.3 % p.a.</Box>
        </InnerBox>
        <InnerBox>
            <Box sx={{color:"#A9ACBB", fontSize:"16px"}}>Estimate Earnings</Box>
            <Box sx={{fontSize:"16px"}}>$10.56 USD</Box>
        </InnerBox>
    </BottomBox>     
    </MainBox>
  )
}

export default Stacking