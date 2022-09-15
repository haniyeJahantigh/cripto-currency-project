import React from 'react'
import { Box } from "@mui/material";
import { styled } from "@mui/system";
type Props = {}
const MainBox = styled(Box)(({ theme }) => ({
    background: "#FFF",
    boxSizing: "border-box",
    borderRadius: "12px",
    height: "350px",
    width: "35%",
    margin: "10px",
  }));
const CriptoChart = (props: Props) => {
  return (
    <MainBox>CriptoChart</MainBox>
  )
}

export default CriptoChart