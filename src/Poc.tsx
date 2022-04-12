import React from "react";
import { PocProps } from "./types";

export const Poc: React.FC<PocProps> = ({name}) => {
  return (
    <>Hello {name}</>
  )
};
