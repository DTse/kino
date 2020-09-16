import React from "react";
import _ from "lodash";

const Number = ({ number, numbers, dispatch, selected, system }) => {
    var newArray = [...numbers];
    const handleClick = (e) => {
        if (_.includes(numbers, parseInt(e.target.id))) {
            newArray = [...numbers.filter((a) => a !== parseInt(e.target.id))];
        } else {
            newArray = [...numbers, parseInt(e.target.id)];
        }
        dispatch({ type: "setBoard", selected: selected, value: [...newArray] });
    };
    return (
        <span id={number} className={`app__tab__number${_.includes(numbers, number) ? " selected" : ""}`} onClick={handleClick}>
            {number + 1}
        </span>
    );
};

export default Number;
