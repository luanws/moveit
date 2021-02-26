import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Cookies from 'js-cookie'

export default function useCookieState<T>(
    key: string,
    defaultValue: T,
    recoverData: boolean = true
): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(defaultValue)

    useEffect(() => {
        if (recoverData) {
            const json = Cookies.get(key)
            if (json !== undefined) {
                const value = JSON.parse(json)
                setValue(value)
            }
        }
    }, [])

    useEffect(() => {
        Cookies.set(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}