import React from 'react';
import style from "@/components/AppHeade/index.module.scss";
import {NavLink} from "react-router-dom";
import AppHeaderNav from "@/components/AppHeaderNav";

function Index(props) {
    return (
        <div className={style.root}>
            <header className='app-header'>
                <div className="container">
                    <h1 className="logo"><NavLink to="/">小兔鲜</NavLink></h1>

                    <AppHeaderNav></AppHeaderNav>


                    <div className="right">
                        <NavLink to="/">品牌</NavLink>
                        <NavLink to="/">专题</NavLink>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Index;