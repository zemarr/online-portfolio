import React from "react"
import style from "./index.module.css"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={`Hero`}>
      <Container>
        <div className={style.introduction}>
          <div className={style.heroLeft}>
            <h1>Ayika Chukwudalu</h1>
            <p>
              I'm a freelance <b>Front End Developer</b> focused on building web
              interfaces with awesome <b>user experiences</b>.<br />
              Do you need a website?
            </p>
            <div className={style.mainContact}>
              <Button
                name="LET'S TALK"
                url="#"
                className={style.letsTalk}
              ></Button>
              <Button
                name="MY RESUME"
                url="https://docs.google.com/document/d/1Oe1-qUtZzZ7JXcgRG6qec1lUfHYSNolXZC2zc_LJ6l4/edit"
                className={style.myResume}
              ></Button>
            </div>
            <div className={style.social}>
              <Link
                href="https://github.com/zemarr?tab=repositories"
                target="_blank"
                rel="noreferrer"
                content="github"
                className={style.github}
              ></Link>
              <Link
                href="https://www.linkedin.com/in/ayika-chukwudalu/"
                target="_blank"
                rel="noreferrer"
                content="linkedin"
                className={style.linkedin}
              ></Link>
              <Link
                href="https://www.instagram.com/iamzemar/"
                target="_blank"
                content="instagram"
                className={style.instagram}
              ></Link>
            </div>
          </div>
          <div className={style.heroRight}>
            <div className={style.profileImage}></div>
          </div>
        </div>
      </Container>
    </section>

    <section className={`${style.whatIDo}`}>
      <Container>
        <div className="row component-padding wrap">
          <div className={style.workLeft}>
            <div className={style.workImage}></div>
          </div>
          <div className={`${style.workRight} component-padding`}>
            <p>
              I'm passionate about building{" "}
              <b>responsive websites and web-apps</b>,<br />
              writing custom CSS modules that speed up the development process
              and building clean, consistent User Interfaces using
              <br /> Gatsby and React and W3C best practices.
              <br />
              <br />
              <i>
                Gatsby is a javascript framework that helps developers build
                lightning fast websites by serving (very lightweight) static
                HTML pages, therefore reducing load time.
              </i>
              <br />
              <br />
              Here are some of my projects
            </p>
            <Button
              url="/projects"
              name="SEE MY PROJECTS"
              className={`button-large ${style.seeMyProjects}`}
            />
          </div>
        </div>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
