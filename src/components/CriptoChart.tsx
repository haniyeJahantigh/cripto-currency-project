import React from 'react'
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { render } from "react-dom";
import { Pie } from "@nivo/pie";
type Props = {}


const data = [
    {
        id: "CRO",
        label: "css (custom)",
        value: 400,
        color: "#453de0"
    },
    {
        id: "OTHER",
        label: "sass",
        value: 200,
        color: "#4c506b"
    },
    {
        id: "SHIB",
        label: "javascript",
        value: 550,
        color: "#a9acbb"
    },
    {
        id: "ADA",
        label: "css (custom)",
        value: 500,
        color: "#d8d5f9"
    },
    {
        id: "BTC",
        label: "sass",
        value: 350,
        color: "#bab6f3"
    },
    {
        id: "ETH",
        label: "javascript",
        value: 200,
        color: "#7c76eb"
    }
];

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
        <MainBox>
            <div>
                <Pie
                    width={290}
                    height={290}
                    data={data}
                    margin={{
                        top: 80,
                        right: 80,
                        bottom: 10,
                        left: 100
                    }}
                    startAngle={-61}
                    innerRadius={0.8}
                    padAngle={2}
                    cornerRadius={45}
                    activeOuterRadiusOffset={8}
                    colors={{ datum: 'data.color' }}
                    borderColor="#2ced7f"
                    arcLinkLabelsSkipAngle={13}
                    arcLinkLabelsTextOffset={0}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsOffset={-1}
                    arcLinkLabelsDiagonalLength={40}
                    arcLinkLabelsStraightLength={0}
                    arcLinkLabelsThickness={0}
                    arcLinkLabelsColor={{ from: 'color' }}
                    enableArcLabels={false}
                    arcLabelsRadiusOffset={0.4}
                    arcLabelsSkipAngle={12}
                    theme={{
                        tooltip: {
                            container: {
                                fontSize: "13px"
                            }
                        },
                        labels: {
                            text: { color: "#555" }
                        }
                    }}
                />
            </div>
        </MainBox>
    )
}

export default CriptoChart