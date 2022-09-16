import React from 'react'
import { Box } from "@mui/material";
import { styled } from "@mui/system";


const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: "space-around",
    boxSizing: "border-box",
    height: "30px",
    width: "100%",
    margin: "35px 10px 10px",
    color: "#A9ACBB",
    fontSize: "16px",
    cursor: "pointer"
}));
const TableMenu = () => {
    return (
        <MainBox>
            <Box sx={{ color: "#453DE0", fontSize: "18px" }}>Prtfolio</Box>
            <Box>Watchlist</Box>
            <Box>Gainers</Box>
            <Box>Losers</Box>
            <Box>Recomanded</Box>
            <Box>Recently sold</Box>
        </MainBox>
    )
}

export default TableMenu