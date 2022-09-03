import React from 'react';
import {NavLink} from "react-router-dom";
import style from './index.module.scss'
import {useSelector} from "react-redux";
import {topCategory} from "@/assets/constant/randerData";

function Index(props) {
    let {tabBarData} = useSelector(v => v.HomeReducer)

    return (
        <div className={style.root}>
            <ul className="navs">
                <li className="home">
                    <NavLink to="/">首页</NavLink>
                </li>
                {
                    tabBarData.length > 0 ? (
                        tabBarData.map((v) => {

                            return <li key={v.id}>
                                <a href="#">{v.name}</a>
                                <div className="layer">
                                    <ul>
                                        {
                                            v.children.map(val => {
                                                return (<li key={val.id}>
                                                        <a href="#">
                                                            <img
                                                                src={val.picture}
                                                                alt=""/>
                                                            <p>{val.name}</p>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </li>
                        })

                    ) : (
                        topCategory.map(v => {
                            return <li key={v}>
                                <a href="#">{v}</a>
                            </li>
                        })

                    )
                }

            </ul>
        </div>
    );
}

export default Index;