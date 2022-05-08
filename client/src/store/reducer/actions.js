import {createAction} from "redux-actions"

const createRequestAction = (type, payload) => {
    const action = createAction(type, payload);
    action.success = type + '_SUCCESS';
    action.fail = type + '_FAIL';
    return action;
}


export const getNewToken = createRequestAction('GET_NEW_TOKEN', (data)=>({
    request: {
        method: 'post',
        url: '/login',
         data

    }

}))

export const getNewGame = createRequestAction('GET_NEW_GAME', () => ({
    request: {
        method: 'post',
        url: '/game',
    }
}));

export const hit = createRequestAction('HIT', () => ({
    request: {
        method: 'post',
        url: '/hit',
    }
}));

export const stand = createRequestAction('STAND', () => ({
    request: {
        method: 'post',
        url: '/stand',
    }
}));

export const reset = createRequestAction('RESET', () => ({
    request: {
        method: 'post',
        url: '/reset',
        // headers: {
        //     Authorization: localStorage.getItem('token')
        // }
    }
}));