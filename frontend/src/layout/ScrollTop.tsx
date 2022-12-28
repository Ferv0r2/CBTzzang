import React, { FC } from "react";
import clsx from "clsx";

/* Component */
import { AutoImage } from "utils";

interface Props {
  active: boolean;
}

const ScrollTop: FC<Props> = ({ active }) => {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={clsx(
        active ? "ease-out-in" : "opacity-0 ease-in-out",
        "fixed bottom-6 right-6 w-10 h-10 rounded-full transition duration-300 bg-white hover:bg-zinc-300 z-10"
      )}
    >
      <AutoImage src="/images/onTop.png" alt="top" className="p-2" />
    </button>
  );
};

export { ScrollTop };
