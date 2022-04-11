import React from "react";
import { ComponentVersionMap, ComponentType } from "./types";

const versionsMap: ComponentVersionMap = {
    v1: React.lazy(() => import('./v1')),
    v2: React.lazy(() => import('./v2'))
}

export const VersionGateway: ComponentType = (props) => {
    const VersionedComponent = versionsMap[props.version] || versionsMap.v2
    return <React.Suspense fallback="loading">
        <VersionedComponent {...props} />
    </React.Suspense>
}