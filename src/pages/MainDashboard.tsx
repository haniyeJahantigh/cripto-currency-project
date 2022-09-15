import DailyDiposit from "../components/DailyDiposit";
import Transactions from "../components/Transactions";
import Buys from "../components/Buys";
import Stacking from "../components/Stacking";
import BalanceChart from "../components/BalanceChart";
import CriptoChart from "../components/CriptoChart";
import TableMenu from "../components/TableMenu";
import CoinsTable from "../components/CoinsTable";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const BodyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: "50px",
}));
const LeftBox = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));
const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  width: "30%",
}));

const MainDashboard = () => {
  return (
    <>
      <BodyBox>
        <LeftBox>
          <Box sx={{ display: "flex" }}>
            <BalanceChart />
            <CriptoChart />
          </Box>
          <TableMenu />
          <CoinsTable />
        </LeftBox>
        <RightBox>
          <DailyDiposit />
          <Transactions />
          <Buys />
          <Stacking />
        </RightBox>
      </BodyBox>
    </>
  );
};

export default MainDashboard;
