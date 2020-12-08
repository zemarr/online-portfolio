import React from 'react';
import PropTypes from 'prop-types'
import style from './galleryCard.module.css'

const GalleryCard = ({ frontImageClass, projectName, projectDescription, tools, visit, linkHandle }) => {
    return (
        <div className={style.card}>
            <div className={`${style.front} ${frontImageClass}`}>
                <div className={style.overlay}>
                    <h4>{projectName}</h4>
                </div>
            </div>
            <div className={`${style.back}`}>
                <h5>{projectName}</h5>
                <p>{projectDescription}</p>
                <p><i>{tools}</i></p>
                <a href={visit}
                    rel='noreferrer'
                    target='_blank'>{linkHandle}</a>
            </div>
        </div>
    );
}

GalleryCard.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    linkHandle: PropTypes.string.isRequired
}



export default GalleryCard;