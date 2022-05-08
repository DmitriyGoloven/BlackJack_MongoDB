import React from 'react';
import Player from "../Player/Player"

const MainTable = ({state}) => {
    return (
        <div className={"mainTable"}>
            <h1>Black Jack</h1>
            <div className={"players"}>
                {state.players.map((player) => {
                    return <Player
                        name={player.name}
                        scores={player.scores}
                        cardImg={player.cardImg}
                        id={player.id}
                        active={state.activePlayerId[0] === player.id[0]}
                        key={player.id}/>
                })}
            </div>
        </div>
    );
};

export default MainTable;