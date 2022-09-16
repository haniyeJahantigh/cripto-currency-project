import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { abbreviateNumber } from '../utils/abbreviateNumber';
import TablePagination from '@mui/material/TablePagination';


const MainBox = styled(Box)(({ theme }) => ({
    background: "#FFF",
    boxSizing: "border-box",
    borderRadius: "12px",
    height: "350px",
    width: "95%",
    margin: "10px",
}));

const CoinsTable = () => {
    const [data, setData] = useState<any>([])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        axios.get("https://api.coinlore.net/api/tickers/").then(res => { setData(res.data.data) })
    }, [])


    return (
        <MainBox>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 450 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ color: "#A9ACBB" }}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Marketcup</TableCell>
                                <TableCell align="left">Balance</TableCell>
                                <TableCell align="left">1H</TableCell>
                                <TableCell align="left">24H</TableCell>
                                <TableCell align="left">7D</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ display: "flex", alignItems: "center" }}>
                                        <Box mr={2}>
                                            <Avatar>{row.name.substring(0, 1)}</Avatar>
                                        </Box>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{abbreviateNumber(row.market_cap_usd)}</TableCell>
                                    <TableCell align="left">{row.price_usd}</TableCell>
                                    <TableCell align="left" sx={{ color: row.percent_change_1h >= 0 ? "green" : "red" }} >{row.percent_change_1h}</TableCell>
                                    <TableCell align="left" sx={{ color: row.percent_change_24h >= 0 ? "green" : "red" }}>{row.percent_change_24h}</TableCell>
                                    <TableCell align="left" sx={{ color: row.percent_change_7d >= 0 ? "green" : "red" }}>{row.percent_change_7d}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </MainBox>
    )
}

export default CoinsTable