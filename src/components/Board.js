import React from "react";

import Tab from "./Tab";
import TabHeader from "./TabHeader";
import TabFooter from "./TabFooter";

const Board = (props) => {
    return (
        <>
            <TabHeader {...props} />
            <Tab {...props} />
            <TabFooter {...props} />
        </>
    );
};

export default Board;
