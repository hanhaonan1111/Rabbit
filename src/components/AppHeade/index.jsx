import React from 'react';
import {NavLink} from 'react-router-dom'
import style from './index.module.scss'
import AppHeaderNav from "@/components/AppHeaderNav";

function Index(props) {
    return <div className={style.root}>
        <header className='app-header'>
            <div className="container">
                <h1 className="logo"><NavLink to="/">小兔鲜</NavLink></h1>

                <AppHeaderNav></AppHeaderNav>


                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="搜一搜"/>
                </div>
                <div className="cart">
                    <a className="curr" href="#">
                        <i className="iconfont  icon-cart"></i><em>2</em>
                    </a>
                </div>
            </div>
        </header>
    </div>

}

export default Index;