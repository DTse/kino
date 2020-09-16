import React from "react";
import _ from "lodash";

import Number from "./Number";

const Tab = (props) => {
    return (
        <div className="app__tab__body">
            {_.times(49, (n) => (
                <Number key={n} number={n} {...props} />
            ))}
        </div>
    );
};

export default Tab;