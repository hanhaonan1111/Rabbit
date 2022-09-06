import React from 'react';
import Lazyload from "@/components/Lazyload";
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'

function Index({ goods }) {
    return (
        <div className={style.root}>
            <NavLink to={'/product/' + goods.id} className='goods-item'>
                <Lazyload src={goods.picture} alt=""></Lazyload>
                <p className="name ellipsis">{goods.name}</p>
                <p className="desc ellipsis">{goods.desc}</p>
                <p className="price">&yen;{goods.price}</p>
            </NavLink>
        </div>
    );
}

export default Index;