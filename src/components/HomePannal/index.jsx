import React from 'react';
import style from './index.module.scss'

function Index({title, subTitle, children}) {
    return (
        <div className={style.root}>
            <div className="home-panel">
                <div className="container">
                    <div className="head">
                        <h3>{title}<small>{subTitle}</small></h3>
                        {
                            children
                        }
                    </div>
                    <slot/>
                </div>
            </div>
        </div>
    );
}

export default Index;