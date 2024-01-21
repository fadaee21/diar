import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth"; // assuming you have an authentication hook
import Cookies from "js-cookie";
import { useState } from "react";

export function useLogin() {
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const otp = formData.get("otp") as string;
    const from = formData.get("redirectTo") as string;
    console.log({ username, otp });
    console.count("useLogging run");
    try {
      const response = {
        data: {
          authorization: "tokenAuthorization",
          profile: {
            id: 200,
            roles: ["manager", "mentor", "teachingassistant"],
          },
        },
        status: 201,
      };

      if (response.status === 201) {
        const {
          authorization,
          profile: { id, roles },
        } = response.data;

        Cookies.set("token", authorization, {
          path: "/",
          expires: 0.5,
          secure: true,
          sameSite: "strict",
        });

        const roleResponseServer = roles.includes("manager")
          ? "admin"
          : roles.includes("mentor")
          ? "mentor"
          : roles.includes("teachingassistant")
          ? "ta"
          : null;

        if (!roleResponseServer) {
          setErrMsg("شما مجاز به ورود در سامانه نمی باشید ");
          return;
        }

        navigate(from, { replace: true });

        setAuth({ id, username });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { handleSubmit, errMsg };
}
