import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/header/header.jsx";

const RootPage = () => {
    return (
        <>
            <Header/>
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>

    );
};

export default RootPage;