import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6950A1",
    },
  },
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "40px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
  },
})
