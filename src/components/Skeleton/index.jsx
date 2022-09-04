import React from 'react';
import style from './index.module.scss'

function Index({width, height, bg, className}) {
    return (

        <div className={["xtx-skeleton", 'animate', className].join(' ')}
             style={{width: width + 'px', height: height + 'px'}}>
            <div className="block" style={{backgroundColor: bg}}></div>
        </div>


    );
}

export default Index;