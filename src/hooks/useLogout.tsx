import Cookies from "js-cookie";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    if (auth.username) {
      Cookies.remove("token", { path: "/", sameSite: "strict" });
      setAuth({ username: "", id: null });
      navigate("login", { replace: true });
    }
    return null;
  }
  return handleLogout;
};

export default useLogout;
