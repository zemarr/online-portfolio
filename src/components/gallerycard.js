import React from "react"
import PropTypes from "prop-types"
// import style from "./gallerycard.module.css"

// I will use styled-components to style the cards and also most of the components as time goes on

import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 5px;
  margin: 15px;
  position: relative;
  border: solid 2px #21212114;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 0px 10px -4px rgb(0 0 0 / 28%);
  transition: all 0.2s ease;
  /* background-color: #2121218c; */

  &:hover {
    box-shadow: 0px 3px 25px -8px rgb(0 0 0 / 28%);
    transition: all 0.2s ease;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 15px 0;
  }
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.226);
  height: 100%;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 520px;
  }
  @media screen and (max-width: 850px) {
    width: 480px;
    /* height: 250px; */
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 230px;
  }
  @media screen and (max-width: 390px) {
    width: 100%;
    height: 180px;
  }
`
const StyledImage = styled("img")`
  border-style: none;
  height: auto;
  width: 100%;
  margin: 0;
  padding: 0;
`

const CardData = styled.div`
  margin: 15px auto;
  padding: 0 15px;
  h3 {
    /* color: #fff; */
    margin-bottom: 15px;
    margin-top: 15px;
  }
  p {
    margin-top: 15px;
    margin-bottom: 0;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

const StyledLink = styled.a`
  color: inherit;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    color: #ec3454 !important;
    text-decoration: none;
  }
`

const ToolList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  li {
    font-size: 15px;
    /* color: #fff; */
    padding-right: 10px;
  }
`

const GalleryCard = ({
  image,
  projectName,
  projectDescription,
  visit,
  technologies,
}) => {
  return (
    <Card>
      <a href={visit}>
        <Overlay>
          <StyledImage src={image} alt="" />
        </Overlay>
      </a>
      <CardData>
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <p>Technologies used:</p>
        <ToolList>
          {technologies.map(techs => (
            <li>{techs}</li>
          ))}
        </ToolList>
        <StyledLink href={visit}>View Project</StyledLink>
      </CardData>
    </Card>
  )
}

GalleryCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  visit: PropTypes.string.isRequired,
}

export default GalleryCard
