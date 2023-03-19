import React, { useContext } from "react";
import { Context } from "../store/appContext.js"

import "../../styles/style.css";
import { Cell_comp } from '../component/cell_comp.jsx';



export const Fila_comp= (props) => {
    const { store, actions } = useContext(Context);


    return (
        <>

            <div className="d-inline-flex text-center row ml-5">
                <Cell_comp estado={0} numero={props.num + 1} />

                {store.status_tablero_comp[props.num].map((obj, index) => {
                    return (
                        <Cell_comp key={index} estado={obj} position_x={index} position_y={props.num}/>
                    )
                })
                }
            </div>


        </>
    )
};