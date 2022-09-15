import DailyDiposit from '../components/DailyDiposit';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
 

const BodyBox = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"space-around",
}));

const MainDashboard = () => {
  return (
    <>
        <BodyBox>
          <DailyDiposit/>
        </BodyBox>
    </>
  )
}

export default MainDashboard