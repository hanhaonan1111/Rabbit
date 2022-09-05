import React from 'react';
import {NavLink} from "react-router-dom";
import style from './index.module.scss'
import {useSelector} from "react-redux";
import Skeleton from "@/components/Skeleton";
import {topCategory} from "@/assets/constant/randerData";
import Lazyload from "@/components/Lazyload";

function Index(props) {
    let {tabBarData, TabPinPai} = useSelector(v => v.HomeReducer)
    return (
        <div className={style.root}>
            <div className='home-category'>
                <ul className="menu">
                    {
                        tabBarData.length > 0 ? tabBarData.map(v => {
                            return <li key={v.id}>

                                <NavLink to={`/category/${v.id}`}>{v.name}</NavLink>
                                <NavLink to={`/category/${v.children[0]?.id}`}>{v.children[0]?.name}</NavLink>
                                <NavLink to={`/category/${v.children[1]?.id}`}>{v.children[1]?.name}</NavLink>

                                <div className="right">
                                    <div className="layer">
                                        <h4>{v.name} <small>根据您的购买或浏览记录推荐</small></h4>
                                        <ul>
                                            {
                                                v.goods.map(goods => {
                                                    return <li key={goods.id}>
                                                        <NavLink to="/">
                                                            <Lazyload src={goods.picture}
                                                                      alt=""></Lazyload>
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
                        }) : (
                            topCategory.map((v, i) => {
                                return (
                                    <li key={i} className='Skeleton'>
                                        <NavLink to='/'>{v}</NavLink>
                                        <Skeleton width={56} height={18} bg="rgba(255,255,255,0.3)"
                                        ></Skeleton>
                                        <Skeleton width={56} height={18} bg="rgba(255,255,255,0.3)"
                                        ></Skeleton>
                                    </li>)
                            })

                        )

                    }
                    <li>
                        <NavLink to="/">品牌</NavLink>
                        <NavLink to="/">品牌推荐</NavLink>
                        <div className="right">
                            <div className="layer">
                                <h4>品牌推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                                <ul>
                                    {
                                        TabPinPai && TabPinPai.map((v, i) => {
                                            if (i === 6) {
                                                return null
                                            }
                                            return <li key={v.id}>
                                                <NavLink to="/">
                                                    <Lazyload src={v.picture}
                                                              alt=""></Lazyload>
                                                    <div className="info">
                                                        <p className="name ellipsis-2">{v.name}</p>
                                                        <p className="desc ellipsis">{v.desc}</p>
                                                        <p className="price"><i>{v.place}</i></p>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>


            </div>

        </div>
    );
}

export default Index;