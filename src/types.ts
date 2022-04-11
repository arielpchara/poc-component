import React from "react"
import { PocProps as PropsV1 } from './v1/types'
import { PocProps as PropsV2 } from './v2/types'

type Version = 'v1' | 'v2' 

export type VersionsProps = PropsV1 | PropsV2

export type VersionedProps = {
    version: Version & string
}

// export type PocProps = ( PropsV1 & VersionedProps ) | (PropsV1 & VersionedProps)

export type ComponentType = React.FC<PropsV1 & VersionedProps> | React.FC<PropsV1 & VersionedProps>

export type ComponentVersionMap = {
    [version in Version]: React.LazyExoticComponent<React.FC<VersionsProps>>
}
