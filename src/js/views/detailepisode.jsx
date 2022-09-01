import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { useParams } from "react-router-dom";


import "../../styles/home.css";
import { Jumbotron } from '../component/jumbotron.jsx'
import { Card } from '../component/card.jsx';
import { EpDetCard } from '../component/ep_detcard.jsx';
import { DetCard } from '../component/detcard.jsx';



export const DetailEpisode = () => {
    const { store, actions } = useContext(Context);
    const { epID } = useParams();
    const numep = epID * 1 - 1;
    const lista_personajes = store.episodes[numep]?.characters.map((elm, index) => {
        return elm.substring(42);
    })
    const nombres_personajes =(arr)=>{};


    return (

        <div >
          
            <EpDetCard title= {store.episodes[numep]?.name}
            lanzamiento= {store.episodes[numep]?.air_date}
            personajes = {lista_personajes}/>




        </div>


    );
}