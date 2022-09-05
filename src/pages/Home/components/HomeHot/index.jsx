import React from 'react';
import HomePanel from '@/components/HomePannal'
import style from './index.module.scss'
import {useSelector} from "react-redux";
import Lazyload from "@/components/Lazyload";

function Index() {
    let {Recommend} = useSelector(v => v.HomeReducer)
    return (
        <div className={style.root}>
            <HomePanel title="人气推荐" subTitle="人气爆款 不容错过"></HomePanel>
            <ul className="goods-list">
                {
                    Recommend.length > 0 ? Recommend.map(v => {
                        return <li key={v.id}>
                            <div>
                                <Lazyload src={v.picture} alt=""></Lazyload>
                                <p className="name">{v.title}</p>
                                <p className="desc">{v.alt}</p>
                            </div>
                        </li>
                    }) : null
                }

            </ul>

        </div>
    );
}

export default Index;
