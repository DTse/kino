import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext(null);

const useAppContext = () => useContext(AppContext);

/**
 * Initial app statee.
 * @return {object}
 **/
let initialState = {
    boards:  [[], [], []],
    prices:  [0, 0, 0],
    systems: [6, 6, 6],
    selected: 0
};

/**
 * useReducer returns a callback  that updates the state.
 * @param {string} state
 * @param {object} action
 * @return {any}
 **/

let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setBoard":
            var newBoard = [...state.boards];
            newBoard[action.selected] = [...action.value];
            return { ...state, boards: [...newBoard] };
        case "setPrice":
            var newPrice = [...state.prices];
            newPrice[action.selected] = action.value;
            return { ...state, prices: [...newPrice] };
        case "setSystem":
            var newSystem = [...state.systems];
            newSystem[action.selected] = action.value;
            return { ...state, systems: [...newSystem] };
        case "setSelected":
            return { ...state, selected: action.value };
        case "clearTab":
            var newState = {...state};
            newState.boards[action.selected] = [];
            newState.prices[action.selected] = 0;
            newState.systems[action.selected] = 6;
            return { ...newState };
        case "addTab":
            var addTab = {...state};
            addTab.boards  = [...addTab.boards ,[]];
            addTab.prices  = [...addTab.prices , 0];
            addTab.systems = [...addTab.systems, 6];
            return { ...addTab };
        default:
            return state;
    }
};

/**
 * Context provider.
 * @param {object} props
 * @return {any}
 **/
const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider, useAppContext };
