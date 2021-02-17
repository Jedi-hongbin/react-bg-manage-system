import {
  FC,
  ReactElement,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";
import DragImages from "./DragImages";

const defaultSource =
  "https://media.emeralds.com/stone/E122/video360/E122-video360-001-Medium.jpg?1";

const Emerald2: FC = (): ReactElement => {
  const [sources, setSources] = useState<HTMLImageElement[]>([]);

  const getSource = useCallback(async () => {
    let i = 1;
    const source: HTMLImageElement[] = [];

    while (i <= 219) {
      const url = `https://media.emeralds.com/stone/E122/video360/E122-video360-${i
        .toString()
        .padStart(3, "0")}-Medium.jpg?1`;
      await axios
        .get(url, { responseType: "blob" })
        .then((response: any) => {
          const image = new Image();
          const imgSrc = window.URL.createObjectURL(response.data);
          image.src = imgSrc;
          source.push(image);
        })
        .catch(() => {});
      i++;
    }
    if (source.length) {
      setSources(() => source);
    }
  }, []);

  useEffect(() => {
    getSource();
  }, [getSource]);

  const DragImagesMemo = useMemo(
    () => (
      <DragImages
        width={300}
        height={300}
        defaultSource={defaultSource}
        sources={sources}
        onStart={() => {
          // eslint-disable-next-line no-console
          console.log("start", sources.length);
        }}
      />
    ),
    [sources]
  );

  return <>{DragImagesMemo}</>;
};

export default Emerald2;
