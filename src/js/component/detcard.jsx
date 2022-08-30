import React, { Component } from "react";
import {Link} from 'react-router-dom';



export const DetCard = (props) => {
    return (
        <div className="card mx-2 mb-2" style={{ width: "36rem" }}>{/*<!--2 parentesis de llave  para mostrar q es JS y otro para demostrar que es un objeto-->*/}
            <img src={props.url} className="card-img-top mt-2 rounded" alt="" />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                
        </div>
        </div >
    );
}
/*e<div className="bg-light p-5 rounded-lg m-5 opacity-75">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.title}.</p>
                <hr className="my-4" />
                <
                <Link to = {props.ruta}>
                    <a className="btn btn-primary btn-lg opacity-100" href="#" role="button">Ir a {props.title}</a>
                </Link>
            </div>
    )
}*/