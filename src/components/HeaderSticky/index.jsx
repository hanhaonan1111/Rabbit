import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '@/components/Nav'
import style from './index.module.scss'
export default function Index({ show }) {
    return (
        <div className={style.root}>
            <div className={["app-header-sticky", show > 80 ? '' : 'hide'].join(' ')}>
                <div className="container">
                    <NavLink className="logo" to="/" />
                    <Nav />
                    <div className="right">
                        <NavLink to="/" >品牌</NavLink>
                        <NavLink to="/" >专题</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
