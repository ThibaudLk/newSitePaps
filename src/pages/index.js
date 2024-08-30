import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'react-scroll'

const IndexPage = () => (
  <Layout>
    <SEO title="index" />
    <section className="hero is-background-black has-text-white">
      <div className="hero-body">
        <div className="container">
          <div id="specnav" className="grid" style={{ marginBottom: 16}}>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/"><StaticImage style={{ border: "1px solid white" }} src="../images/petitchap.png" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/"><StaticImage style={{ border: "1px solid white" }} src="../images/petitchap.png" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/"><StaticImage style={{ border: "1px solid white" }} src="../images/petitchap.png" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/"><StaticImage style={{ border: "1px solid white" }} src="../images/petitchap.png" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/"><StaticImage style={{ border: "1px solid white" }} src="../images/petitchap.png" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/"><StaticImage style={{ border: "1px solid white" }} src="../images/petitchap.png" alt="Affiche" /></Link></div>
          </div>
        <h1 class="subtitle has-text-white has-text-centered">Des spectacles de qualité pour tous les publics !!</h1>
        </div>
      </div>
    </section>
  </Layout>
)
export default IndexPage;
