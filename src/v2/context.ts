import { createContext, useContext } from 'react'

const context = createContext({})


export const usePoc = () => {
    const hook = useContext(context);
    return hook;
}

export const PocProvider = context.Provider