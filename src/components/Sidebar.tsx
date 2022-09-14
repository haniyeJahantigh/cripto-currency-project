import { styled } from '@mui/system';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box } from '@mui/material';

const MySidebar = styled('div')(({ theme }) => ({
  background: "#453DE0",
  boxSizing:"border-box",
  paddingTop: 90,
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  height:"100vh",
  width:300
}));
const Mybox = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  pading: 10,
  height:70,
  width:300,
  color:"#FFF",
  fontSize:20,
  cursor:"pointer",
}));
const IconDiv = styled("div")(({ theme }) => ({
  marginLeft: 20,
  marginRight:10,
  height:50,
  color:"#FFF",
  width:50
}));


const Sidebar = () => {
  return (
    <MySidebar>
      <Mybox>
        <IconDiv>
          <ImportContactsOutlinedIcon fontSize="large"/>
        </IconDiv>
       News
      </Mybox>
      <Mybox>
      <IconDiv>
          <StyleOutlinedIcon fontSize="large"/>
        </IconDiv>NFT
      </Mybox>
      <Mybox>
      <IconDiv>
          <LayersOutlinedIcon fontSize="large"/>
        </IconDiv>Stacking
      </Mybox>
      <Mybox>
      <IconDiv>
          <CreditCardOutlinedIcon fontSize="large"/>
        </IconDiv>Wallets
      </Mybox>
      <Mybox>
      <IconDiv>
          <LockOutlinedIcon fontSize="large"/>
        </IconDiv>Security
      </Mybox>
      <Mybox>
      <IconDiv>
          <SettingsOutlinedIcon fontSize="large"/>
        </IconDiv>Setting
      </Mybox>
    </MySidebar>
  )
}

export default Sidebar