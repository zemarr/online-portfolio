import React from 'react';
import style from './projects.module.css'

import Layout from '../components/layout'
import GalleryCard from '../components/gallerycard'

const projects = () => {
    return (
        <Layout>
            <section className={style.projectGallery}>
                <div className={style.galley}>
                    <GalleryCard frontImageClass={style.wickretMockup} projectName="Wickret" />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </div>
            </section >
        </Layout >
    );
}

export default projects;