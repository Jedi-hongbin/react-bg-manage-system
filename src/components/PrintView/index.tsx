import React from "react";
import print from "print-js";
import { Button } from "@material-ui/core";

interface Props {}

const PrintView: React.FC<Props> = () => {
  return (
    <>
      <div id="printView">
        <div
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: "#552",
            padding: 5,
          }}
        >
          haha
        </div>
      </div>
      <Button
        onClick={() => {
          // print("printView", "html");
          print({
            printable: "printView",
            type: "html",
            header: "this is bold header",
            headerStyle: "font-weight: bold",
            targetStyle: "[*]",
            documentTitle: "awesome printJS Title",
            maxWidth: 200,
            onLoadingStart: () => {
              console.log("print start");
            },
            onLoadingEnd: () => {
              console.log("print end");
            },
            onError: (err) => {
              console.error("print", err);
            },
          });
        }}
        size="large"
        variant="outlined"
        fullWidth
        color="secondary"
      >
        print
      </Button>
    </>
  );
};
export default PrintView;
