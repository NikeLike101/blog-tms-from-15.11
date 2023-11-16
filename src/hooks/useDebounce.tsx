import {useEffect, useState} from "react";


export const useDebounce = (value:string) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [value])

    return debouncedValue
}