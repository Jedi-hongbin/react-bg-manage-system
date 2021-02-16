import {
  FC,
  ReactElement,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import axios from "axios";
import { log } from "../../../utils/logger";
import { ContentContainer } from "../../../constants/LayoutStyled";

const timeout = 50;
let Timer: NodeJS.Timeout | null = null;

const ImageVideo: FC = (): ReactElement => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [sources, setSources] = useState<string[]>([]);
  const [currentSourcesIndex, setCurrentSourcesIndex] = useState<number>(0);
  const image = useRef<HTMLImageElement>(new Image());

  const toggleSource = useCallback(
    (nextIndex = 1): void => {
      const sourceIndex = nextIndex <= sources.length ? nextIndex : 0;
      log("nextIndex:", sourceIndex);
      const eImage = image.current;
      eImage.src = sources[sourceIndex];
      setCurrentSourcesIndex(() => sourceIndex);
      Timer = setTimeout(() => {
        toggleSource(sourceIndex + 1);
      }, timeout);
    },
    [sources]
  );

  const drawDefaultImage = useCallback(() => {
    const ctx = canvas.current!.getContext("2d");
    const imgSrc =
      "https://media.emeralds.com/stone/E1526/video360/E1526-video360-001-Medium.jpg?1";
    const eImage = image.current;
    eImage.onload = () => {
      ctx!.drawImage(eImage, 0, 0, 365, 365);
    };
    eImage.src = imgSrc;
  }, []);

  const handleClearTimeout = useCallback(
    () => () => {
      clearTimeout(Timer as NodeJS.Timeout);
    },
    []
  );

  useEffect(() => {
    drawDefaultImage();
    getSource();

    return handleClearTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sources.length) {
      log("start");
      toggleSource();
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

  const onMouseMove = useCallback(({ clientX }) => {
    log("onMouseMove:", clientX);
  }, []);

  const onMouseDown = useCallback(() => {
    canvas.current!.addEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  const onMouseUp = useCallback(() => {
    canvas.current!.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <ContentContainer>
      <canvas
        ref={canvas}
        width="365"
        height="365"
        style={{ cursor: "ew-resize" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
    </ContentContainer>
  );
};

export default ImageVideo;
