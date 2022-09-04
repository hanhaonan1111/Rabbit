import React from 'react';
import style from './index.module.scss'
import {NavLink} from "react-router-dom";

function Index({goods}) {
    return (
        <div className={style.root}>
            <div className="goods-item">
                <NavLink to={'/product/' + goods.id} className="image">
                    <img src={goods.picture} alt=""/>
                </NavLink>
                <p className="name ellipsis-2">{goods.name}</p>
                <p className="desc">{goods.desc}</p>
                <p className="price">&yen;{goods.price}</p>
                <div className="extra">
                    <NavLink to="/">
                        <span>找相似</span>
                        <span>发现现多宝贝 &gt;</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;