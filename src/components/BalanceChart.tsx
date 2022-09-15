import React from 'react'
import { Box } from "@mui/material";
import { styled } from "@mui/system";

type Props = {}
const MainBox = styled(Box)(({ theme }) => ({
    background: "#FFF",
    boxSizing: "border-box",
    borderRadius: "12px",
    height: "350px",
    width: "65%",
    margin: "10px",
  }));

const BalanceChart = (props: Props) => {
  return (
    <MainBox>BalanceChart</MainBox>
  )
}

export default BalanceChart