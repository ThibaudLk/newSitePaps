import React from 'react';

// Components
import Layout from '../components/layout'
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
/* import { Link } from 'react-scroll' */

const ContactPage = () => (
  <Layout>
    <SEO title="Me contacter" />
    <section className="hero has-background-black has-text-white p-2">
      <div className="hero-body columns">
        <div className="card column is-offset-3 is-6 has-background-white">
          <h1 className="title is-2 has-text-centered has-text-secondary m-2">Me contacter</h1>
          <div className="card-content">
            <div className="content">
              <p> <u>Par mail :</u> <a href="mailto:fl.kagenaar@orange.fr"> fl.kagenaar@orange.fr</a></p>
              <p> <u>Par Téléphone :</u> 06.70.75.09.15 </p>
              <p> <u>Par formulaire de contact :</u> </p>
              <ContactForm className="has-text-white" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="has-text-centered is-size-4">
          <b>Théâtre du Petit Pierre</b> <br/>
          3, La Haie Cochard <br/>
          44630 Plessé
        </p>
      </div>
    </section>
  </Layout>
)
export default ContactPage;
