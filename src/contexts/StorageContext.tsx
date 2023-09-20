import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from 'react'

export interface Storage {
    [key: string]: unknown
}

interface TypeContext {
    storage: Storage[]
    setStorage: Dispatch<SetStateAction<Storage[]>>
}

const initial: TypeContext = {
    storage: [],
    setStorage: () => {},
}

export const StorageContext = createContext(initial)

const StorageProvider: FC<{ children: ReactNode }> = (props) => {
    const [storage, setStorage] = useState<Storage[]>([])

    return (
        <StorageContext.Provider value={{ setStorage, storage }}>
            {props.children}
        </StorageContext.Provider>
    )
}

export default StorageProvider
