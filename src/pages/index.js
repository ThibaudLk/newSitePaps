import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="index" />
    <section className="hero is-background-black has-text-white">
      <div className="hero-body">
        <div className="container">
          <div id="specnav" className="grid" style={{ marginBottom: 16}}>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/petitChaperonRouge"><StaticImage width={200} style={{ border: "1px solid white" }} src="../images/affiches/afficheChap.jpg" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/caperucitaRoja"><StaticImage width={200} style={{ border: "1px solid white" }} src="../images/affiches/afficheCapu.jpg" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/lilyEtLeLoup"><StaticImage width={200} style={{ border: "1px solid white" }} src="../images/affiches/afficheLily.jpg" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/les3petitsCochons"><StaticImage width={200} style={{ border: "1px solid white" }} src="../images/affiches/affiche3tiCoch.jpg" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/les3cheveuxdOr"><StaticImage width={200} style={{ border: "1px solid white" }} src="../images/affiches/affiche3ChevOr.jpg" alt="Affiche" /></Link></div>
            <div class="cell" style={{ margin: "auto", padding: 10 }} ><Link to="/quandJetaisGrand"><StaticImage width={200} style={{ border: "1px solid white" }} src="../images/affiches/afficheGrand.jpg" alt="Affiche" /></Link></div>
          </div>
        <h1 class="subtitle has-text-white has-text-centered">Des spectacles de qualité pour tous les publics !!</h1>
        </div>
      </div>
    </section>
  </Layout>
)
export default IndexPage;
