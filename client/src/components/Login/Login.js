import React from 'react';
import {useState} from "react";
import {Navigate} from "react-router-dom";



const Login = ({getNewToken, token}) => {

    if (token) {
        return <Navigate to="/game"/>
    }

    const [player1, setPlayer1] = useState({})
    const [player2, setPlayer2] = useState({})
    const [players, setPlayers] = useState([])

    const startGame = () => {
        let playersArr = [...players, player1, player2]
        getNewToken(playersArr);
    }

    const changeName = (id, value) => {
        let newPlayers = [...players];
        newPlayers[id] = value;
        setPlayers(newPlayers);
    }

    const removePlayer = (id) => {
        setPlayers(players.filter((name, index) => index !== id));
    }

    const addPlayer = () => {
        setPlayers([...players, '']);
    }

    return (
        <div className={"loginBackground"}>
            <div className={'modal'}>
                <p>INPUT PLAYERS</p>
                <div className={"inputDiv"}>
                    <input placeholder={'Name'} onChange={event => setPlayer1(event.target.value)}/>
                </div>
                <div className={"inputDiv"}>
                    <input placeholder={'Name'} onChange={event => setPlayer2(event.target.value)}/>
                </div>
                {players.map((name, index) => (
                    <div key={index}>
                        <input value={name} placeholder={'Name'}
                               onChange={event => changeName(index, event.target.value)}
                        />
                        <button className={"smallButton"} onClick={() => removePlayer(index)}>X</button>
                    </div>
                ))
                }
                <button className={"smallButton"} onClick={addPlayer}>+</button>
                <button className={"startButton"} onClick={startGame}>START GAME</button>
            </div>
        </div>
    )
}

export default Login;
