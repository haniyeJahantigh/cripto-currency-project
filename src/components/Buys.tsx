import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react'

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  flexDirection: "column",
  background: "#FFF",
  boxSizing: "border-box",
  padding: "30px 20px",
  borderRadius: "12px",
  height: "120px",
  width: "100%",
  margin: "10px 10px 20px",
}));
const TopBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
}));
const InnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "30%",
}));

const Buys = () => {
  return (
    <MainBox>
      <TopBox>
        <Box>Bought Shiba Inu</Box>
        <InnerBox>
          <Box sx={{ color: "#9FA2B2", fontSize: "12px" }}>Avg</Box>
          <Box sx={{ fontSize: "16px" }}>$0.000037</Box>
        </InnerBox>
      </TopBox>
      <TopBox>
        <Box sx={{ color: "#9FA2B2", fontSize: "16px" }}>Yesterday</Box>
        <InnerBox>
          <Box sx={{ fontSize: "16px" }}>22,013,222</Box>
          <Box sx={{ fontSize: "16px", color: "#9FA2B2" }}> Shiba</Box>
        </InnerBox>
      </TopBox>
    </MainBox>
  );
};

export default Buys;
