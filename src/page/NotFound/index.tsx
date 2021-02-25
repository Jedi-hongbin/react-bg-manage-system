import { FC, ReactElement } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

interface IProps {}

const NotFound: FC<IProps> = (): ReactElement => {
  const [a, setA] = useLocalStorage("a", "not have jwt!");

  return (
    <div>
      <div>Not Found</div>
      <p>{a}</p>
      <button
        onClick={() => {
          setA((prev: string) => prev + "123");
        }}
      >
        setA
      </button>
    </div>
  );
};
export default NotFound;
