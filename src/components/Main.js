import React from "react";

import { useAppContext } from "../context/AppContext";

import Board from "./Board";

import "../styles/main.css";

const Main = () => {
    const { state, dispatch } = useAppContext();

    const reducer = (accumulator, currentValue, currentIndex) => accumulator && state.boards[currentIndex].length === currentValue;
    var ready = state.systems.reduce(reducer);

    const handleReset = () => dispatch({ type: "reset" });
    const handlePickAll = () => {
        state.systems.forEach((system, index)=>{
            var tempArr = []
            while(tempArr.length < system){
                var r = Math.floor(Math.random() * 49) + 1;
                if(tempArr.indexOf(r) === -1) tempArr.push(r);
            }
            dispatch({ type: "setBoard", selected: index, value: [...tempArr] });
        });
    };

    return (
        <main className="app__main">
            <div className="app__main__header">
                <div className="app__main__title">Pick your numbers</div>
                <div className="app__main__quick" onClick={handlePickAll}>
                    Quick Pick All
                </div>
                <div className="app__main__reset" onClick={handleReset}>
                    Clear All
                </div>
            </div>
            <div className="app__main__wrapper">
                <Board dispatch={dispatch} selected={state.selected} system={state.systems[state.selected]} systems={state.systems} numbers={state.boards[state.selected]} boards={state.boards}/>
            </div>
            <div className="app__main__footer">
                <div className="app__main__price">
                    <div className="app__main__price--board">Board Price: ${state.prices[state.selected]}</div>
                    <div className="app__main__price--all">Total Price: ${state.prices.reduce((a, b) => a + b)}</div>
                </div>
                <div className={`app__main__play${ready ? " valid" : ""}`} onClick={handleReset}>
                    Play All
                </div>
            </div>
        </main>
    );
};

export default Main;
