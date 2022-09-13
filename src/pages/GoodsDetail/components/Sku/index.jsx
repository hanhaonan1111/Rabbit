import React from 'react';
import style from './index.module.scss'

function Index(props) {
    return (
        <div className={style.root}>
            <div className="goods-sku">
                <dl>
                    <dt>颜色</dt>
                    <dd>
                        <img className="selected"
                             src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png" alt=""/>
                        <img className="disabled"
                             src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png" alt=""/>
                    </dd>
                </dl>
                <dl>
                    <dt>尺寸</dt>
                    <dd>
                        <span className="disabled">10英寸</span>
                        <span className="selected">20英寸</span>
                        <span>30英寸</span>
                    </dd>
                </dl>
                <dl>
                    <dt>版本</dt>
                    <dd>
                        <span>美版</span>
                        <span>港版</span>
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export default Index;