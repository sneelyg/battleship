import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js"



export const Cell = (props) => {
    const { store, actions } = useContext(Context);



    return (
        <div className={`cell-${props.estado}`} position_x = {props.position}
         position_y = {props.position_y}
         onClick ={ (e)=> {
            //this.disabled = true;
            console.log(props.position_x , props.position_y);
            actions.fire_torpedo(props.position_x, props.position_y);
            actions.generate_random();
            let last_element = store.registro_disparos.length;
            console.log(last_element);
            let coordenadas = store.registro_disparos[last_element-1]
            console.log (coordenadas)
            let disparo_x = parseInt(coordenadas[0]);
            let disparo_y = parseInt(coordenadas[1]);
            actions.fire_comp(disparo_x, disparo_y);

        }}
         >
       
          {props.numero}

        </div >
    );
}
