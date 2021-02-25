export type JustifyContentProps =
  | "center"
  | "space-between"
  | "flex-start"
  | "flex-end"
  | "space-around"
  | "space-evenly";
export type AlignItems = "center" | "flex-end" | "flex-start";

export interface IRoute {
  path: string;
  name?: string;
  exact?: boolean;
  Component: React.FunctionComponent;
  public?: boolean;
  redirect?: IRoute;
}

export type FlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse"
  | "initial"
  | "inherit";
