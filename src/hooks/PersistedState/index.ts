import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function usePersistedState<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(defaultValue)

    useEffect(() => {
        const value = get()
        if (value !== null) setValue(value)
    }, [])

    useEffect(() => {
        save(key, value)
    }, [key, value])

    function get(): T | null {
        const value = window.localStorage.getItem(key)
        if (value !== null) {
            return JSON.parse(value)
        }
        return null
    }

    function save(key: string, value: T) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [value, setValue]
}