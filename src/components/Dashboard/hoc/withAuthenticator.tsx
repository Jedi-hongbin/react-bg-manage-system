import React, { useState } from "react";

type Props = (Component: React.FC<any>) => React.FC<any>;

const withAuthenticator: Props = (Component) => () => {
  const [status, setStatus] = useState(false);

  return (
    <div>
      {status ? (
        <Component />
      ) : (
        <>
          <input placeholder="username" />
          <input placeholder="password" type="password" />
          <button
            onClick={() => {
              setStatus(() => true);
            }}
          >
            login
          </button>
        </>
      )}
    </div>
  );
};

export default withAuthenticator;
