import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
export default function Index({ children }) {
    return (
        <div className={style.root}>
            <div className='xtx-bread'>
                {
                    children.map((v, i) => {
                        let props = v.props
                        return <div key={i}>
                            <div className="xtx-bread-item">
                                <NavLink to={props.to}>{props.children}</NavLink>
                                {
                                    i !== children.length - 1 && <i className="iconfont icon-angle-right"></i>
                                }
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
