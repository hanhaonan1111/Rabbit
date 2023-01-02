import React, { useEffect } from 'react'
import Pannal from '../Pannal'
import Goods from '../Goods'
import More from '@/components/More'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AsyncGoodsList } from '@/store/actions/home'
import Img from '@/components/Img'
export default function Index() {
    let { GoodsList } = useSelector(v => v.home)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(AsyncGoodsList())
    }, [dispatch])
    return (
        <div className={style.root}>
            <div className="home-product">
                {
                    GoodsList && GoodsList.map(v => {
                        return <Pannal title={v.name} more={
                            <div className='right'>
                                <div className="sub">
                                    {
                                        v.children?.map(value => {
                                            return <NavLink to={"/category/sub/" + value.id} key={value.id}>{value.name}</NavLink>
                                        })
                                    }
                                </div>
                                <More />
                            </div>}
                            key={v.id}
                        >
                            <div className="box">
                                <span className="cover" to="/">
                                    <Img src={v.picture} alt="" />
                                    <strong className="label">
                                        <span>{v.name}</span>
                                        <span>{v.saleInfo}</span>
                                    </strong>
                                </span>
                                <ul className="goods-list">
                                    {
                                        v.goods.map(val => {
                                            return <li className='goods-item' key={val.id}>
                                                <Goods name={val.name}
                                                    path={val.id}
                                                    img={val.picture}
                                                    desc={val.desc}
                                                    price={val.price}
                                                />
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </Pannal>
                    })
                }


            </div >

        </div >
    )
}
