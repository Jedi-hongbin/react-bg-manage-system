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
  const Timer = useRef<{ timer: NodeJS.Timeout | null }>({ timer: null });

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
    const eImage = image.current;
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleClearTimeout, []);

  useEffect(() => {
    if (defaultSource) {
      drawDefaultImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSource]);

  useEffect(() => {
    if (provideSources.length) {
      log("start");
      autoRotate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provideSources]);

  const onMouseMove = useCallback(
    ({ clientX }) => {
      const eImage = image.current;
      const currentSourceIndex = Number(eImage.getAttribute(imageProperty));
      const nextIndex =
        clientX > dragOrigin.current.origin
          ? currentSourceIndex - 1
          : currentSourceIndex + 1;
      const shouldIndex =
        nextIndex <= provideSources.length && nextIndex >= 0
          ? nextIndex
          : nextIndex < 0
          ? provideSources.length
          : 0;
      toggleSource(shouldIndex);
      dragOrigin.current.origin = clientX;
    },
    [image, toggleSource, provideSources, dragOrigin, imageProperty]
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
