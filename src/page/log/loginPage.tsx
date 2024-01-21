import {
  Form,
  // useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import useFirstStepLogin from "@/hooks/useFirstStepLogin";
import CircularProgress from "@mui/material/CircularProgress";
import { useLogin } from "@/hooks/useLogin";

function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const { step, handleGetPhoneNumber, loading } =
    useFirstStepLogin(mobileNumber);
  if (loading) {
    return (
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,288L480,96L960,128L1440,96L1440,320L960,320L480,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography component="h1" variant="h6">
            سامانه بازخورد دیار
          </Typography>
          {step === 0 ? (
            <SendMobile
              handleGetPhoneNumber={handleGetPhoneNumber}
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
            />
          ) : (
            <SendCode />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default LoginPage;

interface IProps {
  handleGetPhoneNumber: () => void;
  setMobileNumber: React.Dispatch<React.SetStateAction<string>>;
  mobileNumber: string;
}

const SendMobile = ({
  handleGetPhoneNumber,
  setMobileNumber,
  mobileNumber,
}: IProps) => {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        // required
        fullWidth
        id="mobileNumber"
        label="لطفا شماره موبایل خود را وارد کنید"
        name="mobileNumber"
        autoComplete="mobileNumber"
        autoFocus
        onChange={(e) => setMobileNumber(e.target.value)}
        value={mobileNumber}
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleGetPhoneNumber}
      >
        ارسال
      </Button>
    </>
  );
};

const SendCode = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.state === "loading"; // i'm not sure about usage

  const { handleSubmit } = useLogin();
  return (
    <Form method="post" replace onSubmit={handleSubmit}>
      <input type="hidden" name="redirectTo" value={from} />
      <TextField
        variant="outlined"
        margin="normal"
        // required
        fullWidth
        id="username"
        label="لطفا نام کاربری را وارد کنید"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        // required
        fullWidth
        id="codeOTP"
        label="لطفا کد ارسال شده را وارد کنید"
        name="codeOTP"
        autoComplete="codeOTP"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color={isLoggingIn ? "secondary" : "primary"}
      >
        {isLoggingIn ? "در حال ارسال کد ..." : "ارسال کد"}
      </Button>
      {/* {actionData && actionData.error ? (
        <Typography variant="body2" color="error">
          {actionData.error}
        </Typography>
      ) : null} */}
    </Form>
  );
};
