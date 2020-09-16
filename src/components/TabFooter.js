import React from "react";

const TabFooter = ({ selected, dispatch, system }) => {
    const handleClick = (e)=> {
        var price = 1;
        for(var i = parseInt(e.target.id); i>=6;i--){
            price *= i;
        }

        dispatch({ type: "setPrice", value: price/6, selected: selected });
        dispatch({ type: "setSystem", value: parseInt(e.target.id), selected: selected });
    }
    return (
        <div className="app__tab__footer">
            <span className="app__tab__footer__title">System</span>
            <span className="app__tab__footer__systems">
                <span id="6" onClick={handleClick} className={`app__tab__footer__systems__system${system === 6 ? ' selected': ''}`}>6</span>
                <span id="7" onClick={handleClick} className={`app__tab__footer__systems__system${system === 7 ? ' selected': ''}`}>7</span>
                <span id="8" onClick={handleClick} className={`app__tab__footer__systems__system${system === 8 ? ' selected': ''}`}>8</span>
                <span id="9" onClick={handleClick} className={`app__tab__footer__systems__system${system === 9 ? ' selected': ''}`}>9</span>
            </span>
            <span className="app__main__reset" style={{marginLeft: "auto"}} onClick={()=>dispatch({type: 'clearTab', selected: selected})}>Clear</span>
        </div>
    );
};

export default TabFooter;
