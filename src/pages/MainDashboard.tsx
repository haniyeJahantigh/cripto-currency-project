import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { styled } from '@mui/system';
 
const MainBox = styled('div')(({ theme }) => ({
  background: "#F8F9FD",
  display:"flex"
}));

const MainDashboard = () => {
  return (
    <MainBox>
        <Sidebar/>
        <Header/>
    </MainBox>
  )
}

export default MainDashboard