import React from 'react'
import { NavLink } from 'react-router-dom'
import Pannal from '../Pannal'
import More from '@/components/More'
import style from './index.module.scss'
import { useSelector } from 'react-redux'
import Img from '@/components/Img'
export default function Lastest() {
    let { Lastest: LastestList } = useSelector(v => v.home)
    return (<div className={style.root}>
        <Pannal title="最新专题" more={More} >
            <div className="special-list" >
                {
                    LastestList && LastestList.map((v, i) => {
                        return <div className="special-item" key={i} >
                            <NavLink to="/">
                                <Img src={v.detailsUrl} />
                                <div className="meta">
                                    <p className="title">
                                        <span className="top ellipsis">{v.title}</span>
                                        <span className="sub ellipsis">{v.summary}</span>
                                    </p>
                                    <span className="price">&yen;{v.lowestPrice}起</span>
                                </div>
                            </NavLink>
                            <div className="foot">
                                <span className="like"><i className="iconfont icon-hart1"></i>{v.collectNum}</span>
                                <span className="view"><i className="iconfont icon-see"></i>{v.viewNum}</span>
                                <span className="reply"><i className="iconfont icon-message"></i>{v.replyNum}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </Pannal >
    </div>
    )
}
