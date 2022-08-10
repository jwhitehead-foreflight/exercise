import React, {createContext, useContext, useState} from "react";

const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({ children }) => {
    const [airport, setAirport] = useState('');
    const newAirport = (value) => {
        setAirport(value);
    }
    return <Provider value={{airport, newAirport}}>{children}</Provider>;

}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };


