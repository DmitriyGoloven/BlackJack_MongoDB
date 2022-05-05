import {applyMiddleware} from "redux";
import axiosMiddleware from "redux-axios-middleware";
import {createStore} from 'redux';
import axios from "axios";
import reducer from "./reducer/reducer";
import {gameState, token} from "./reducer/selectors";

const client = axios.create()
client.interceptors.request.use(function (config) {
    config.headers.Authorization = localStorage.getItem("token")
    return config
})

// const middlewareConfig = {
//     interceptors: {
//         request: [
//             function ({getState}, req) {
//                 req.headers.Authorization = token(getState())
//      return req
//
//             },
//         ],
//     }
// };


export const store = createStore(
    reducer,
    applyMiddleware(
        axiosMiddleware(client)
    )
);