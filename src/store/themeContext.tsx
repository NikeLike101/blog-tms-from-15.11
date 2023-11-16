import React, {PropsWithChildren, SetStateAction, useState} from "react";

export enum ThemeEnum {
    light='light',
    dark='dark'
}

// ThemeEnum.dark === 'dark'

type ThemeContextType = {
    theme: ThemeEnum
    setTheme: React.Dispatch<SetStateAction<ThemeEnum>>
}

export const ThemeContext = React.createContext<ThemeContextType>(
    {theme: ThemeEnum.light,
    setTheme: () => {}}
)

export const ThemeContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light)
    return <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
}
