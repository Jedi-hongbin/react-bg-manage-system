import { useState, useEffect, useMemo, useCallback } from "react";

type TUseFullScreenAdaptive = [
  isFullScreen: boolean,
  fullscreenName: string,
  exitFullscreenName: string
];

const useFullScreenAdaptive = (
  callback?: () => void
): TUseFullScreenAdaptive => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { type, fullscreenName, exitFullscreenName } = useMemo(() => {
    const {
      requestFullscreen,
      mozRequestFullScreen,
    }: any = document.documentElement;

    if (requestFullscreen) {
      return {
        type: "fullscreenchange",
        fullscreenName: "requestFullscreen",
        exitFullscreenName: "exitFullscreen",
      };
    }
    if (mozRequestFullScreen) {
      return {
        type: "mozfullscreenchange",
        fullscreenName: "mozRequestFullScreen",
        exitFullscreenName: "mozCancelFullScreen",
      };
    }
    return {
      type: "webkitfullscreenchange",
      fullscreenName: "webkitRequestFullScreen",
      exitFullscreenName: "webkitCancelFullScreen",
    };
  }, []);

  const handleFullScreenChange = useCallback(() => {
    setIsFullScreen((status) => !status);
    callback && callback();
  }, [callback]);

  useEffect(() => {
    document.addEventListener(type, handleFullScreenChange);

    return () => {
      document.removeEventListener(type, handleFullScreenChange);
    };
  }, [handleFullScreenChange, type]);

  return [isFullScreen, fullscreenName, exitFullscreenName];
};

export default useFullScreenAdaptive;
