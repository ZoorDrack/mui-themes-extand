import tinycolor from "tinycolor2";
import { GREY, createGradient } from "../paletteFuncs";

// ----------------------------------------------------------------------
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 30;

const primary = "#49A65C";
const secondary = "#58ca70";
const warning = "#FA847E";
const success = "#4DAE00";
const info = "#FECB07";
const error = "#FF9690";
const hero = "#F57069";

const PRIMARY = {
  lighter: tinycolor(primary).lighten(lighterenRate).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(lightenRate).toHexString(),
  dark: tinycolor(primary).darken(darkenRate).toHexString(),
  darker: tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  main: secondary,
  light: tinycolor(secondary).lighten(lightenRate).toHexString(),
  dark: tinycolor(secondary).darken(darkenRate).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780",
};

const INFO = {
  lighter: "#FCEDF2",
  main: info,
  light: tinycolor(info).lighten(lightenRate).toHexString(),
  dark: tinycolor(info).darken(darkenRate).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  main: success,
  light: tinycolor(success).lighten(lightenRate).toHexString(),
  dark: tinycolor(success).darken(darkenRate).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#FFF7CD",
  main: warning,
  light: tinycolor(warning).lighten(lightenRate).toHexString(),
  dark: tinycolor(warning).darken(darkenRate).toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  main: error,
  light: tinycolor(error).lighten(lightenRate).toHexString(),
  dark: tinycolor(error).darken(darkenRate).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  one: "#44A357",
  two: "#28933E",
};

const palette = {
  hero,

  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,

  divider: GREY[500_24],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[500_80],
    disabled: GREY[400],
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: GREY[100],
    warning: "#ECECEC",
    error: "#edd1d1",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: createGradient(INFO.lighter, INFO.light),
    success: "#FFE7CE",
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: PRIMARY.main,
    toggle2: PRIMARY.dark,
    toggle3: "#EDFCFA",
    toggle4: "#fff",
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#445A68",
    colorActive: "#000",
    bg: "#FFF",
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #44A357 3.01%, #28933E 95.95%)",
    bgColorHover: "linear-gradient(139.78deg, #61C876 3.01%, #3DAD54 95.95%)",
    shadow: "0px 3px 5px rgba(0, 0, 0, 0.08)",
  },
  bgLight: {
    one: "#F4F4F4",
    two: "#F1FCF7",
    disabled: "#add6b5",
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 2px 35px rgba(0, 0, 0, 0.15)",
  },
};

export default palette;
