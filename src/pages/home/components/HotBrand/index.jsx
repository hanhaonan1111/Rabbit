import { AsyncHotBrand } from '@/store/actions/home'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Pannal from '../Pannal'
import style from './index.module.scss'

export default function Index() {
    let dispatch = useDispatch()
    let { HotBrand } = useSelector(v => v.home)
    useEffect(() => {
        dispatch(AsyncHotBrand())
    }, [dispatch])
    let [cur, setCur] = useState(0)

    return (
        <div className={style.root}>
            <Pannal title="热门品牌" sub-title="国际经典 品质保证" more={
                <>
                    <span className={[" iconfont icon-angle-left prev", cur === 0 ? "disabled" : ''].join(' ')} onClick={() => {
                        setCur(0)
                    }}></span>
                    <span className={["iconfont icon-angle-right next", cur === 1 ? "disabled" : ''].join(' ')} onClick={() => {
                        setCur(1)
                    }}></span>
                </>
            }>
                <div className="box"  >
                    <ul className={["list", cur === 1 ? 'second' : ''].join(' ')}>
                        {
                            HotBrand && HotBrand.map(v => {
                                return <li key={v.id}>
                                    <NavLink to="/">
                                        <img src={v.picture} alt="" />
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </Pannal >
        </div >
    )
}
