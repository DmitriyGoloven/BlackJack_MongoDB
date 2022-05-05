import React from 'react';

const Modal = ({winner, onclick}) => {

    if (!winner)
        return

    return (
        <div className={"modalBackground"}>
            <div className={"modal"}>
                <div className={"modalContent"}>
                    <p>WINNER: {winner.name}</p>
                    <p>SCORE: {winner.scores}</p>
                    <button className={"modalButton"} onClick={onclick}>NEW GAME</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;