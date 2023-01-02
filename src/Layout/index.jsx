import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@/pages/home'
import Category from '@/pages/category'
import style from './index.module.scss'
import Nav from '@/components/Nav/index'
import HeaderSticky from '@/components/HeaderSticky'
import ScrollToTop from '@/components/ScrollToTop'
import Img from '@/components/Img'
export default function Index() {
    let [top, setTop] = useState(0)
    useEffect(() => {
        let fun = () => {
            setTop(window.scrollY)
        }
        window.addEventListener('scroll', fun)
        return () => {
            window.removeEventListener('scroll', fun)
        }
    }, [window.scrollY])

    return (
        <div className={style.root}>
            <nav className="app-topnav">
                <div className="container">
                    <ul>
                        <li><a href=" "><i className="iconfont icon-user"></i>周杰伦</a></li>
                        <li><a href=" ">退出登录</a></li>
                        <li><a href=" ">请先登录</a></li>
                        <li><a href=" ">免费注册</a></li>
                        <li><a href=" ">我的订单</a></li>
                        <li><a href=" ">会员中心</a></li>
                        <li><a href=" ">帮助中心</a></li>
                        <li><a href=" ">关于我们</a></li>
                        <li><a href=" "><i className="iconfont icon-phone"></i>手机版</a></li>
                    </ul>
                </div>
            </nav>
            <header className='app-header'>
                <div className="container">
                    <h1 className="logo"><a href=" ">小兔鲜</a></h1>
                    <Nav />
                    <div className="search">
                        <i className="iconfont icon-search"></i>
                        <input type="text" placeholder="搜一搜" />
                    </div>
                    <div className="cart">
                        <a className="curr" href=" ">
                            <i className="iconfont icon-cart"></i><em>2</em>
                        </a>
                    </div>
                </div>
            </header>
            <main className='container'>


                {<HeaderSticky show={top} />}
                {/* 滚动到顶部(功能性质)组件 */}
                <ScrollToTop></ScrollToTop>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/category/:id' exact key='/category/:id' component={Category}></Route>
                    <Route path='/category/sub/:id' exact key='/category/sub/:id' component={Category}></Route>
                </Switch>
            </main>
            <footer className="app-footer">
                <div className="contact">
                    <div className="container">
                        <dl>
                            <dt>客户服务</dt>
                            <dd><i className="iconfont icon-kefu"></i> 在线客服</dd>
                            <dd><i className="iconfont icon-question"></i> 问题反馈</dd>
                        </dl>
                        <dl>
                            <dt>关注我们</dt>
                            <dd><i className="iconfont icon-weixin"></i> 公众号</dd>
                            <dd><i className="iconfont icon-weibo"></i> 微博</dd>
                        </dl>
                        <dl>
                            <dt>下载APP</dt>
                            <dd className="qrcode"><Img src={require('../assets/images/qrcode.jpg')} alt='' /></dd>
                            <dd className="download">
                                <span>扫描二维码</span>
                                <span>立马下载APP</span>
                                <a href=" ">下载页面</a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>服务热线</dt>
                            <dd className="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
                        </dl>
                    </div>
                </div>
                <div className="extra">
                    <div className="container">
                        <div className="slogan">
                            <a href=" ">
                                <i className="iconfont icon-footer01"></i>
                                <span>价格亲民</span>
                            </a>
                            <a href=" ">
                                <i className="iconfont icon-footer02"></i>
                                <span>物流快捷</span>
                            </a>
                            <a href=" ">
                                <i className="iconfont icon-footer03"></i>
                                <span>品质新鲜</span>
                            </a>
                        </div>
                        <div className="copyright">
                            <p>
                                <a href=" ">关于我们</a>
                                <a href=" ">帮助中心</a>
                                <a href=" ">售后服务</a>
                                <a href=" ">配送与验收</a>
                                <a href=" ">商务合作</a>
                                <a href=" ">搜索推荐</a>
                                <a href=" ">友情链接</a>
                            </p>
                            <p>CopyRight © 小兔鲜儿</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
