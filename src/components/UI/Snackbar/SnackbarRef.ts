import React from "react";

export const SnackbarRef: React.RefObject<any> = React.createRef();

export function snackbar(message: string) {
  SnackbarRef.current?.show();
  SnackbarRef.current?.message(message);
}
