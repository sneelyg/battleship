import React, { Component } from "react";



export const Card = (props) => {
    return (
        <div className="card mx-2 mb-2" style={{ width: "18rem" }}>{/*<!--2 parentesis de llave  para mostrar q es JS y otro para demostrar que es un objeto-->*/}
            <img src={props.url} className="card-img-top mt-2 rounded" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}.</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
}
/*export const Card = (props) => {
    return (
       

      
            
           
                <Link to="/characters/">
                    <span className="btn btn-primary btn-lg" href="#" role="button">
                        Learn More
                    </span>
                </Link>
            </div>
        </div>

    )
}*/