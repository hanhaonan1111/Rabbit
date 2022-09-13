import React from 'react';
import style from './index.module.scss'
import City from "@/components/City";

function Index({data}) {
    if (!data) return null
    return (
        <div className={style.root}>
            <p className="g-name">{data.name}</p>
            <p className="g-desc">{data.desc}</p>
            <p className="g-price">
                <span>{data.price}</span>
                <span>{data.oldPrice}</span>
            </p>
            <div className="g-service">
                <dl>
                    <dt>促销</dt>
                    <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                    <dt>配送</dt>
                    <dd className='to'>至
                        &nbsp;&nbsp;<City></City>
                    </dd>
                </dl>
                <dl>
                    <dt>服务</dt>
                    <dd>
                        <span>无忧退货</span>
                        <span>快速退款</span>
                        <span>免费包邮</span>
                        <a>了解详情</a>
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export default Index;
