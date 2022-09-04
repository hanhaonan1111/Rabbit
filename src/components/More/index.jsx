import React from 'react';
import {NavLink} from "react-router-dom";
import style from './index.module.scss'

function Index({path}) {
    return (
        <div className={style.root}>
            <NavLink to={path} className="xtx-more">
                <div className='right'>
                    <span>查看全部</span>
                    <i className="iconfont icon-youjiantou"></i>
                </div>
            </NavLink>
        </div>
    );
}

export default Index;