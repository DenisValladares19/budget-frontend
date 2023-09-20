import { Storage, StorageContext } from '@contexts/StorageContext'
import { PREFIX_STORAGE } from '@helpers/Constants.utils'
import { useContext, useEffect, useState } from 'react'

type typeReturn<T> = [
    T | undefined,
    (key: string, data: T) => void,
    (key: string) => void,
    () => void,
]

function useStorage<T = unknown>(key?: string): typeReturn<T> {
    const { storage, setStorage } = useContext(StorageContext)
    const [value, setValue] = useState<T>()

    const save = (key: string, data: T): void => {
        const saveKey = `${PREFIX_STORAGE}${key}`
        localStorage.setItem(saveKey, JSON.stringify(data))
        storage.push({ [saveKey]: value })
    }

    const load = () => {
        const keys = Object.keys(localStorage)
        let result: Storage[] = []

        keys.forEach((k) => {
            const val = localStorage.getItem(k)
            result = [...result, { [k]: JSON.parse(val || '') }]
        })

        if (JSON.stringify(result) === JSON.stringify(storage)) return
        setStorage(result || [])
    }

    const deleteItem = (key: string) => {
        const findKey = `${PREFIX_STORAGE}${key}`
        localStorage.removeItem(findKey)
        const result = storage.filter((s) => Object.keys(s)[0] !== findKey)
        setStorage(result)
    }

    const clear = () => {
        localStorage.clear()
        setStorage([])
    }

    useEffect(() => {
        if (!key) return
        if (!storage || storage.length === 0) {
            load()
            return
        }
        const findKey = `${PREFIX_STORAGE}${key}`

        console.log(findKey, storage)

        storage.forEach((s) => {
            const [key, data] = Object.entries(s)[0]

            if (key === findKey) {
                setValue(data as T)
            }
        })
    }, [key, storage])

    return [value, save, deleteItem, clear]
}

export default useStorage
