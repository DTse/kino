import React from "react";

import { useAppContext } from "../context/AppContext";

import Tab from "./Tab";
import TabHeader from "./TabHeader";
import TabFooter from "./TabFooter";

import "../styles/main.css";

const Main = () => {
    const { state, dispatch } = useAppContext();

    return (
        <main className="app__main">
            <div className="app__main__header">
                <div className="app__main__title">Pick your numbers</div>
                <div className="app__main__reset" onClick={() => dispatch({ type: "reset" })}>
                    Clear All
                </div>
            </div>
            <div className="app__main__wrapper">
                <TabHeader dispatch={dispatch} selected={state.selected} boards={state.boards} />
                <Tab numbers={state.boards[state.selected]} dispatch={dispatch} selected={state.selected} />
                <TabFooter selected={state.selected} dispatch={dispatch} system={state.systems[state.selected]} />
            </div>
            <div className="app__main__footer">
                <div className="app__main__price">
                    <div className="app__main__price--board">Board Price: ${state.prices[state.selected]}</div>
                    <div className="app__main__price--all">Total Price: ${state.prices.reduce((a, b) => a + b)}</div>
                </div>
                <div className="app__main__play">Play All</div>
            </div>
        </main>
    );
};

export default Main;
