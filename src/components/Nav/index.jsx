import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AsyncGetTopCategory } from '@/store/actions/home'
import { useHistory } from 'react-router'
import Img from '@/components/Img'
export default function App() {
    let { topNav } = useSelector(v => v.home)
    let dispatch = useDispatch()
    let history = useHistory()
    useEffect(() => {
        dispatch(AsyncGetTopCategory())
    }, [dispatch])

    const [id, setId] = useState(-1)
    return (
        <div className={style.root}>
            <ul className="app-header-nav">
                <li className="home" onClick={() => {
                    history.push('/')
                }}><span>首页</span></li>
                {topNav.map((v, i) => {
                    // 一级菜单栏
                    return <li key={i} onMouseEnter={() => {
                        setId(v.id)
                    }} onMouseLeave={() => {
                        setId(-1)
                    }}
                        className={[id === v.id ? "enter" : '',].join(' ')}
                    >
                        <span onClick={() => {
                            history.push('/category/' + v.id)
                            setId(-1)
                        }}>{v?.name}</span>
                        <div className={['layer'].join(' ')}>
                            <ul>
                                {
                                    v.children && v.children.map(val => {
                                        return <li key={val.id}>
                                            <span
                                                // 二级菜单栏
                                                onClick={() => {
                                                    history.push('/category/sub/' + val.id)
                                                    setId(-1)
                                                }}
                                            >
                                                <Img src={val.picture} alt="" />
                                                <p>{val.name}</p>
                                            </span>
                                        </li>
                                    })
                                }

                            </ul>
                        </div>
                    </li>
                })}

            </ul>
        </div >
    )
}
