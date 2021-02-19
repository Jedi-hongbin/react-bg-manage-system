import React, { forwardRef, useImperativeHandle, useCallback } from "react";
import {
  Snackbar as MaterialSnackbar,
  IconButton,
  Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { TransitionProps } from "@material-ui/core/transitions";
import { Button } from "../Button";

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

export const snackbar: React.RefObject<{
  show: () => void;
  hidden: () => void;
  setAutoHideDuration: React.Dispatch<React.SetStateAction<number>>;
  message: React.Dispatch<React.SetStateAction<string>>;
}> = React.createRef();

const Snackbar = forwardRef((_: any, ref: any) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [autoHideDuration, setAutoHideDuration] = React.useState(3000);

  const show = useCallback(() => {
    setOpen(true);
  }, []);

  const hidden = useCallback(() => {
    setOpen(false);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      show,
      hidden,
      setAutoHideDuration,
      message: setMessage,
    }),
    [hidden, show]
  );

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    // 点击了其他地方
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <MaterialSnackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      TransitionComponent={TransitionRight}
      action={
        <React.Fragment>
          <Button color="primary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
});

const MySnackbar = () => <Snackbar ref={snackbar} />;

export default MySnackbar;
