import {
  FC,
  ReactElement,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { log } from "../../../utils/logger";

interface IProps {
  width?: number;
  height?: number;
  sources: Array<string>;
  defaultSource: string;
}

interface ITimer {
  timer: NodeJS.Timeout | null;
}

const DragImages: FC<IProps> = ({
  width = 365,
  height = 365,
  sources,
  defaultSource,
}): ReactElement => {
  const timeout = useMemo(() => 50, []);
  const imageProperty = useMemo(() => "sourceIndex", []);
  const canvas = useRef<HTMLCanvasElement>(null);
  const provideSources = useMemo(() => sources, [sources]);
  const image = useRef<HTMLImageElement>(new Image());
  const dragOrigin = useRef<{ origin: number }>({ origin: 0 });
  const Timer = useRef<ITimer>({ timer: null });

  const toggleSource = useCallback(
    (nextIndex: number) => {
      const eImage = image.current;
      eImage.setAttribute(imageProperty, nextIndex.toString());
      eImage.src = provideSources[nextIndex];
    },
    [provideSources, imageProperty]
  );

  const autoRotate = useCallback(
    (startIndex = 1): void => {
      const nextIndex = startIndex <= provideSources.length ? startIndex : 0;
      toggleSource(nextIndex);
      Timer.current.timer = setTimeout(() => {
        autoRotate(nextIndex + 1);
      }, timeout);
    },
    [provideSources, toggleSource, timeout]
  );

  const drawDefaultImage = useCallback(() => {
    const ctx = canvas.current!.getContext("2d");
    const eImage: CanvasImageSource = image.current;
    eImage.onload = () => {
      ctx!.drawImage(eImage, 0, 0, width, height);
    };
    eImage.setAttribute(imageProperty, "0");
    eImage.src = defaultSource;
  }, [height, imageProperty, width, defaultSource]);

  const handleClearTimeout = useCallback(() => {
    clearTimeout(Timer.current.timer as NodeJS.Timeout);
    Timer.current.timer = null;
  }, []);

  useEffect(() => handleClearTimeout, [handleClearTimeout]);

  useEffect(() => {
    if (defaultSource) {
      drawDefaultImage();
    }
  }, [defaultSource, drawDefaultImage]);

  useEffect(() => {
    if (provideSources.length) {
      log("start");
      autoRotate();
    }
  }, [provideSources, autoRotate]);

  const onMouseMove = useCallback(
    ({ clientX }) => {
      const currentSourceIndex = image.current.getAttribute(imageProperty);
      const nextSourcesIndex = computedNextSourcesIndex(
        clientX,
        dragOrigin.current.origin,
        Number(currentSourceIndex),
        provideSources.length
      );
      toggleSource(nextSourcesIndex);
      dragOrigin.current.origin = clientX;
    },
    [imageProperty, provideSources, toggleSource]
  );

  const onMouseDown = useCallback(
    ({ clientX }) => {
      dragOrigin.current.origin = clientX;
      handleClearTimeout();
      canvas.current!.addEventListener("mousemove", onMouseMove);
    },
    [onMouseMove, canvas, handleClearTimeout]
  );

  const cancelDrag = useCallback(() => {
    if (!Timer.current.timer) {
      canvas.current!.removeEventListener("mousemove", onMouseMove);
      const sourceIndex = image.current.getAttribute(imageProperty);
      autoRotate(Number(sourceIndex) + 1);
    }
  }, [onMouseMove, canvas, image, autoRotate, imageProperty, Timer]);

  return (
    <canvas
      ref={canvas}
      width={width}
      height={height}
      style={{ cursor: "ew-resize" }}
      onMouseDown={onMouseDown}
      onMouseUp={cancelDrag}
      onMouseLeave={cancelDrag}
    />
  );
};

export default DragImages;

function computedNextSourcesIndex(
  clientX: number,
  prevClientX: number,
  currentSourceIndex: number,
  sourcesLength: number
) {
  const nextIndex =
    clientX > prevClientX ? currentSourceIndex - 1 : currentSourceIndex + 1;
  const allowValue = nextIndex <= sourcesLength && nextIndex >= 0;

  return allowValue ? nextIndex : nextIndex < 0 ? sourcesLength : 0;

  // if (allowValue) {
  //   return nextIndex;
  // }
  // if (nextIndex < 0) {
  //   return sourcesLength;
  // }
  // return 0;
}
