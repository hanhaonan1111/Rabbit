import React from 'react';
import HomeCategory from "@/components/HomeCategory";
import style from './index.module.scss'

function Index(props) {
    return (
        <div className={style.root}>
            <div className="page-home">
                <div className="home-entry">
                    <div className="container">
                        <HomeCategory></HomeCategory>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;