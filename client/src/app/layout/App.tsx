import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Dashboard from "../../features/Dashboard/Dashboard";

function App() {

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideBar />
      <Box component="main" sx={{ flex: 1 }}>
        <Dashboard />
      </Box>
    </Box>
  )
}

export default App
