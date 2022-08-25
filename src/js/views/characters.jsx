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
            description="Nieto de Rick, es su ayudante en casi todo lo que Rick hace." />


        <Card title="Beth Sanchez" url="https://i.pinimg.com/736x/22/25/db/2225db8fb96fe5857deff4320772d928.jpg"
            description="Hija de Rick y madre de Morty." />


        <Card title="Summer Sanchez" url="http://pm1.narvii.com/6521/dce6b923e3aff86c7e5f39057519879e5207a56f_00.jpg"
            description="Hermana de Morty, participa en algunas de las aventuras" />


        <Card title="Birdperson" url="http://pm1.narvii.com/6379/760332d825c13809cffb8a10c6a2da04bdd19041_00.jpg"
            description=" 'He's an amazing person and an incredible bird.' Amigo de Rick, pelearon juntos en muchas batallas."/>


        <Card title="Mr. Poopy Buthole" url="https://i1.sndcdn.com/artworks-000131941579-k9t4qc-t500x500.jpg"
            description="OOUUUWEEEEEEEEEE" />


    </div>
);