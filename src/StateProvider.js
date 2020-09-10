// Setup Data Layer
// We need this to track the basket

import { createContext } from "react";
import React, { ecreateContext, useContext, useReducer} from "react"

//This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext); 