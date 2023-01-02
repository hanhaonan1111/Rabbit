import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
export default function index() {
    return (
        <div className={style.root}>
            <div class='xtx-bread'>
                <div class="xtx-bread-item">
                    <NavLink to="/">首页</NavLink>
                </div>
                <i class="iconfont icon-angle-right"></i>
                <div class="xtx-bread-item">
                    <NavLink to="/category/10000">电器</NavLink>
                </div>
                <i class="iconfont icon-angle-right"></i>
                <div class="xtx-bread-item">
                    <span>空调</span>
                </div>
            </div>
        </div>
    )
}
