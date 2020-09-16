import React from "react";

const TabFooter = ({ selected, dispatch, system }) => {
    const handleClick = (e) => {
        dispatch({ type: "setSystem", value: parseInt(e.target.id), selected: selected });
    };

    const handlePick = () => {
        var tempArr = [];
        while (tempArr.length < system) {
            var r = Math.floor(Math.random() * 49) + 1;
            if (tempArr.indexOf(r) === -1) tempArr.push(r);
        }
        dispatch({ type: "setBoard", selected: selected, value: [...tempArr] });
    };

    const handleReset = () => dispatch({ type: "clearTab", selected: selected });

    return (
        <div className="app__tab__footer">
            <span className="app__tab__footer__title">System</span>
            <span className="app__tab__footer__systems">
                <span id="6" onClick={handleClick} className={`app__tab__footer__systems__system${system === 6 ? " selected" : ""}`}>
                    6
                </span>
                <span id="7" onClick={handleClick} className={`app__tab__footer__systems__system${system === 7 ? " selected" : ""}`}>
                    7
                </span>
                <span id="8" onClick={handleClick} className={`app__tab__footer__systems__system${system === 8 ? " selected" : ""}`}>
                    8
                </span>
                <span id="9" onClick={handleClick} className={`app__tab__footer__systems__system${system === 9 ? " selected" : ""}`}>
                    9
                </span>
            </span>
            <span className="app__main__quick" onClick={handlePick}>
                Quick Pick
            </span>
            <span className="app__main__reset" onClick={handleReset}>
                Clear
            </span>
        </div>
    );
};

export default TabFooter;
