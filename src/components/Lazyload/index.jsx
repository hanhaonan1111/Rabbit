import React, {useEffect, useRef} from 'react';

function Index({src, ...rest}) {
    let image = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([{isIntersecting}]) => {
            if (isIntersecting) {
                observer.unobserve(image.current)
                image.current.src = src
            }
        }, {
            threshold: 0.01
        })
        observer.observe(image.current)
    }, [image.current])
    return (
        <img src="" ref={image} alt='' data-a='ABC'/>
    );
}

export default Index;