import React from "react"
import style from './index.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={`Hero`}>
      <div className="container">
        <div className={style.introduction}>
          <div className={style.heroLeft}>
            <h1>Ayika Chukwudalu</h1>
            <p>I'm a freelance <b>Front End Developer</b> focused on building web interfaces with awesome <b>user experiences</b>.<br />
              Do you need a website?
          </p>
            <div className={style.mainContact}>
              <Button name="LET'S TALK" url="/contact" className={style.letsTalk}></Button>
              <Button name="MY RESUME" url="#" className={style.myResume}></Button>
            </div>
            <div className={style.social}>
              <a href="https://github.com/zemarr?tab=repositories" target="_blank" className={style.github}></a>
              <a href="https://www.linkedin.com/in/ayika-chukwudalu/" target="_blank" className={style.linkedin}></a>
              <a href="https://www.instagram.com/iamzemar/" target="_blank" className={style.instagram}></a>
            </div>
          </div>
          <div className={style.heroRight}>
            <div className={style.profileImage}></div>
          </div>
        </div>
      </div>
    </section>

    <section className={`${style.whatIDo}`}>
      <div className="container">
        <div className={style.sectionHeading}>
          <h2>About me</h2>
        </div>
        <div className="row component-padding">
          <div className={style.workLeft}>
            <div className={style.workImage}></div>
          </div>
          <div className={`${style.workRight} component-padding`}>
            <p>I'm passionate about building <b>responsive websites and web-apps</b>,<br />
                writing custom CSS modules that speed up the development process and building clean,
                consistent User Interfaces using<br /> Gatsby and React and W3C best practices.<br /><br />
              <i>Gatsby is a javascript framework that helps developers build lightning fast websites
                   by serving (very lightweight) static HTML pages, therefore reducing load time.</i><br /><br />

                   Here are some of my projects
            </p>
            <Button url='/projects' name="SEE MY PROJECTS" className={`button-large ${style.seeMyProjects}`} />
          </div>
        </div>
      </div>
    </section>

    
  </Layout>
)

export default IndexPage
