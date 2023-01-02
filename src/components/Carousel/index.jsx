import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
import Img from '@/components/Img'
export default function Index({ imgs }) {
    let [cur, setCur] = useState(0)
    let { current } = useRef(null)
    useEffect(() => {
        if (current) return
        current = setInterval(() => {
            // 考虑到闭包的存在,必须为函数形式
            setCur((cur) => 1 + cur)
        }, 3000)

    }, [current])

    useEffect(() => {
        if (cur < 0) {
            // 考虑到闭包的存在,必须为函数形式
            setCur(() => imgs.length - 1)
        } else if (imgs.length <= cur) {
            setCur(() => 0)
        }
    }, [cur])


    return (
        <div className={style.root}>
            <div className='xtx-carousel'>
                <ul className="carousel-body">

                    {imgs.length > 0 && imgs.map((v, i) => <li className={["carousel-item fade", cur === i ? '' : 'hide'].join(' ')} key={i} >
                        <NavLink to={v.hrefUrl}>
                            <Img src={v.imgUrl} alt="" />
                        </NavLink>
                    </li>)
                    }

                </ul>
                <div className="carousel-btn prev" onClick={() => {
                    setCur(() => --cur)
                }}><i className="iconfont icon-angle-left"></i></div>
                <div className="carousel-btn next" onClick={() => {
                    setCur(() => ++cur)
                }}><i className="iconfont icon-angle-right"></i></div>
                <div className="carousel-indicator">
                    {
                        new Array(imgs.length).fill(0).map((v, i) => <span
                            key={i}
                            className={[cur === i ? 'active' : ''].join(' ')}
                            onClick={() => {
                                setCur(() => i)
                            }}
                        ></span>)
                    }
                </div>
            </div>
        </div >
    )
}
