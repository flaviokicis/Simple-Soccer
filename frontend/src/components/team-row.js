import React from 'react';
import './team.css';

const TeamRow = ({teamData}) => {
    return (
        <>
            <div className="teamRowData">
                <div className="imgWrapper">
                <img src={teamData.escudo} alt="escudo"/>

                </div>
                <p className="teamName">{teamData.nome}</p>
                <p className="teamPosition">{teamData.posicao + "º Lugar"}</p>
                <p className="teamPG">{teamData.pontos}</p>
                <p className="teamV">{teamData.vitorias}</p>
                <p className="teamE">{teamData.empates}</p>
                <p className="teamD">{teamData.derrotas}</p>
            </div>
        </>
    );
};

export default TeamRow;