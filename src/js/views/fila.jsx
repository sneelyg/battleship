import React, { useContext } from "react";
import { Context } from "../store/appContext.js"

import "../../styles/style.css";
import { Cell } from '../component/cell.jsx';
import { Cell_comp } from '../component/cell_comp.jsx';



export const Fila = (props) => {
    const { store, actions } = useContext(Context);


    return (
        <>

            <div className="d-inline-flex text-center row ml-5">
                <Cell_comp estado={0} numero={props.num + 1} />

                {store.status_tablero[props.num].map((obj, index) => {
                    return (
                        <Cell key={index} estado={obj} position_x={index} position_y={props.num}/>
                    )
                })
                }
            </div>


        </>
    )
};