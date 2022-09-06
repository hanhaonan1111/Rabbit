import React, {useEffect, useState} from 'react';
import style from './index.module.scss'
import Bread from "@/components/Bread";
import BreadItem from "@/components/Bread/BreadItem";
import {useDispatch, useSelector} from "react-redux";
import {AsyncSubCategory} from '@/store/action/category'
import {useParams} from "react-router-dom";
import Skeleton from "@/components/Skeleton";
import Sort from "@/pages/SubCategory/component/Sort";

function SunCategory(props) {
    let dispatch = useDispatch()
    let {id} = useParams()
    useEffect(() => {
        dispatch(AsyncSubCategory(id))
    }, [id])
    let {SubCatagoryList} = useSelector(v => v.CategoryReducer)

    let [condition, setCondition] = useState({
        categoryId: id,
        // 上面的筛选条件
        brandId: null,
        attrs: [],
        // 下面的筛选条件
        inventory: false,
        onlyDiscount: false,
        // 加载页数
        page: 1,
        pageSize: 20,
        // 排序的复选框
        sortField: null,
        sortMethod: null
    })
    return (
        <div className={style.root}>
            <div className='sub-category'>
                <div className="container">
                    {/*面包屑*/}
                    {
                        SubCatagoryList ? <Bread split='>'>
                            <BreadItem to="/">首页</BreadItem>
                            <BreadItem
                                to={'/category/' + SubCatagoryList.parentId}>{SubCatagoryList.parentName}</BreadItem>
                            <BreadItem>{SubCatagoryList.name}</BreadItem>

                        </Bread> : <div className='load'>
                            <Skeleton width={40} height={20} bg='rgba(0,0,0,.2)' className='skeleton'></Skeleton>
                            >
                            <Skeleton width={40} height={20} bg='rgba(0,0,0,.2)' className='skeleton'></Skeleton>
                            >
                            <Skeleton width={40} height={20} bg='rgba(0,0,0,.2)' className='skeleton'></Skeleton>

                        </div>
                    }
                    {/*筛选区域*/}
                    <div className="sub-filter">
                        <div className="item">
                            <div className="head">品牌：</div>
                            <div className="body">
                                {SubCatagoryList.brands &&
                                    <a className={condition.brandId === null ? 'active' : ''} onClick={() => {
                                        setCondition({
                                            ...condition,
                                            brandId: null
                                        })
                                    }}>全部</a>}
                                {
                                    SubCatagoryList.brands ? SubCatagoryList.brands.map(v => {
                                        return <a key={v.id}
                                                  className={condition.brandId === v.id ? 'active' : ''}
                                                  onClick={() => {
                                                      setCondition({...condition, brandId: v.id})
                                                  }}>{v.name}</a>
                                    }) : <a>
                                        <Skeleton width={660} height={30} bg='rgba(0,0,0,.2)'
                                                  className='skeleton2'></Skeleton>
                                    </a>
                                }
                            </div>
                        </div>
                        {
                            SubCatagoryList.saleProperties ? SubCatagoryList.saleProperties.map(v => {
                                let index = condition.attrs.find(val => val.groupName === v.name)
                                return <div className="item" key={v.id}>
                                    <div className="head">{v.name}</div>
                                    <div className="body">
                                        <a className={!index ? 'active' : ''} onClick={() => {
                                            index.groupName = null
                                            condition.attrs = condition.attrs.filter(data => data.groupName)
                                            setCondition({...condition})
                                        }
                                        }>全部</a>

                                        {
                                            v.properties.map(val => {
                                                return <a key={val.id}
                                                          className={index?.propertyName === val.name ? 'active' : ''}
                                                          onClick={() => {
                                                              if (!index) {
                                                                  setCondition({
                                                                      ...condition,
                                                                      attrs: [
                                                                          ...condition.attrs,
                                                                          {
                                                                              groupName: v.name,
                                                                              propertyName: val.name,
                                                                          }
                                                                      ]
                                                                  })
                                                              } else {
                                                                  index.propertyName = val.name
                                                                  setCondition({
                                                                      ...condition,
                                                                  })
                                                              }
                                                          }
                                                          }
                                                >{val.name}</a>
                                            })
                                        }
                                    </div>
                                </div>
                            }) : new Array(5).fill(0).map((v, i) => {
                                return <div className="item" key={i}>
                                    <div className="head">
                                        <Skeleton width={60} height={30} bg='rgba(0,0,0,.2)'></Skeleton>
                                    </div>
                                    <div className="body">
                                        <a>
                                            <Skeleton width={580 + 100 * (i + 1)} height={30} bg='rgba(0,0,0,.2)'
                                                      className='skeleton2'></Skeleton>
                                        </a>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                    {/*二级筛选区域*/}
                    <Sort className='margin' condition={condition} setCondition={setCondition}></Sort>
                </div>

            </div>
        </div>
    );
}

export default SunCategory;