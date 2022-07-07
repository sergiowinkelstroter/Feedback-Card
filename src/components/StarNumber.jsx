import classNames from "classnames";
import { useState } from "react";

export function StarNumber(props) {
  const [active, setActive] = useState(false);

  function handleStarNumber() {
    setActive(!active);
  }

  return (
    <button
      onClick={handleStarNumber}
      className={classNames(
        "w-[40px] h-[40px] rounded-full text-gray-400 hover:bg-orange-600 hover:text-white transition-colors",
        {
          "bg-gray-600": !active,
          "bg-orange-600 ": active,
          "text-gray-50 ": active,
        }
      )}
    >
      {props.value}
    </button>
  );
}
