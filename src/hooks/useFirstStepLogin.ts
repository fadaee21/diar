import { useCallback, useState } from "react";
// import { postData } from "../services/axios";

// const mobileIsOk = true;
// const codeIsOk = true;
const useFirstStepLogin = (mobileNumber: string) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false); // new state variable
  const [responseMessage, setResponseMessage] = useState("");
    // const { setIsLoggedIn } = useAuth();
  const handleGetPhoneNumber = useCallback(async () => {
    console.log(mobileNumber);
    setLoading(true);
    try {
      // const reqOptions = {
      //   url: "/auth/otp",
      //   // data: {mobileNumber},
      // };
      // const res = await postData(reqOptions);
      // if (res.status === 201) {
        setStep(1);
        setResponseMessage("کد ارسال شد");
      // }
    } catch (error) {
      setStep(0);
      setResponseMessage("خطا در ارسال کد");
    } finally {
      setLoading(false); // cause another state change
    }
  }, [mobileNumber]);

  return { handleGetPhoneNumber, step, loading, responseMessage };
};

export default useFirstStepLogin;
