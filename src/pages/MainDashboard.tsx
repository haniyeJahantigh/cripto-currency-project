import DailyDiposit from '../components/DailyDiposit';
import Transactions from '../components/Transactions';
import Buys from '../components/Buys';
import Stacking from '../components/Stacking';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

 

const BodyBox = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"space-around",
  padding:"50px"
}));
const LeftBox = styled(Box)(({ theme }) => ({
  width:"85%",
  display:"flex",
  justifyContent:"space-around",
}));
const RightBox = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"space-around",
  flexDirection:"column",
}));

const MainDashboard = () => {
  return (
    <>
        <BodyBox>
          <LeftBox>hi </LeftBox>
          <RightBox>
          <DailyDiposit/>
          <Transactions/>
          <Buys/>
          <Stacking/>
          </RightBox>
        </BodyBox>
    </>
  )
}

export default MainDashboard