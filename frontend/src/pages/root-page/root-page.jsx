import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import './root-page.css'
import {useDispatch} from "react-redux";
import {fetchAllBooks} from "../../store/book-slice/actions.js";
import {actions as bookActions} from "../../store/book-slice/book-slice";

let initLoad = true;

const RootPage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchBooks = async () => {
            const res = await dispatch(fetchAllBooks());
            if (res.type.includes('/fulfilled')){
                dispatch(bookActions.addBooks(res.payload));
            }else {
                alert(res.error.message);
            }
        }
        if (initLoad){
            initLoad = false;
            fetchBooks();
        }
    }, [])


    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>

    );
};

export default RootPage;