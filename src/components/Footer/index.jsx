import React from 'react';
import style from './index.module.scss'
import img from '@/assets/image/qrcode.jpg'

function Index() {
    return (
        <div className={style.root}>
            <footer className="app-footer">
                <div className="contact">
                    <div className="container">
                        <dl>
                            <dt>客户服务</dt>
                            <dd><i className="iconfont icon-kefu"></i> 在线客服</dd>
                            <dd><i className="iconfont icon-fankui"></i> 问题反馈</dd>
                        </dl>
                        <dl>
                            <dt>关注我们</dt>
                            <dd><i className="iconfont icon-gongzhonghao"></i> 公众号</dd>
                            <dd><i className="iconfont icon-xinlangweibo"></i> 微博</dd>
                        </dl>
                        <dl>
                            <dt>下载APP</dt>
                            <dd className="qrcode">
                                <img alt='' src={img}/>
                            </dd>
                            <dd className="download">
                                <span>扫描二维码</span>
                                <span>立马下载APP</span>
                                <a href="#">下载页面</a>
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
                            <a href="#">
                                <i className="iconfont icon-jiage"></i>
                                <span>价格亲民</span>
                            </a>
                            <a href="#">
                                <i className="iconfont icon-zanfill"></i>
                                <span>物流快捷</span>
                            </a>
                            <a href="#">
                                <i className="iconfont icon-wuliutianchong"></i>
                                <span>品质新鲜</span>
                            </a>
                        </div>

                        <div className="copyright">
                            <p>
                                <a href="#">关于我们</a>
                                <a href="#">帮助中心</a>
                                <a href="#">售后服务</a>
                                <a href="#">配送与验收</a>
                                <a href="#">商务合作</a>
                                <a href="#">搜索推荐</a>
                                <a href="#">友情链接</a>
                            </p>
                            <p>CopyRight © 小兔鲜儿</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Index;