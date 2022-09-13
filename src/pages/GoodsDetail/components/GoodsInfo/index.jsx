import React from 'react';
import style from './index.module.scss'

function Index(props) {
    return (
        <div className={style.root}>
            <ul className="goods-sales">
                <li>
                    <p>销量人气</p>
                    <p>200+</p>
                    <p><i className="iconfont icon-task-filling"></i>销量人气</p>
                </li>
                <li>
                    <p>商品评价</p>
                    <p>400+</p>
                    <p><i className="iconfont icon-comment-filling"></i>查看评价</p>
                </li>
                <li>
                    <p>收藏人气</p>
                    <p>600+</p>
                    <p><i className="iconfont icon-favorite-filling"></i>收藏商品</p>
                </li>
                <li>
                    <p>品牌信息</p>
                    <p>苏宁电器</p>
                    <p><i className="iconfont icon-dynamic-filling"></i>品牌主页</p>
                </li>
            </ul>
        </div>
    );
}

export default Index;