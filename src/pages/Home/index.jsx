import React, {useEffect} from 'react';
import HomeCategory from "@/components/HomeCategory";
import style from './index.module.scss'
import Carousel from "@/components/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {AsyncGetHomeProduct, AsyncGetHotReand, AsyncGetRecommend, AsyncGetSwipr} from "@/store/action/home";
import HomeNewGoods from "@/pages/Home/components/HomeNewGoods";
import HomeHot from './components/HomeHot'
import HomeBrand from "@/pages/Home/components/HomeBrand";
import HomeProduct from "@/pages/Home/components/HomeProduct";
import HomeSpecial from "@/pages/Home/components/HomeSpecial";

function Index() {
    let dispatch = useDispatch()
    let {swiperData} = useSelector(v => v.HomeReducer)
    useEffect(() => {
        dispatch(AsyncGetSwipr())
        dispatch(AsyncGetHotReand())
        dispatch(AsyncGetRecommend())
        dispatch(AsyncGetHomeProduct())
    }, [dispatch])

    return (
        <div className={style.root}>
            <div className="page-home">
                <div className="home-entry">
                    <div className="container">
                        {/*轮播图及其分类*/}
                        <Carousel swiper={swiperData}></Carousel>
                        <HomeCategory></HomeCategory>
                        {/*好物推荐*/}
                        <HomeNewGoods/>
                        {/*人气推荐*/}
                        <HomeHot></HomeHot>
                        {/*热门品牌*/}
                        <HomeBrand></HomeBrand>
                        {/*商品模块*/}
                        <HomeProduct></HomeProduct>
                        {/*其他模块*/}
                        <HomeSpecial></HomeSpecial>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;