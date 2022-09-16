import { useEffect, useState } from 'react'
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import React from 'react'



const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItem: "center",
    background: "#FFF",
    boxSizing: "border-box",
    borderRadius: "12px",
    height: "300px",
    width: "100%",
    margin: "10px"
}));
const ImageBox = styled("img")(({ theme }) => ({
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    width: "100%",
    height: "50%"
}));


const News = () => {
    const [data, setData] = useState<any>([])

    const options = {
        method: "GET",
        url: "https://newscatcher.p.rapidapi.com/v1/search_free",
        params: { q: 'crypto', media: "True", page_size: "1" },
        headers: {
            'X-RapidAPI-Key': '200b1758a8mshda9cfe6c03fc0e0p1e7c30jsn93a6e39de796',
            'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        },
    };
    useEffect(() => {
        axios.request(options).then((res) => {
            console.log(res.data.articles);
            setData(res.data.articles);
        });
    }, [])
    return (
        <MainBox>
            {data.map((item: any) => (
                <Box sx={{ position: "relative" }}>
                    <ImageBox src={item.media} />
                    <Box ml={1}>{item.title.substring(0, 30)}...</Box>
                    <Box ml={1} mb={2} sx={{ color: "#A9ACBB", fontSize: "12px" }}>{item.published_date.substring(0, 10)}</Box>
                    <Box ml={1} sx={{ color: "#A9ACBB", fontSize: "16px" }}>{item.summary.substring(0, 90)}...</Box>
                    <Box sx={{ color: "#A9ACBB", fontSize: "16px", position: "absolute", right: "0" }}>show all news</Box>
                </Box>
            ))}
        </MainBox>
    )
}

export default News