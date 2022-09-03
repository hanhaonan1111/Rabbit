import React, {useEffect, useState} from 'react';
import Nav from "@/components/Nav";
import style from './index.module.scss'
import Footer from "@/components/Footer";
import AppHeade from "@/components/AppHeade";
import {useDispatch} from "react-redux";
import {AsyncGetTabBaData} from '@/store/action/home'
import AppStickNav from "@/components/AppStickNav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "@/pages/Home";

function Index() {
    let [sticy, setSticy] = useState(false)
    let dispatch = useDispatch()
    useEffect(() => {
        window.onscroll = () => {
            let top = document.documentElement.scrollTop
            if (top > 75) {
                setSticy(true)
            } else {
                setSticy(false)
            }

        }
    }, [])
    useEffect(() => {
        dispatch(AsyncGetTabBaData())
    }, [dispatch])
    return (
        <BrowserRouter>
            <div className={style.root}>
                <Nav></Nav>
                <AppHeade/>

                <div className={['nav', sticy ? 'show' : 'none'].join(' ')}>
                    <AppStickNav></AppStickNav>
                </div>


                <Route path='/' exact component={Home}></Route>


                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}

export default Index;