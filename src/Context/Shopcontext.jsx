import React, { createContext } from 'react';
import all_product from "../Components/Assets/all_product";


// export const shopContext = createContext(null);
export const shopContext = createContext(all_product);


const shopContextProvider = (props) => {
    const contextValue = { all_product };

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>

    )
}

export default shopContextProvider;