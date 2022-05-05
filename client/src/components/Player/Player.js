import React from 'react';


const Player = ({name, scores, cardImg, active}) => {

    return (
        <div>
            <p>{name}</p>
            <div className={active ? "player player_active" : "player"}>
                <p className={"cardImg"}>{cardImg}</p>
                <p>SCORES: {scores}</p>
                <p className={"cardImg2"}>{cardImg}</p>
            </div>
        </div>
    );
};

export default Player;