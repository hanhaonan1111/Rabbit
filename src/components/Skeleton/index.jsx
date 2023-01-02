import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'

export default function Index({ width = 0, height = 0, bg = '#000' }) {
    let line = useRef(null)
    let timer = useRef(null)
    let [pos, SetPos] = useState(0)
    useEffect(() => {
        if (pos > 120) {
            SetPos(0)
        }
    }, [pos])
    useEffect(() => {
        if (!line.current) return
        if (timer.current) {
            clearInterval(timer.current)
        }
        timer.current = setInterval(() => {
            line.current.style.left = pos + '%'
            SetPos((pos) => pos + 20)
        }, 100)
        return () => {
            clearInterval(timer.current)
        }

    }, [line.current, timer.current])


    return (

        < div className={style.root} >
            <div style={{ width, height }} className="xtx-skeleton">
                <div className="block" style={{ backgroundColor: bg }} ></div>
                <div className='line' ref={line}></div>
            </div >
        </div >
    )
}
