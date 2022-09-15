import { Box } from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";



const MyHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "#FFF",
  padding: 10,
  height: 70,
  width: "80vw",
  boxShadow: "0.3px 0.3px 3px lightGrey",
  marginBottom:"50px"
}));
const MyBox = styled(Box)(({ theme }) => ({
  margin: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
}));
const LinkTag = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  cursor: "pointer" ,
  width: "250px",
}));

const Header = () => {
  return (
    <MyHeader>
      <MyBox>
        <Box sx={{ fontSize: "30px", marginRight: "70px" }}> My Profile</Box>
        <MyBox>
          <LinkTag>
            <Box sx={{ fontSize: "20px", color: "#453DE0" }}>
              Crypto assetes{" "}
            </Box>
            <Box sx={{ border:"0.5px solid #A9ACBB", color:"#A9ACBB"}}/>
            <Box sx={{ color: "#A9ACBB" }}>stokes</Box>
          </LinkTag>
        </MyBox>
      </MyBox>
      <MyBox sx={{ width: "250px" }}>
        <MyBox sx={{ color: "#A9ACBB" }}>
          <Box sx={{ marginRight:"10px"}}>
            <CreditCardOutlinedIcon color="primary" />
          </Box>
          connect a wallet
        </MyBox>
        <Box>
          <AccountCircleRoundedIcon color="primary"  />
        </Box>
      </MyBox>
    </MyHeader>
  );
};

export default Header;
