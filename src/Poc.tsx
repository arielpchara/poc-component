import React from "react";
import { ComponentType } from "./types";
import { VersionGateway } from "./VersionGateway";

export const Poc: ComponentType = ({ version, ...props }) => {
  return <VersionGateway {...props} version={version} />;
};
