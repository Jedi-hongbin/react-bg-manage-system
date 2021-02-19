import { FC, ReactElement, useState, useCallback } from "react";
import { FullScreenIcon as FullScreen, FullScreenExitIcon } from "./styled";

interface IProps {}

const FullScreenIcon: FC<IProps> = (): ReactElement => {
  const [fullScreen, setFullScreen] = useState(false);

  const requestFullScreen = useCallback(() => {
    var de: any = document.documentElement;
    if (de.requestFullscreen) {
      de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
      de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
      de.webkitRequestFullScreen();
    }
    setFullScreen(true);
  }, []);

  const requestExitFullScreen = useCallback(() => {
    var de: any = document;
    if (de.exitFullscreen) {
      de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
      de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
      de.webkitCancelFullScreen();
    }
    setFullScreen(false);
  }, []);

  return fullScreen ? (
    <FullScreenExitIcon onClick={requestExitFullScreen} />
  ) : (
    <FullScreen onClick={requestFullScreen} />
  );
};

export default FullScreenIcon;
