import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";

import Profile from "./components/profile/profile";
import Database from "./components/database/database";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path={"/"} element={<Profile/>}/>
            <Route path={"/database"} element={<Database/>}/>
        </Routes>
    </HashRouter>
);

reportWebVitals();
