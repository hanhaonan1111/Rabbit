import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
import Img from '@/components/Img'
export default function Index({ path = '', img = '', name = '', desc = '', price = '' }) {
    return (
        <div className={style.root}>
            <div className="goods-item">
                <NavLink to={"/product/" + path} className="image"  >
                    <Img src={img} alt="" />
                </NavLink>
                <div className='detail'>
                    <p className="name ellipsis-2">{name}</p>
                    <p className="desc ellipsis-2">{desc}</p>
                    <p className="price">&yen;{price}</p>
                </div>
                <div className="extra">
                    <NavLink to="/"  >
                        <span>找相似</span>
                        <span>发现现多宝贝 &gt;</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
