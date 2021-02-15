import React from 'react';
import style from './projects.module.css'
import SEO from "../components/seo"

import Layout from '../components/layout'
import GalleryCard from '../components/gallerycard'

const Projects = () => {
    return (
        <Layout>
            <SEO title="Projects" />
            <section className={style.projectGallery}>
                <div className='container'>
                    <div className="row wrap center-all">
                        <GalleryCard
                            frontImageClass={style.wickretMockup}
                            projectName="Wickret"
                            visit='https://zemarr.github.io/Wickret-landing-page/'
                        />
                        <GalleryCard
                            frontImageClass={style.busvestMockup}
                            projectName="BusVest"
                            visit='https://busvest.co/'
                        />
                        <GalleryCard
                            frontImageClass={style.XOMockup}
                            projectName="TicTacToe"
                            visit='http://bit.ly/2TkX-0u0JG'
                        />
                        <GalleryCard
                            frontImageClass={style.Liight}
                            projectName="Liight"
                            visit='https://liight-genesis-1097f8.netlify.app/'
                        />
                    </div>
                </div>
            </section >
        </Layout >
    );
}

export default Projects;