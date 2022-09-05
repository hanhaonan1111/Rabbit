import React, {useEffect, useRef, useState} from 'react';
import style from './index.module.scss'
import {NavLink} from "react-router-dom";

function Index3({split, children}) {
    let text = children[children.length - 1].props.children
    let iTag = useRef(null)
    let ref = useRef('')
    let [data, setData] = useState('')


    useEffect(() => {
        iTag.current.classList.add('stop')
        setTimeout(() => {
            iTag.current.classList.remove('stop')
            setData(text)
            ref.current = text
        }, 500)

    }, [text])


    return (
        <div className={style.root}>
            <div className='xtx-bread'>
                {
                    children.map((v, i) => {
                        return <div className="xtx-bread-item" key={i}>
                            {
                                i < children.length - 1 ?
                                    <NavLink to={v.props.path ? v.props.path : '/'}>{v.props.children}</NavLink> :
                                    (
                                        <div className='lastBox'>
                                            <span className={['after'].join(' ')}
                                                  ref={iTag}
                                            >{data}</span>
                                        </div>
                                    )
                            }
                            {
                                i < children.length - 1 && <i>{split}</i>
                            }
                        </div>


                    })
                }  </div>

        </div>
    );
}

export default Index3;