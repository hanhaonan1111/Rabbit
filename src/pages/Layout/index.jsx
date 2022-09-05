import React, {useEffect, useState} from 'react';
import Nav from "@/components/Nav";
import style from './index.module.scss'
import Footer from "@/components/Footer";
import AppHeade from "@/components/AppHeade";
import {useDispatch} from "react-redux";
import {AsyncGetPanPai, AsyncGetTabBaData} from '@/store/action/home'
import AppStickNav from "@/components/AppStickNav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "@/pages/Home";
import Category from '@/pages/Category'

function Index() {
    let [sticy, setSticy] = useState(false)
    let dispatch = useDispatch()
    useEffect(() => {
        window.onscroll = () => {
            let top = document.documentElement.scrollTop
            if (top > 80) {
                setSticy(true)
            } else {
                setSticy(false)
            }

        }
    }, [])
    useEffect(() => {
        dispatch(AsyncGetTabBaData())
        dispatch(AsyncGetPanPai())
    }, [dispatch])
    return (
        <BrowserRouter>
            <div className={style.root}>
                {/*头部黑条条*/}
                <Nav></Nav>
                {/*头部导航栏*/}
                <AppHeade/>
                <div className={['nav', sticy ? 'show' : 'none'].join(' ')}>
                    <AppStickNav></AppStickNav>
                </div>

                {/*主体部分*/}
                <div className='container'>
                    {/*首页*/}
                    <Route path='/' exact component={Home}></Route>
                    {/*分类*/}
                    <Route path='/category/:id' exact component={Category}></Route>
                </div>

                {/*底部*/}
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}

export default Index;