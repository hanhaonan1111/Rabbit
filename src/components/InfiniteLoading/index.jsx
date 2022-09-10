import React, {useEffect, useRef, useState} from 'react';
import style from './index.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AsyncGetFilterdGoods, setFilterdGoods, setFilterOption} from "@/store/action/category";

function Index({brandId, attrs, categoryId, condition}) {
    let load = useRef(null)
    let isLoad = useRef(null)
    let {FilterdGoods, FilterOption} = useSelector(v => v.CategoryReducer)
    let dispatch = useDispatch()
    let [page, setPage] = useState(0)
    // 当上面的筛选条件变化之后,就需要更新页码!
    useEffect(() => {
        console.log(condition, 'change')
        setPage(0)
        dispatch(setFilterOption({...FilterOption, page: 1}))

    }, [condition])

    useEffect(() => {
        dispatch(setFilterOption({...FilterOption, page: page + 1}))

        if (page > 1) {
            dispatch(AsyncGetFilterdGoods(FilterOption))
        }
    }, [page])
    useEffect(() => {
        if (load.current) {
            let observer = new IntersectionObserver(([{isIntersecting}]) => {
                if (isIntersecting) {
                    setPage((page) => {
                        if (page === FilterdGoods.pages) {
                            return page
                        }
                        return 1 + page
                    })
                }
            },)
            observer.observe(load.current)
        }
    }, [load.current, page, FilterdGoods.pages])
    return (
        <div className={style.root}>
            <div className="xtx-infinite-loading">
                {
                    (FilterdGoods.pages && (FilterdGoods.pages > FilterdGoods.page)) ?
                        <div className="loading" ref={load}>
                            <span className="img"></span>
                            <span className="text">正在加载...</span>
                        </div> : <div className="none">
                            <span className="img"></span>
                            <span className="text">亲，没有更多了</span>
                        </div>
                }


            </div>
        </div>
    );
}

export default Index;
