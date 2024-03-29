import React, { FC } from "react";
import Image from "next/image";

const Loading: FC = () => {
  return (
    <div className="relative flex w-7 h-7 animate-spin">
      <Image
        layout="fill"
        src="/images/loading.png"
        className="Loading__spinner"
        alt="loading"
      />
    </div>
  );
};

export { Loading };
