import React, {useEffect, useRef, useState} from 'react';
import Bread from "@/components/Bread";
import BreadItem from "@/components/Bread/BreadItem";
import style from './index.module.scss'
import GoodsRelevant from "@/pages/GoodsDetail/components/GoodsRelevant";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AsyncGetBread} from "@/store/action/detail";
import GoodsInfo from "@/pages/GoodsDetail/components/GoodsInfo";
import RightSection from "@/pages/GoodsDetail/components/RightSection";
import Sku from "@/pages/GoodsDetail/components/Sku";

function Index(props) {
    let dispatch = useDispatch()
    let {id} = useParams()
    useEffect(() => {
        dispatch(AsyncGetBread(id))
    }, [dispatch, id])
    let {bread} = useSelector(v => v.DetailReducer)
    let [current, setCurrent] = useState(0)


    let lay = useRef(null)
    let middle = useRef(null)

    let [show, setShow] = useState(false)
    useEffect(() => {
        console.log(lay.current)
        middle.current.addEventListener('mouseenter', (e) => {
            setShow(true)
        })
        middle.current.addEventListener('mousemove', (e) => {
            setShow(true)
        })
        middle.current.addEventListener('mouseleave', (e) => {
            setShow(false)
        })
    }, [lay.current])
    return (
        <div className={style.root}>
            <div className='xtx-goods-page'>
                <div className="container">
                    {
                        bread.name && <Bread split='>'>
                            <BreadItem to="/">首页</BreadItem>
                            <BreadItem to={'/category/' + bread.categories[0].id}>{bread.categories[1].name}</BreadItem>
                            <BreadItem to={'/category/' + bread.categories[1].id}>{bread.categories[0].name}</BreadItem>
                            <BreadItem>{bread.name}</BreadItem>
                        </Bread>
                    }
                    <div className="goods-info">
                        <div className="media">
                            <div className="goods-image">
                                <div className={["large", show ? 'active' : ''].join(' ')}></div>
                                <div
                                    className="middle"
                                    ref={middle}
                                >
                                    {
                                        bread.mainPictures && <img
                                            src={bread.mainPictures[current]} alt=''
                                        />
                                    }
                                    <div
                                        className={["layer", 'layer2', show ? 'active' : ''].join(' ')}
                                        ref={lay}
                                    ></div>
                                </div>
                                <ul className="small">
                                    {
                                        bread.mainPictures && bread.mainPictures.map((v, i) => {
                                            return <li
                                                key={i}
                                                onMouseEnter={() => {
                                                    setCurrent(i)
                                                }
                                                }
                                                className={i === current ? 'active' : ''}
                                            >
                                                <img alt="" src={v}/>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <GoodsInfo></GoodsInfo>
                        </div>
                        <div className="spec">
                            <RightSection data={bread}></RightSection>
                            <Sku></Sku>
                        </div>
                    </div>

                    <GoodsRelevant/>

                    <div className="goods-footer">
                        <div className="goods-article">
                            <div className="goods-tabs"></div>
                            <div className="goods-warn"></div>
                        </div>
                        <div className="goods-aside"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;