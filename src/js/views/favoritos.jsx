import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { useParams } from "react-router-dom";

import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { DetCard } from '../component/detcard.jsx';
import { Navbar } from '../component/navbar.js'
import { Jumbotron } from '../component/jumbotron.jsx'

export const Favoritos = () =>{ 
    const {store, actions} = useContext(Context);


    return (
    <div className="text-center mt-5 row">

        {store.favoritos?.map((obj, index)=>{
            return (
                <Card key={index} title={obj.name}  url = {obj.image}  ruta = {`/characters/detail/${obj.id}`} indice={obj.id}  />
            )
        })}




    </div>

)};