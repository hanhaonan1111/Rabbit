import { AsyncGetBrand } from '@/store/actions/home'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
import Skeleton from '@/components/Skeleton'
import Img from '@/components/Img'
export default function Index() {
    let { topNav, brandRelative } = useSelector(v => v.home)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(AsyncGetBrand())
    }, [dispatch])

    topNav = JSON.parse(JSON.stringify(topNav))
    topNav.push({
        id: 'brand',
        name: '品牌',
        children: [{ id: 'brand-chilren', name: '品牌推荐' }],
        goods: brandRelative
    })


    return (
        <div className={style.root}>
            <div className='home-category'>
                <ul className="menu">
                    {
                        topNav.map((v, i) => {

                            return (
                                <li key={i}>

                                    <NavLink to={"/category/" + v.id}>{v.name}</NavLink>

                                    {
                                        !v.children && new Array(2).fill(8).map((v, i) => <Skeleton key={i} width={56} height={19} bg={'rgba(255,255,255,.5)'}></Skeleton>
                                        )}

                                    {
                                        v.children && v.children.map((val, index) => {
                                            return index < 2 && <NavLink key={val.id} to={'category/sub/' + val.id}>
                                                {val.name}
                                            </NavLink>
                                        })
                                    }
                                    <div className="layer">
                                        <h4>{v.name}推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                                        <ul>

                                            {v.goods && v.goods.map(v => <li key={v.id} >
                                                <NavLink to={"/product/" + v.id}>
                                                    <Img src={v.picture} alt="" />
                                                    <div className="info">
                                                        <p className="name ellipsis-1">{v.name}</p>
                                                        <p className="desc ellipsis">{v.desc}</p>
                                                        {
                                                            v.price ? <p className="price"><i>¥</i>{v.price}</p> :
                                                                <p className='desc ellipsis'> {v.place}</p>
                                                        }
                                                    </div>
                                                </NavLink>
                                            </li>)}
                                        </ul>
                                    </div>


                                </li>

                            )
                        })
                    }
                </ul >
                {/* <HomeCategoryBox /> */}
            </div >
        </div >
    )
}
