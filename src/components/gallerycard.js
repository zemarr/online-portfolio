import React from 'react';
import style from './galleryCard.module.css'

const GalleryCard = ({ frontImageClass, projectName, backDetails }) => {
    return (
        <div className={style.card}>
            <div class={`${style.front} ${frontImageClass}`}>
                <div className={style.overlay}>
                    <h4>{projectName}</h4>
                </div>
            </div>
            <div class={`${style.back}`}>
                <h5>{projectName}</h5>
            </div>
        </div>
    );
}



export default GalleryCard;