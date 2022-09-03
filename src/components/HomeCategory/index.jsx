import React from 'react';
import {NavLink} from "react-router-dom";
import style from './index.module.scss'
import {useSelector} from "react-redux";

function Index(props) {
    let {tabBarData} = useSelector(v => v.HomeReducer)
    return (
        <div className={style.root}>
            <div className='home-category'>
                <ul className="menu">
                    {
                        tabBarData.map(v => {
                            return <li key={v.id}>
                                <NavLink to={`/category/${v.id}`}>{v.name}</NavLink>
                                <NavLink to={`/category/${v.children[0]?.id}`}>{v.children[0]?.name}</NavLink>
                                <NavLink to={`/category/${v.children[1]?.id}`}>{v.children[1]?.name}</NavLink>

                                <div className="right">
                                    <div className="layer">
                                        <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                                        <ul>
                                            {
                                                v.goods.map(goods => {
                                                    return <li key={goods.id}>
                                                        <NavLink to="/">
                                                            <img
                                                                src={goods.picture}
                                                                alt=""/>
                                                            <div className="info">
                                                                <p className="name ellipsis-2">{goods.name}</p>
                                                                <p className="desc ellipsis">{goods.desc}</p>
                                                                <p className="price"><i>¥</i>{goods.price}</p>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                    <li>
                        <NavLink to="/">品牌</NavLink>
                        <NavLink to="/">品牌推荐</NavLink>
                    </li>
                </ul>


            </div>

        </div>
    );
}

export default Index;