import React from 'react';
import './Local.css';

function Local({nome, descricao, src}){
    return(
        <div className="LocalContainer">
            <div className="informacoes">
                <p className="nome-local">{nome}</p>
                <p className="descricao-local">{descricao}</p>
            </div>
            <div className="mapa">
                <iframe title='mapa' src={src}></iframe>
            </div>
        </div>
    )
}
export default Local;

