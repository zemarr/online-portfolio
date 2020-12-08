import React from 'react';
import style from './projects.module.css'

import Layout from '../components/layout'
import GalleryCard from '../components/gallerycard'

const Projects = () => {
    return (
        <Layout>
            <section className={style.projectGallery}>
                <div className={style.galley}>
                    <GalleryCard
                        frontImageClass={style.wickretMockup}
                        projectName="Wickret"
                        projectDescription='A landing page of Wickret I cloned from scratch. 
                        Wickret is Modern online banking website I found very visually appealing. 
                        I was driven to test myself and recreate it.'
                        tools='Tools: HTML | CSS | JAVASCRIPT'
                        visit='https://zemarr.github.io/Wickret-landing-page/'
                        linkHandle="Visit"
                    />
                    <GalleryCard
                        frontImageClass={style.busvestMockup}
                        projectName="BusVest"
                        projectDescription='BusVest is an innovative digital platform that gives 
                        everyone the opportunity to generate revenue from public transportation 
                        anytime and anywhere by funding buses.'
                        tools='Tools: HTML | CSS | JAVASCRIPT'
                        visit='https://busvest.co/'
                        linkHandle="Invest in Public tranportation"
                    />
                    <GalleryCard
                        frontImageClass={style.XOMockup}
                        projectName="Tic-Tac-Toe"
                        projectDescription='A Javascript game.

                        Take turns to fill the boxes until a player wins'
                        tools='Tools: JAVASCRIPT'
                        visit='http://bit.ly/2TkX-0u0JG'
                        linkHandle="Play now"
                    />

                    {/* <GalleryCard />
                    <GalleryCard />
                    <GalleryCard /> */}
                </div>
            </section >
        </Layout >
    );
}

export default Projects;