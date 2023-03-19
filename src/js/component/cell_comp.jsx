import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js"



export const Cell_comp = (props) => {
    const { store, actions } = useContext(Context);



    return (
        <div className={`cell-${props.estado}`} position_x = {props.position}
         position_y = {props.position_y}
        
         >
       
          {props.numero}

        </div >
    );
}
