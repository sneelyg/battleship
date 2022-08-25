import React from "react";

import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js'
import { Jumbotron } from '../component/jumbotron.jsx'

export const Characters = () => (
    <div className="text-center mt-5 row">

        <Card title="Rick Sanchez" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsbfawaUfFRpuUDc8gU5nFZPmite0ksGOnA&usqp=CAU"
            description="Protagonista de la serie. Es el hombre más intelignete del multiverso" />


        <Card title="Morty Smith" url="http://pm1.narvii.com/6521/95087a412bba0e57dae8ccd79d8acbe4e5256732_00.jpg"
            description="" />


        <Card title="Beth Sanchez" url="https://i.pinimg.com/736x/22/25/db/2225db8fb96fe5857deff4320772d928.jpg"
            description="" />


        <Card title="Summer Sanchez" url="http://pm1.narvii.com/6521/dce6b923e3aff86c7e5f39057519879e5207a56f_00.jpg"
            description="" />


        <Card title="Birdperson" url="http://pm1.narvii.com/6379/760332d825c13809cffb8a10c6a2da04bdd19041_00.jpg"
            description="" />


        <Card title="Mr. Poopy Buthole" url=""
            description="" />


    </div>
);