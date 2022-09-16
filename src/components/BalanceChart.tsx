import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ResponsiveLine } from '@nivo/line'
import React from 'react'

const MainBox = styled(Box)(({ theme }) => ({
  background: "#FFF",
  boxSizing: "border-box",
  borderRadius: "12px",
  height: "350px",
  width: "65%",
  margin: "10px",
}));
const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "10px 20px",

}));
const data = [
  {
    id: 0,
    color: "#453de0",
    data: [
      {
        x: "1",
        y: 0
      },
      {
        x: "2",
        y: 500
      },
      {
        x: "3",
        y: 900
      },
      {
        x: "4",
        y: 2
      },
      {
        x: "5",
        y: 700
      },
      {
        x: "6",
        y: 150
      },
      {
        x: "7",
        y: 2500
      },
      {
        x: "8",
        y: 205
      },
      {
        x: "9",
        y: 3000
      },
      {
        x: "10",
        y: 203
      },
      {
        x: "11",
        y: 280
      },
      {
        x: "12",
        y: 2000
      },
      {
        x: "13",
        y: 2000
      },
      {
        x: "14",
        y: 2000
      },
      {
        x: "15",
        y: 2000
      },
      {
        x: "16",
        y: 2000
      },
      {
        x: "17",
        y: 2000
      },
      {
        x: "18",
        y: 2000
      },
      {
        x: "19",
        y: 203
      },
      {
        x: "20",
        y: 280
      },
      {
        x: "21",
        y: 2000
      },
      {
        x: "22",
        y: 2000
      },
      {
        x: "23",
        y: 2000
      },
      {
        x: "24",
        y: 2000
      },
      {
        x: "25",
        y: 2000
      },
      {
        x: "26",
        y: 2000
      },
      {
        x: "27",
        y: 2000
      },
      {
        x: "28",
        y: 0
      },
      {
        x: "29",
        y: 500
      },
      {
        x: "30",
        y: 900
      },
      {
        x: "31",
        y: 2
      },
      {
        x: "32",
        y: 700
      },
      {
        x: "33",
        y: 150
      },
      {
        x: "34",
        y: 2500
      },
      {
        x: "35",
        y: 205
      },
      {
        x: "36",
        y: 3000
      },
      {
        x: "37",
        y: 203
      },
      {
        x: "38",
        y: 280
      },
      {
        x: "39",
        y: 2000
      },
      {
        x: "40",
        y: 2000
      },
      {
        x: "41",
        y: 2000
      },
      {
        x: "42",
        y: 2000
      },
      {
        x: "43",
        y: 700
      },
      {
        x: "44",
        y: 150
      },
      {
        x: "45",
        y: 2500
      },
      {
        x: "46",
        y: 205
      },
      {
        x: "47",
        y: 3000
      },
      {
        x: "48",
        y: 203
      },
      {
        x: "49",
        y: 2500
      },
      {
        x: "50",
        y: 205
      },
    ]
  }
]
const BalanceChart = () => {

  return (
    <MainBox>
      <Box sx={{ width: "100%", height: "85%" }} >
        <TitleBox>
          <Box sx={{ fontSize: "16px" }}>Your balance</Box>
          <Box sx={{ fontSize: "35px" }}>$ 7,033.22</Box>
        </TitleBox>
        <ResponsiveLine
          data={data}
          margin={{ right: 60, bottom: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false
          }}
          curve="cardinal"
          axisTop={null}
          enableGridY={false}
          enableGridX={false}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enablePoints={false}
          colors={"#453de0"}
          lineWidth={1}
          pointSize={4}
          pointColor={{ theme: "background" }}
          pointBorderWidth={1}
          pointBorderColor={{ from: "serieColor" }}
          enablePointLabel={false}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          gridXValues={[0, 20, 40, 60, 80, 100, 120]}
          gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", borderTop: "0.2px solid #A9ACBB", padding: "10px" }}>
        <Box >Today</Box>
        <Box sx={{ color: "#A9ACBB" }}>This Week</Box>
        <Box sx={{ color: "#A9ACBB" }}>This Month</Box>
        <Box sx={{ color: "#A9ACBB" }}>This Year</Box>
      </Box>
    </MainBox>
  )
}

export default BalanceChart