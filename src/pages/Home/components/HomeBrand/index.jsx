import React, {useEffect, useRef, useState} from 'react';
import style from './index.module.scss'
import {NavLink} from "react-router-dom";
import HomePanel from '@/components/HomePannal'
import {useSelector} from "react-redux";
import Skeleton from "@/components/Skeleton";

function Index(props) {
    let {HotBrand} = useSelector(v => v.HomeReducer)
    let next = useRef(null)
    let prev = useRef(null)
    let [page, setPage] = useState(0)
    useEffect(() => {
        if (next.current) {
            next.current.onclick = () => {
                console.log('next', page)
                setPage((page) => 1)
            }
            prev.current.onclick = () => {
                console.log('prev', page)
                setPage((page) => 0)
            }

        }
    }, [next.current,])
    return (
        <div className={style.root}>
            <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
                <a className={["iconfont icon-zuojiantou prev", page === 1 ? 'active' : 'disabled'].join(' ')}
                   ref={prev}></a>
                <a className={["iconfont icon-jiantou_xiangyou prev", page === 0 ? 'active' : 'disabled'].join(' ')}
                   ref={next}></a>
            </HomePanel>
            <div className="box">
                <ul className={["list", page === 1 ? 'move' : ''].join(' ')}>
                    {
                        HotBrand.length > 0 ? HotBrand.map((v, i) => {
                            return <li key={v.id}>
                                <NavLink to="/">
                                    <img src={v.picture} alt=""/>
                                </NavLink>
                            </li>
                        }) : new Array(5).fill(0).map((v, i) => {
                            return <li key={i}>
                                <Skeleton width={240} height={305} bg='rgba(0,0,0,0.3)'></Skeleton>
                            </li>
                        })

                    }

                </ul>
            </div>
        </div>
    );
}

export default Index;