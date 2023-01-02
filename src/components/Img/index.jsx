import React, { useEffect, useRef } from 'react'

export default function Index({ src, alt = ' ', ...props }) {
    let imgRef = useRef(null)
    useEffect(() => {
        if (!imgRef.current) return
        var io = new IntersectionObserver((entries) => {
            entries.forEach(item => {
                if (item.isIntersecting) {
                    imgRef.current.src = src
                    io.unobserve(item.target)
                }
            })
        }, {
            root: document.querySelector('.root')
        })
        console.log(io.observe(imgRef.current))
    }, [imgRef])
    return (<img src='' {...props} alt={alt} ref={imgRef} />)
}
