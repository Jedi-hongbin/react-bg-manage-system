import React, { FC, ReactElement, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { ContentContainer } from "../../constants/LayoutStyled";
import { log } from "../../utils/logger";
import { v1 as uuidV1 } from "uuid";

const Palette: FC = (): ReactElement => {
  const {
    theme: { palette },
  } = useSelector((state: any) => state.theme);
  log(palette);
  const filterItem = useMemo(
    () => [
      "type",
      "contrastThreshold",
      "getContrastText",
      "augmentColor",
      "tonalOffset",
      "divider",
    ],
    []
  );

  const payloadPalette: any = useMemo(
    () =>
      Object.entries(palette)
        .sort()
        .filter((item) => (!filterItem.includes(item[0]) ? item : false)),
    [palette, filterItem]
  );

  const paletteItem = useCallback((color: any) => {
    const [name, value] = color;
    return (
      <React.Fragment key={uuidV1()}>
        <div
          style={{
            backgroundColor: value,
            width: 100,
            height: 50,
            borderRadius: 5,
            margin: 2,
          }}
        />
        {name + ":" + value}
      </React.Fragment>
    );
  }, []);

  const renderPalette = useCallback(
    (plan: any) => {
      const [title, props] = plan;
      return (
        <div
          key={uuidV1()}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            maxWidth: 250,
          }}
        >
          <strong>{title}</strong>
          {Object.entries(props)?.map(paletteItem) ?? null}
        </div>
      );
    },
    [paletteItem]
  );

  const PaletteMemo = useMemo(() => payloadPalette.map(renderPalette), [
    payloadPalette,
    renderPalette,
  ]);

  return (
    <ContentContainer
      color="paper"
      justify="space-between"
      Wrap
      container
      style={{
        overflow: "scroll",
      }}
    >
      {PaletteMemo}
    </ContentContainer>
  );
};
export default Palette;
