import React from "react";

import plus from "../assets/plus.svg";

const TabHeader = ({ selected, dispatch, boards, system }) => {
    const handleClick = (e) => {
        dispatch({ type: "setSelected", value: parseInt(e.target.id) });
    };
    const handleAdd = () => {
        dispatch({ type: "addTab" });
    };
    return (
        <div className="app__tabs__header">
            {boards.map((value, index) => (
                <span
                    key={index}
                    onClick={handleClick}
                    id={index}
                    className={`app__tabs__tab${index === selected ? " selected" : ""}${
                        value.length === 0 ? " empty" : value.length < system ? " invalid" : " valid"
                    }`}
                >
                    {index + 1}
                </span>
            ))}
            {boards.length < 6 && (
                <span onClick={handleAdd} className="app__tabs__add">
                    <img src={plus} alt="add" />
                </span>
            )}
        </div>
    );
};

export default TabHeader;
