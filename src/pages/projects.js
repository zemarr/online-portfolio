import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import GalleryCard from "../components/gallerycard"
import { Container } from "."

import wickret from "../images/Wickret.png"
import busvest from "../images/BusVest.jpg"
import xo from "../images/tic-tac-toe.png"
import liight from "../images/liight/Liight(2).png"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <GalleryCard
          image={wickret}
          projectName="Wickret"
          projectDescription="This was while back, just when I started realizing the power that CSS possesses. I came across Cuberto's website (Wickret) and decided to test myself and recreate the landing page to the best of my abilities."
          visit="https://zemarr.github.io/Wickret-landing-page/"
          technologies={["HTML", "CSS", "Javascript"]}
        />
        <GalleryCard
          image={busvest}
          projectName="BusVest"
          projectDescription="Transportation can be a very lucrative sector in our society. There are over 13 million people residing and working all around Lagos. BusVest aims to leverage the co-existence between investments and transportation thereby bringing about a more stable transportation system and more employment opportunities in various other sectors of the economy."
          visit="https://busvest.co/"
          technologies={["React", "Styled Components", "Javascript"]}
        />
        <GalleryCard
          image={liight}
          projectName="Liight"
          projectDescription="JoslaNG Hackathon. Liight is a an online platform used to recharge and fund your Electric bills all from a single web-based app."
          visit="https://liight-genesis-1097f8.netlify.app/"
          technologies={["React", "SCSS", "Javascript"]}
        />
        <GalleryCard
          image={xo}
          projectName="Javascript TicTacToe Game"
          projectDescription="All traditional chances of scoring a win against CP are made much more difficult. You'll need to be very good to win the game"
          visit="http://bit.ly/2TkX-0u0JG"
          technologies={["Javascript"]}
        />
      </Container>
    </Layout>
  )
}

export default Projects
