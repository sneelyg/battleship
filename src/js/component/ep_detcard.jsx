import React, { Component } from "react";
import {Link} from 'react-router-dom';



export const EpDetCard = (props) => {
    
    
    return (
        <>

        <div className="bg-light p-5 rounded-lg m-5 opacity-75">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">Fecha de Estreno: {props.lanzamiento}</p>
            <p className="lead">Personajes que aparecen: </p>
            {props.personajes.map((elm,i) =>{
               return  <li key = {i}>{elm}</li>

            })}
         
        </div>

    </>
    );
}