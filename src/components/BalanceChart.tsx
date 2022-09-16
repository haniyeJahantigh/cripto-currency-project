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
    "id": "japan",
    "color": "hsl(248, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 203
      },
      {
        "x": "helicopter",
        "y": 200
      },
      {
        "x": "boat",
        "y": 204
      },
      {
        "x": "train",
        "y": 104
      },
      {
        "x": "subway",
        "y": 140
      },
      {
        "x": "bus",
        "y": 240
      },
      {
        "x": "car",
        "y": 204
      },
      {
        "x": "moto",
        "y": 232
      },
      {
        "x": "bicycle",
        "y": 232
      },
      {
        "x": "horse",
        "y": 158
      },
      {
        "x": "skateboard",
        "y": 243
      },
      {
        "x": "others",
        "y": 148
      }
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
          margin={{ right: 0, bottom: 90 }}
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
          lineWidth={2}
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