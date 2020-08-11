export interface IPalette {
  [key: string]: string;
}

export interface IFonts {}

export interface IBreakpoints {
  [key: string]: number;
}

export interface ITheme {
  palette: IPalette;
  fonts: IFonts;
  breakpoints: IBreakpoints;
}
