import { FC, ReactElement, useCallback } from "react";
import { FullScreenIcon as FullScreen, FullScreenExitIcon } from "./styled";
import useFullScreenAdaptive from "../../../hooks/useFullScreenAdaptive";
import Tooltip from "../../../components/UI/Tooltip";

const FullScreenIcon: FC = (): ReactElement => {
  const [
    isFullscreen,
    fullscreenName,
    exitFullscreenName,
  ] = useFullScreenAdaptive();

  const exitFullscreen = useCallback(() => {
    //@ts-ignore
    document[exitFullscreenName]();
  }, [exitFullscreenName]);

  const fullscreen = useCallback(async () => {
    //@ts-ignore
    document.documentElement[fullscreenName]();
  }, [fullscreenName]);

  return (
    <Tooltip title={isFullscreen ? "exit full screen" : "full screen"}>
      {isFullscreen ? (
        <FullScreenExitIcon onClick={exitFullscreen} />
      ) : (
        <FullScreen onClick={fullscreen} />
      )}
    </Tooltip>
  );
};

export default FullScreenIcon;
