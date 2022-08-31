import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { useParams } from "react-router-dom";

import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { DetCard } from '../component/detcard.jsx';
import { Navbar } from '../component/navbar.js'
import { Jumbotron } from '../component/jumbotron.jsx'

export const DetailChar = () => {
    const { store, actions } = useContext(Context);
    const { charID } = useParams();
    const numchar = charID * 1 - 1;

    const lista_episodios = store.characters[numchar]?.episode.map((elm, index) => {
        return elm.substring(40) + " ";
    })

    return (
        <div className="text-center mt-5 row">
            <div className = " bg-light opacity-75 mx-auto my-5" style = {{"width": "80%"}}>
                <h1 className="display-3">{store.characters[numchar]?.name} </h1>
            </div>
            <div className="row justify-content-around">
                <DetCard url={store.characters[numchar]?.image} />

                <DetCard
                    title={` ${store.characters[numchar]?.name}  vive en ${store.characters[numchar]?.location.name}  y aparece en los episodios ${lista_episodios} `}
                />

            </div>




        </div>
    )
};