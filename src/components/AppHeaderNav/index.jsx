import React from 'react';
import {NavLink, useHistory, useParams} from "react-router-dom";
import style from './index.module.scss'
import {useSelector} from "react-redux";
import {topCategory} from "@/assets/constant/randerData";
import Lazyload from "@/components/Lazyload";

function scroll() {
    window.scroll(0, 0)
}

function Index(props) {
    let {tabBarData} = useSelector(v => v.HomeReducer)
    let {id} = useParams()
    let histroy = useHistory()

    return (
        <div className={style.root}>
            <ul className="navs">
                <li className="home">
                    <NavLink to='/index' exact>首页</NavLink>
                </li>
                {
                    tabBarData.length > 0 ? (
                        tabBarData.map((v) => {
                            return <li key={v.id}>
                                <NavLink
                                    to={'/category/' + v.id}
                                    onClick={scroll}
                                >{v.name}
                                </NavLink>
                                <div className="layer">
                                    <ul>
                                        {
                                            v.children.map(val => {

                                                return (<li key={val.id}>
                                                        <NavLink
                                                            to={'/category/sub/' + val.id}
                                                        >

                                                            <Lazyload src={val.picture} alt=""></Lazyload>
                                                            <p>{val.name}</p>
                                                        </NavLink>
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