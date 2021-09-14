import React, { useCallback, useState } from "react";
import Presentation from "./screens/presentation";
import Projection from "./screens/projection";

export const Yith: React.FC = () => {
    return (
        <>
            <Presentation  manifest={{}} />
            <Projection  manifest={{}} />
        </>
    );
};

export default Yith;