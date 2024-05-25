import { createContext, createElement, useContext, useState } from "react";

export const TotalContext = createContext(null);

export const useTotal = () => {
    return useContext(TotalContext);
};

export const TotalProvider = (props) => {
    const [total, setTotal] = useState(0);

    return (
        <TotalContext.Provider value={{ total, setTotal }}>
            {props.children}
        </TotalContext.Provider>
    );
};
