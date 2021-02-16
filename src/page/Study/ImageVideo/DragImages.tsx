import {
  FC,
  ReactElement,
  useRef,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from "react";
import axios from "axios";
import { log } from "../../../utils/logger";

interface IProps {
  width?: number;
  height?: number;
}

const DragImages: FC<IProps> = ({
  width = 365,
  height = 365,
}): ReactElement => {
  const timeout = useMemo(() => 50, []);
  const imageProperty = useMemo(() => "sourceIndex", []);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [sources, setSources] = useState<string[]>([]);
  const image = useRef<HTMLImageElement>(new Image());
  const dragOrigin = useRef<{ origin: number }>({ origin: 0 });
  const Timer = useRef<{ timer: NodeJS.Timeout | null }>({ timer: null });

  const toggleSource = useCallback(
    (nextIndex: number) => {
      const eImage = image.current;
      eImage.setAttribute(imageProperty, nextIndex.toString());
      eImage.src = sources[nextIndex];
    },
    [sources, imageProperty]
  );

  const autoRotate = useCallback(
    (startIndex = 1): void => {
      const nextIndex = startIndex <= sources.length ? startIndex : 0;
      toggleSource(nextIndex);
      Timer.current.timer = setTimeout(() => {
        autoRotate(nextIndex + 1);
      }, timeout);
    },
    [sources, toggleSource, timeout]
  );

  const drawDefaultImage = useCallback(() => {
    const ctx = canvas.current!.getContext("2d");
    const imgSrc =
      "https://media.emeralds.com/stone/E1526/video360/E1526-video360-001-Medium.jpg?1";
    const eImage = image.current;
    eImage.onload = () => {
      ctx!.drawImage(eImage, 0, 0, width, height);
    };
    eImage.setAttribute(imageProperty, "0");
    eImage.src = imgSrc;
  }, [height, imageProperty, width]);

  const handleClearTimeout = useCallback(() => {
    clearTimeout(Timer.current.timer as NodeJS.Timeout);
    Timer.current.timer = null;
  }, []);

  useEffect(() => {
    drawDefaultImage();
    getSource();

    return handleClearTimeout;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sources.length) {
      log("start");
      autoRotate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources]);

  const getSource = useCallback(async () => {
    let i = 1;
    const source: string[] = [];

    while (i <= 261) {
      const url = `https://media.emeralds.com/stone/E1526/video360/E1526-video360-${i
        .toString()
        .padStart(3, "0")}-Medium.jpg?1`;
      await axios
        .get(url, { responseType: "blob" })
        .then((response: any) => {
          const imgSrc = window.URL.createObjectURL(response.data);
          source.push(imgSrc);
        })
        .catch(() => {});
      i++;
    }
    if (source.length) {
      setSources(() => source);
      log("source length:", source.length);
    }
  }, []);

  const onMouseMove = useCallback(
    ({ clientX }) => {
      const eImage = image.current;
      const currentSourceIndex = Number(eImage.getAttribute(imageProperty));
      const nextIndex =
        clientX > dragOrigin.current.origin
          ? currentSourceIndex - 1
          : currentSourceIndex + 1;
      const shouldIndex =
        nextIndex <= sources.length && nextIndex >= 0
          ? nextIndex
          : nextIndex < 0
          ? sources.length
          : 0;
      toggleSource(shouldIndex);
      dragOrigin.current.origin = clientX;
    },
    [image, toggleSource, sources, dragOrigin, imageProperty]
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
