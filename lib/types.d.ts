import React from "react";
import { PocProps as PropsV1 } from './v1/types';
import { PocProps as PropsV2 } from './v2/types';
declare type Version = 'v1' | 'v2';
export declare type VersionsProps = PropsV1 | PropsV2;
export declare type VersionedProps = {
    version?: Version;
};
export declare type ComponentType = React.FC<PropsV1 & VersionedProps> | React.FC<PropsV1 & VersionedProps>;
export declare type ComponentVersionMap = {
    [version in Version]: React.LazyExoticComponent<React.FC<VersionsProps>>;
};
export {};
//# sourceMappingURL=types.d.ts.map