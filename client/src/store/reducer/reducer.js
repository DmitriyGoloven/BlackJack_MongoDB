import {handleActions} from "redux-actions";
import {getNewGame, hit, stand, reset, getNewToken} from "./actions";

const defaultState = {
    players: null,
    token: localStorage.getItem('token')
}

const getGameDta = (state, {payload}) => {
    const {players, activePlayer, winner} = payload.data;
    return {
        ...state,
        players: players,
        activePlayerId: activePlayer,
        winner: winner
    }
}


const getToken = (state, {payload}) => {
    localStorage.setItem('token', payload.data.token);
    return {
        ...state,
        token: payload.data,
    };
}
const resetToken = (state) => {
    localStorage.clear();
    return {...state, token: null}
}

export const reducer = handleActions({
    [getNewToken.success]: getToken,
    [getNewToken.fail]: resetToken,
    [getNewGame.success]: getGameDta,
    [hit.success]: getGameDta,
    [stand.success]: getGameDta,
    [reset.success]: getGameDta

}, defaultState)

export default reducer;

