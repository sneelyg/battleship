import React, { useContext } from "react";
import { Context } from "../store/appContext.js"

import "../../styles/style.css";
import { Cell } from '../component/cell.jsx';
import { Cell_comp } from '../component/cell_comp.jsx';



export const Tablero = (props) => {
    const { store, actions } = useContext(Context);
    const largo = 10;

    return (
        <>
                 <div className="d-inline-flex text-center row ml-5">
                <Cell_comp estado={0} numero={" "} />
                <Cell_comp estado={0} numero={"1"} />
                <Cell_comp estado={0} numero={"2"} />
                <Cell_comp estado={0} numero={"3"} />
                <Cell_comp estado={0} numero={"4"} />
                <Cell_comp estado={0} numero={"5"} />
                <Cell_comp estado={0} numero={"6"} />
                <Cell_comp estado={0} numero={"7"} />
                <Cell_comp estado={0} numero={"8"} />
                <Cell_comp estado={0} numero={"9"} />
                <Cell_comp estado={0} numero={"10"} />

            </div>

    

        </>
    )
};