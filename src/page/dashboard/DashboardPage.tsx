import LogoutButton from "@components/log-user/LogoutButton";
import { Box, Typography } from "@mui/material";

function DashboardPage() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Typography variant="h6">DASHBOARD</Typography>
      <LogoutButton />
    </Box>
  );
}
export default DashboardPage;
