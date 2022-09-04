import React, {useEffect} from 'react';
import style from './index.module.scss'
import {NavLink} from "react-router-dom";
import HomePanel from '@/components/HomePannal'
import XtxMore from '@/components/More'
import {useDispatch, useSelector} from "react-redux";
import {AsyncGetNewGoods} from "@/store/action/home";
import Skeleton from "@/components/Skeleton";

function Index(props) {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(AsyncGetNewGoods())
    }, [dispatch])
    let {HomeNewGoods} = useSelector(v => v.HomeReducer)
    let skeleton = [1, 2, 3, 4,]
    return (
        <div className={style.root}>
            <div className="home-new">
                <div className='head'>
                    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
                        <XtxMore path="/"/>
                    </HomePanel>

                </div>

                <ul className="goods-list">
                    {
                        HomeNewGoods.length > 0 ? HomeNewGoods.map(v => {
                                return <li key={v.id}>
                                    <NavLink to={'/product/' + v.id}>
                                        <img alt="" src={v.picture}/>
                                        <p className="name ellipsis">{v.name}</p>
                                        <p className="price">&yen;{v.price}</p>
                                    </NavLink>
                                </li>
                            }) :
                            skeleton.map(v => {
                                return <li key={v}>
                                    <div><Skeleton width={306} height={306} bg="rgba(0,0,0,0.2)"></Skeleton></div>

                                    <div className="loading">
                                        <Skeleton
                                            width={190} height={42}
                                            bg="rgba(0,0,0,0.2)">

                                        </Skeleton>
                                    </div>
                                    <div className="loading  loading2">
                                        <Skeleton
                                            width={260} height={42}
                                            bg="rgba(0,0,0,0.2)">

                                        </Skeleton>
                                    </div>

                                </li>
                            })


                    }

                </ul>

            </div>
        </div>
    );
}

export default Index;