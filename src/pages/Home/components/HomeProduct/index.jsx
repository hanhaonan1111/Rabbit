import React from 'react';
import HomePanel from '@/components/HomePannal'
import GoodsItem from "@/components/GoodsItem";
import {NavLink} from 'react-router-dom'
import More from '@/components/More'
import style from './index.module.scss'
import {useSelector} from "react-redux";

function Index(props) {

    let {production} = useSelector(v => v.HomeReducer)
    return (
        <div className={style.root}>
            <div className="home-product">
                {
                    production.length && production.map(v => {
                        return <div key={v.id}>
                            <HomePanel title={v.name}>
                                <div className="sub">
                                    {
                                        v.children.map(title => {
                                            return <NavLink to={'/category/sub' + title.id}
                                                            key={title.id}>{title.name}</NavLink>
                                        })
                                    }
                                </div>
                                <More path='/'/>
                            </HomePanel>
                            <div className="box">
                                <NavLink className="cover" to="/">
                                    <strong className="label">
                                        <span>{v.name}馆</span>
                                        <span>{v.saleInfo}</span>
                                    </strong>
                                </NavLink>
                                <ul className="goods-list">
                                    {
                                        v.goods.map(value => {
                                            return <li key={value.id}>
                                                <GoodsItem goods={value}/>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    );
}

export default Index;