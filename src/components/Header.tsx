import { Box } from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';


const MyHeader = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:'space-between',
  background: "#FFF",
  boxSizing:"border-box",
  padding: 10,
  height:70,
  width:"100vw",
  boxShadow: '0.3px 0.3px 3px lightGrey',
}));
const MyBox = styled(Box)(({ theme }) => ({
  margin:10,
  display:"flex",
  justifyContent:'space-between',
  alignItem:"center"
}));

const Header = () => {
  return (
    <MyHeader>
      <MyBox>
        <Box sx={{fontSize:"30px"}}> My Profile</Box>
        <MyBox>
        <Box sx={{cursor:"pointer"}}>Cripto assete</Box> | <Box sx={{cursor:"pointer"}}>stoke</Box>

        </MyBox>
      </MyBox>
      <MyBox>
        <CreditCardOutlinedIcon color="primary" />
        connect a wallet
        <AccountCircleRoundedIcon color="primary" fontSize="large"/>
      </MyBox>
     
    </MyHeader>
  )
}

export default Header