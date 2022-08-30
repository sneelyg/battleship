import React, {useContext}  from "react";
import {Context} from "../store/appContext.js"

import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js'
import { Jumbotron } from '../component/jumbotron.jsx'


export const Characters = () =>{ 
    const {store, actions} = useContext(Context);


    return (
    <div className="text-center mt-5 row">

        {store.characters?.map((obj, index)=>{
            return (
                <Card title={obj.name}  url = {obj.image}  ruta = {`/characters/detail/${obj.id} indice={obj.id} `}  />
            )
        })}




    </div>

)};