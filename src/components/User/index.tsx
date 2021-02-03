import React from "react";

interface Props {}

const User: React.FC<Props> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#Fa0",
        position: "absolute",
      }}
    >
      {" "}
      user{" "}
    </div>
  );
};
export default User;
