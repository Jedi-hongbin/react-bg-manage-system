import {
  FC,
  ReactElement,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

interface IProps {
  width?: number;
  height?: number;
  sources: Array<HTMLImageElement>;
  defaultSource: string;
  onStart?: () => void;
}

interface ITimer {
  timer: NodeJS.Timeout | null;
}

const DragImages: FC<IProps> = ({
  width = 365,
  height = 365,
  sources,
  defaultSource,
  onStart,
}): ReactElement => {
  const timeout = useMemo(() => 50, []);
  const sourceProperty = useMemo(() => "sourceProperty", []);
  const canvas = useRef<HTMLCanvasElement>(null);
  const defaultImage = useRef<HTMLImageElement>(new Image());
  const dragOrigin = useRef<{ origin: number }>({ origin: 0 }); // 记录拖拽的点坐标
  const Timer = useRef<ITimer>({ timer: null });

  const toggleSource = useCallback(
    (nextIndex: number) => {
      const ctx = canvas.current!.getContext("2d");
      const imageSource = sources[nextIndex];
      ctx!.drawImage(imageSource, 0, 0, width, height);
      // 将当前显示图片的位置放到已经不显示的默认图片上面，为拖动操作指明起始位置
      defaultImage.current.setAttribute(sourceProperty, nextIndex.toString());
    },
    [sources, width, height, defaultImage, sourceProperty, canvas]
  );

  const autoRotate = useCallback(
    (startIndex = 0): void => {
      const nextIndex = startIndex < sources.length ? startIndex : 0;
      toggleSource(nextIndex);
      Timer.current.timer = setTimeout(() => {
        autoRotate(nextIndex + 1);
      }, timeout);
    },
    [sources, toggleSource, timeout]
  );

  const drawDefaultImage = useCallback(() => {
    const ctx = canvas.current!.getContext("2d");
    const eImage: HTMLImageElement = defaultImage.current;
    eImage.onload = () => {
      ctx!.drawImage(eImage, 0, 0, width, height);
    };
    eImage.setAttribute(sourceProperty, "0");
    eImage.src = defaultSource;
  }, [height, sourceProperty, width, defaultSource]);

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
    if (sources.length) {
      onStart && onStart();
      autoRotate();
    }
  }, [sources, autoRotate, onStart]);

  const onMouseMove = useCallback(
    ({ clientX }) => {
      const currentSourceIndex = defaultImage.current.getAttribute(
        sourceProperty
      );
      const nextSourcesIndex = computedNextSourcesIndex(
        clientX,
        dragOrigin.current.origin,
        Number(currentSourceIndex),
        sources.length
      );
      toggleSource(nextSourcesIndex);
      dragOrigin.current.origin = clientX;
    },
    [sourceProperty, sources, toggleSource]
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
      const sourceIndex = defaultImage.current.getAttribute(sourceProperty);
      autoRotate(Number(sourceIndex) + 1);
    }
  }, [onMouseMove, canvas, defaultImage, autoRotate, sourceProperty, Timer]);

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
  const allowValue = nextIndex < sourcesLength && nextIndex >= 0;

  return allowValue ? nextIndex : nextIndex < 0 ? sourcesLength - 1 : 0;

  // if (allowValue) {
  //   return nextIndex;
  // }
  // if (nextIndex < 0) {
  //   return sourcesLength - 1;
  // }
  // return 0;
}
