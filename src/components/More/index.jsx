import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Index({ path = '/' }) {
    return (
        <div>
            <NavLink to={path} className="xtx-more">
                <span>查看全部</span>
                <i className="iconfont icon-angle-right"></i>
            </NavLink>
        </div >
    )
}
