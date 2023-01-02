import React, { useEffect } from 'react'
import HomeCategory from './components/homeCategory'
import style from './index.module.scss'
import Carousel from '@/components/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { AsyncGetCarousel, AsyncGetNewgoods, AsyncLastest, AsyncRecommend } from '@/store/actions/home'
import { NavLink } from 'react-router-dom'
import Pannal from './components/Pannal'
import More from '@/components/More'
import Skeleton from '@/components/Skeleton'
import Lastest from './components/Lastest'
import Img from '@/components/Img'
import HotBrand from './components/HotBrand'
import Production from './components/Product'
import Goods from './components/Goods'


export default function Index() {
    let dispatch = useDispatch()
    let { carousal, Newgoods, Recommend, } = useSelector(v => v.home)

    useEffect(() => {
        dispatch(AsyncGetCarousel())
        dispatch(AsyncGetNewgoods())
        dispatch(AsyncRecommend())
        dispatch(AsyncLastest())
    }, [])
    return (<div className={style.root}>
        {/* 轮播图以及左侧菜单栏 */}
        <div className='box'>
            <div className='bg'>
                <Carousel imgs={carousal}></Carousel>
            </div>
            <div className='left'>
                <HomeCategory />
            </div>
        </div>
        {/* 新鲜好物 */}
        <div className="home-new" >
            <Pannal title="新鲜好物" sub-title="新鲜出炉 品质靠谱" more={<More path="/" />}>
                <ul className="goods-list">
                    {
                        Newgoods.length === 0 && new Array(4).fill(1).map((v, i) => {
                            return <li key={i}>
                                <Skeleton width={306} height={406} bg='rgba(0,0,0,.5)' />
                            </li>
                        })
                    }

                    {
                        Newgoods.length > 0 && Newgoods.map(v => <li key={v.id}>
                            <NavLink to={"/product/"}>
                                <Img src={v.picture} alt="" />
                                <p className="name ellipsis">{v.name}</p>
                                <p className="price">&yen;{v.price}</p>
                            </NavLink>
                        </li>

                        )
                    }

                </ul>
            </Pannal>

        </div >
        {/* 人气推荐 */}
        <Pannal title="人气推荐" sub-title="人气爆款 不容错过">
            <ul className="goods-list">
                {
                    Recommend && Recommend.map(v => {
                        return <li key={v.id} >
                            <NavLink to="/">
                                <Img src={v.picture} alt="" />
                                <p className="name">{v.title}</p>
                                <p className="desc">{v.alt}</p>
                            </NavLink>
                        </li>
                    })

                }

            </ul>
        </Pannal>

        {/* 热门品牌 */}
        <HotBrand></HotBrand>
        {/* 商品模块 */}
        <Production></Production>
        {/* 最新专区 */}
        <Lastest></Lastest>
    </div >
    )
}
