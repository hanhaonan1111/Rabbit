import React from 'react';
import style from './index.module.scss'

function Index() {
    return (
        <div className={style.root}>
            <nav className="app-topnav">
                <div className="container">
                    <ul>
                        {/*<li><a href="#"><i className="iconfont icon-user"></i>周杰伦</a></li>*/}
                        {/*<li><a href="#">退出登录</a></li>*/}
                        <li><a href="#">请先登录</a></li>
                        <li><a href="#">免费注册</a></li>
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">会员中心</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#"><i className="iconfont icon-shouji"></i>手机版</a></li>

                        {/*<li>*/}
                        {/*    <div><a href="#"><i className="iconfont icon-user"></i>1148159570</a>*/}
                        {/*    </div>*/}
                        {/*    <div><a href="#">退出登录</a></div>*/}
                        {/*</li>*/}


                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Index;