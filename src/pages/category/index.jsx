import React from 'react'
import Bread from '@/components/Bread'
import Item from '@/components/Bread/Item'
export default function Index() {


    return (
        <div>
            {/* 面包屑部分 */}
            <Bread>
                <Item to="/"> 首页</Item>
                <Item to="/category/10000"> 家电</Item>
            </Bread>
        </div>
    )
}
