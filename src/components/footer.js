import React from 'react';
import style from './footer.module.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={style.copyright}>
                    &copy;ZEMAR {new Date().getFullYear()}, Built with {` `}
                    <a href="https://www.gatsbyjs.com">GatsbyJS</a>
                </div>
            </footer>


        </>

    );
}

export default Footer;