import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {store} from "./store/store";
import './style/style.scss'
import Game from "./components/Game";
import Login from "./components/Login";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="game" element={<Game/>}/>
                <Route path="*" element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
)

