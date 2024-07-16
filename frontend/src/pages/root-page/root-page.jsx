import React from 'react';
import {Outlet} from "react-router-dom";

const RootPage = () => {
    return (
        <>
            <header>Header</header>
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>

    );
};

export default RootPage;