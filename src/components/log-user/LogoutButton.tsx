import useLogout from "@/hooks/useLogout";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const logout = useLogout();
  return (
    <Button type="button" onClick={logout}>
      sign out
    </Button>
  );
};

export default LogoutButton;
