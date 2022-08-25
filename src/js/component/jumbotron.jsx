import React, { Component } from "react";
import { Link } from "react-router-dom";


export const Jumbotron = (props) => {
    return (
        <>

            <div className="bg-light p-5 rounded-lg m-5 opacity-75">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">Descubre todos los {props.title}.</p>
                <hr className="my-4" />
                <p></p>
                <Link to = {props.ruta}>
                    <a className="btn btn-primary btn-lg opacity-100" href="#" role="button">Ir a {props.title}</a>
                </Link>
            </div>

        </>
    );
}