import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import { styled  } from "@mui/system";


const MainBox = styled("div")(({ theme }) => ({
  background: "#F8F9FD",
  display: "flex",
}));
const BodyBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
function App() {
  return (
    <div>
      <BrowserRouter>
        <MainBox>
          <Sidebar />
          <BodyBox>
            <Header />
            <Routes>
              <Route path="/" element={<MainDashboard />} />
            </Routes>
          </BodyBox>
        </MainBox>
      </BrowserRouter>
    </div>
  );
}

export default App;
