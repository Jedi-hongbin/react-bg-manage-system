import { FC, ReactElement, useCallback, useState, useEffect } from "react";
import axios from "axios";
import { log } from "../../../utils/logger";
import DragImages from "./DragImages";

interface IProps {}
const defaultSource =
  "https://media.emeralds.com/stone/E1526/video360/E1526-video360-001-Medium.jpg?1";

const Emerald: FC<IProps> = (): ReactElement => {
  const [sources, setSources] = useState<string[]>([]);

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

  useEffect(() => {
    getSource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DragImages
      width={300}
      height={300}
      defaultSource={defaultSource}
      sources={sources}
    />
  );
};

export default Emerald;
