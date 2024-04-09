import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = () => ({
  grey: {
    100: "#141414",
    200: "#292929",
    300: "#2F363E",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
  },
  primary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#ffffff",
    500: "#141b2d",
    600: "#1F2A40",
    700: "#727681",
    800: "#a1a4ab",
    900: "#ffffff",
  },
  greenAccent: {
    100: "#0f2922",
    200: "#1e5245",
    300: "#2e7c67",
    400: "#3da58a",
    500: "#4cceac",
    600: "#70d8bd",
    700: "#94e2cd",
    800: "#b7ebde",
    900: "#0EC657",
  },
  redAccent: {
    100: "#2c100f",
    200: "#58201e",
    300: "#ff0318",
    400: "#af3f3b",
    500: "#db4f4a",
    600: "#EE2C2C",
    700: "#e99592",
    800: "#f1b9b7",
    900: "#FA880D",
  },
  blueAccent: {
    100: "#161C44",
    200: "#2B3D92",
    300: "#293D74",
    400: "#535ac8",
    500: "#6870fa",
    600: "#52A8C0",
    700: "#a4a9fc",
    800: "#c3c6fd",
    900: "#13A6D4",
  },
  yellowAccent: {
    100: "#F5A200",
    200: "#A6AED2",
  },
  violetAccent: {
    100: "#8558E2",
  }
});

// mui theme settings
export const themeSettings = () => {
  const colors = tokens();
  return {
    palette: {
      mode: "light",
      primary: {
        main: colors.primary[100],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: "#e8e8e8",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};


export const theme = createTheme(themeSettings());