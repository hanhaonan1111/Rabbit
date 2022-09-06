import React from 'react';
import style from './index.module.scss'
import CheckedButton from "@/components/CheckedButton";

function Index({className = '', setCondition, condition}) {
    let Field = [
        {name: '默认排序', condition: null},
        {name: '最新商品', condition: 'publishTime'},
        {name: '最高人气', condition: 'orderNum'},
        {name: '评论最多', condition: 'evaluateNum'},
    ]

    return (
        <div className={[style.root, className].join(' ')}>
            <div className='sub-sort'>
                <div className="sort">
                    {
                        Field.map(v => {
                            return <a
                                key={v.name}
                                className={condition.sortField === v.condition ? 'active' : ''}
                                onClick={() => {
                                    setCondition({
                                        ...condition,
                                        sortField: v.condition
                                    })
                                }}
                            >{v.name}</a>
                        })
                    }
                    <a
                        onClick={() => {
                            let method = condition.sortMethod === 'asc' ? 'desc' : 'asc'
                            setCondition({
                                ...condition,
                                sortMethod: method
                            })
                        }}
                    >
                        价格排序
                        <i
                            onClick={() => {
                                setCondition({
                                    ...condition,
                                    sortMethod: 'asc'
                                })
                            }}
                            className={["arrow up", condition.sortMethod === 'asc' ? 'active' : ''].join(' ')}/>
                        <i
                            onClick={() => {
                                setCondition({
                                    ...condition,
                                    sortMethod: 'desc'
                                })
                            }}
                            className={["arrow down", condition.sortMethod === 'desc' ? 'active' : ''].join(' ')}/>
                    </a>
                </div>
                <div className="check">
                    <CheckedButton checked={condition.inventory} onClick={() => {
                        setCondition({
                            ...condition,
                            inventory: !condition.inventory
                        })
                    }}>仅显示有货商品</CheckedButton>
                    <CheckedButton checked={condition.onlyDiscount} onClick={() => {
                        setCondition({
                            ...condition,
                            onlyDiscount: !condition.onlyDiscount
                        })
                    }}>仅显示特惠商品</CheckedButton>
                </div>
            </div>
        </div>
    );
}

export default Index;