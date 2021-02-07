import React, { FC, ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import { ContentContainer } from "../../constants/LayoutStyled";
import { log } from "../../utils/logger";

const Palette: FC = (): ReactElement => {
  const {
    theme: { palette },
  } = useSelector((state: any) => state.theme);

  const payloadPalette = useMemo(() => {
    log("palette: ", palette);
    return palette;
  }, [palette]);

  return (
    <ContentContainer
      style={{
        backgroundColor: "#faa",
        flexWrap: "wrap",
        overflow: "scroll",
      }}
    >
      {Object.entries(payloadPalette).map((plan: any) => {
        const [title, props] = plan;
        return (
          <div
            key=""
            style={{
              border: "1px solid #51f",
              display: "inline-flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <strong>{title}</strong>
            {Object.entries(props)?.map((color: any) => {
              const [name, value] = color;
              return (
                <>
                  <div
                    style={{
                      backgroundColor: value,
                      width: 100,
                      height: 50,
                      borderRadius: 5,
                      margin: 2,
                      display: "inline",
                    }}
                  />
                  {name + ":" + value}
                </>
              );
            }) ?? null}
          </div>
        );
      })}
    </ContentContainer>
  );
};
export default Palette;
