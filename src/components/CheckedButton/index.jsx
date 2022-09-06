import React from 'react';
import style from './index.module.scss'

function Default() {
}

function Index({children = '', checked = false, onClick = Default}) {
    return (
        <div className={style.root}>
            <div className={["xtx-checkbox", checked ? 'active' : ''].join(' ')}
                 onClick={onClick}
            >

                {
                    checked ? <i className="iconfont icon-quanxuan"></i> : (
                        <i className="iconfont icon-weixuanzhongyuanquan"></i>)
                }
                <span>{children}</span>
            </div>
        </div>
    );
}

export default Index;