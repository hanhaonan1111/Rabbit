import React from 'react'
import style from './index.module.scss'
export default function Index({ title, subTitle, children, more }) {
    return (
        <div className={style.root}>
            <div className="home-panel">
                <div className="container">
                    <div className="head">
                        <h3>{title} <small>{subTitle}</small></h3>
                        {
                            more
                        }
                    </div>
                    {
                        children
                    }
                </div>
            </div></div>
    )
}
