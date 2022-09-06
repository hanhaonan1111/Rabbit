import React, { useEffect } from 'react';
import style from './index.module.scss'
import Carousel from "@/components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { AsyncGetSwipr } from "@/store/action/home";
import Bread from "@/components/Bread";
import BreadItem from "@/components/Bread/BreadItem";
import CategoryGoodsItem from "@/components/CategoryGoodsItem";
import { NavLink, useParams } from "react-router-dom";
import { AsyncCatagoryList } from "@/store/action/category";
import Lazyload from "@/components/Lazyload";

function Index(props) {
    let dispatch = useDispatch()
    let id = useParams()
    let { CurrentCatagoryList } = useSelector(v => v.CategoryReducer)
    let { swiperData } = useSelector(v => v.HomeReducer)
    useEffect(() => {
        dispatch(AsyncCatagoryList(id.id)
        )
    }, [id])
    useEffect(() => {
        dispatch(AsyncGetSwipr())
    }, [])

    return (
        <div className={style.root}>
            <div className="top-category">
                <div className="container">
                    <Bread split='>'>
                        <BreadItem path='/'>首页</BreadItem>
                        <BreadItem>{CurrentCatagoryList?.name}</BreadItem>
                    </Bread>
                    <div className='swiperBox'>
                        <Carousel swiper={swiperData} />
                    </div>
                    <div className="sub-list">
                        <h3>全部分类</h3>
                        <ul>
                            {
                                CurrentCatagoryList?.children?.length > 0 && (
                                    CurrentCatagoryList.children.map(v => {
                                        return <li key={v.id}>
                                            <NavLink to={'/category/sub/' + v.id}>
                                                <Lazyload src={v.picture}></Lazyload>
                                                <p> {v.name}</p>
                                            </NavLink>

                                        </li>
                                    })
                                )
                            }
                        </ul>
                        {
                            CurrentCatagoryList?.children?.length > 0 && (
                                CurrentCatagoryList.children.map(v => {
                                    return (
                                        <div className="ref-goods" key={v.id}>
                                            <div className="head">
                                                <h3>- {v.name} -</h3>
                                            </div>
                                            <div className="body">
                                                {
                                                    v.goods.map(goods => <CategoryGoodsItem
                                                        goods={goods}
                                                        key={goods.id}
                                                    />
                                                    )
                                                }

                                            </div>
                                        </div>
                                    )
                                })

                            )
                        }

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Index;