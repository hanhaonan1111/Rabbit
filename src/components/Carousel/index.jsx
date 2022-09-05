import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './index.module.scss'
import Lazyload from "@/components/Lazyload";

function Index({swiper}) {
    let [now, setNow] = useState(0)
    let prev = useRef(null)
    let next = useRef(null)

    useEffect(() => {
        if (prev.current) {
            prev.current.onclick = () => {
                if (now === 0) {
                    return setNow(swiper.length - 1)
                }
                setNow(() => now - 1)

            }
            next.current.onclick = () => {
                if (now === swiper.length - 1) {
                    return setNow(0)
                }
                setNow(() => now + 1)
            }
        }
        return () => {
            prev.current.onclick = null
            next.current.onclick = null
        }

    }, [now, swiper])
    return (
        <div className={style.root}>
            <div className='xtx-carousel'>
                <ul className="carousel-body">
                    {
                        swiper && swiper.map((v, i) => {
                            return (
                                <li key={v.id}
                                    className={["carousel-item", i === now ? 'show' : 'fade'].join(' ')}>
                                    <NavLink to={v.hrefUrl}>
                                        <Lazyload src={v.imgUrl} alt=""></Lazyload>
                                    </NavLink>
                                </li>
                            )
                        })
                    }

                </ul>
                <a className="carousel-btn prev" ref={prev}>
                    <i className="iconfont icon-arrow-left"></i>
                </a>
                <a className="carousel-btn next" ref={next}>
                    <i className="iconfont icon-youjiantou"></i>
                </a>
                <div className="carousel-indicator">
                    {
                        swiper && swiper.map((v, i) => {
                            return <span
                                key={v.id}
                                className={i === now ? 'active' : ''}
                                onClick={() => {
                                    setNow(i)
                                }}
                            ></span>
                        })
                    }


                </div>
            </div>
        </div>
    );
}

export default Index;