import React from 'react';
import PropTypes from 'prop-types';
import style from './gallerycard.module.css';

// I will use styled-components to style the cards and also most of the components as time goes on

import styled from 'styled-components'

const GalleryCard = ({ frontImageClass, projectName, visit }) => {
    return (
        <div className={style.card}>
            <a href={visit}>
                <div className={`${style.thumbImage} ${frontImageClass}`}>
                    <div className={style.overlay}>
                    </div>
                </div>
            </a>
            <p>{projectName}</p>
        </div>
    );
}

GalleryCard.propTypes = {
    projectName: PropTypes.string.isRequired,
    visit: PropTypes.string.isRequired
}



export default GalleryCard;