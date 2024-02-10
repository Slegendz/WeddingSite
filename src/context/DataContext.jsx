import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [showLightbox, setShowLightbox] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <DataContext.Provider value={{
            showLightbox, setShowLightbox, index, setIndex
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;