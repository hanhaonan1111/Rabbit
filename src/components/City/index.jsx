import React, {useEffect, useState} from 'react';
import style from './index.module.scss'
import http from '@/utils/request'
import loading from '@/assets/image/load.gif'

function Index({citys}) {
    let [open, setOpen] = useState(false)
    let [currentCityList, setcurrentCityList] = useState()
    let [count, setCount] = useState(0)
    let [address, setAddress] = useState([])

    useEffect(() => {
        if (!window.city) {
            http({
                url: 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
            }).then(res => {
                window.city = res
                setcurrentCityList(window.city)
            })
        } else {
            setcurrentCityList(window.city)
        }
    }, [])
    useEffect(() => {
        setCount(0)
        setcurrentCityList(window.city)
        if (open) {
            setAddress([])
        }
    }, [open])
    return (
        <div className={style.root}>
            <div className="xtx-city">
                <div className="select">
                    <span className="placeholder" onClick={
                        () => {
                            setOpen((open) => !open)
                        }
                    }>{address.length > 0 ? address.join('-') : '请选择配送地址'}</span>
                    <span className="value"></span>
                    <i className="iconfont icon-angle-down"></i>
                </div>
                {
                    open && <div className={["option"].join(' ')}>
                        {currentCityList ? currentCityList.map(v => {
                                return <span className="ellipsis" key={v.name} onClick={() => {
                                    setcurrentCityList(v.areaList)
                                    setCount((count) => {
                                        if (count === 2) {
                                            setOpen(false)
                                        }
                                        return ++count
                                    })
                                    setAddress([...address, v.name])
                                }
                                }>{v.name}</span>
                            }) :
                            <img src={loading} alt=''/>
                        }
                    </div>
                }

            </div>
        </div>
    );
}

export default Index;