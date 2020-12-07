import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Dalu" />
    About Page
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
