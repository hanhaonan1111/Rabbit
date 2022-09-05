import React from 'react';
import HomePanel from '@/components/HomePannal'
import {NavLink} from "react-router-dom";
import style from './index.module.scss'
import Lazyload from "@/components/Lazyload";

function Index(props) {
    return (
        <div className={style.root}>
            <HomePanel title="最新专题">

            </HomePanel>
            <div className="special-list">
                {
                    new Array(3).fill(0).map((v, i) => {
                        return <div className="special-item" key={i}>
                            <NavLink to="/">
                                <Lazyload
                                    alt=''
                                    src={`http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/topic_goods_${i + 1}.jpg`}
                                ></Lazyload>
                                <div className="meta">
                                    <p className="title">
                                        <span className="top ellipsis">看到撒娇的撒娇的凯撒就</span>
                                        <span className="sub ellipsis">倒萨倒萨倒萨</span>
                                    </p>
                                    <span className="price">&yen;19.99起</span>
                                </div>
                            </NavLink>
                            <div className="foot">
                                <span className="like"><i
                                    className="iconfont icon-aixin"></i>{parseInt(Math.random() * 100)}</span>
                                <span className="view"><i
                                    className="iconfont icon-yanjing"></i>{parseInt(Math.random() * 100)}</span>
                                <span className="reply"><i
                                    className="iconfont icon-pinglun"></i>{parseInt(Math.random() * 100)}</span>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
}

export default Index;