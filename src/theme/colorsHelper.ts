export enum Primary {
  contrastText = "contrastText",
  dark = "dark",
  light = "light",
  main = "main",
}

export const PrimaryColors = (color: Primary) => (props: any) =>
  props.theme.palette.primary[color];

export enum Background {
  default = "default",
  paper = "paper",
}

export const BackgroundColors = (color: Background) => (props: any) =>
  props.theme.palette.background[color];

export enum Action {
  active = "active",
  disabled = "disabled",
  disabledBackground = "disabledBackground",
  focus = "focus",
  hover = "hover",
  selected = "selected",
}

export const ActionColors = (
  color:
    | "active"
    | "disabled"
    | "disabledBackground"
    | "focus"
    | "hover"
    | "selected"
) => (props: any) => props.theme.palette.action[color];

export enum Text {
  disabled = "disabled",
  hint = "hint",
  icon = "icon",
  primary = "primary",
  secondary = "secondary",
}
export const TextColors = (
  color: "disabled" | "hint" | "icon" | "primary" | "secondary"
) => (props: any) => props.theme.palette.text[color];
