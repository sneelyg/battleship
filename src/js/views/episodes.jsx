import React, {useContext}  from "react";
import {Context} from "../store/appContext.js"

import "../../styles/home.css";
import { EpCard } from '../component/ep_card.jsx';
import { Navbar } from '../component/navbar.js'
import { Jumbotron } from '../component/jumbotron.jsx'


export const Episodes = () => {
    const {store, actions} = useContext(Context);
    
    return (
<>

<div className = " bg-light opacity-75 mx-auto my-5 text-center" style = {{"width": "80%"}}>
                <h1 className="display-5">Episodios</h1>
            </div>
<div className= "row">
            {store.episodes?.map((obj, index)=>{
            return (
                <EpCard key={index} title={obj.name}  indice={obj.id} ruta = {`/episodes/detail/${obj.id}`} />
            )
        })}
        </div>
</>
        
    )


}