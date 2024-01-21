import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["Noto Sans Arabic", "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
});
theme = responsiveFontSizes(theme);
export default theme;
