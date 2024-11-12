import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faDownload } from '@fortawesome/free-solid-svg-icons'

const CaperucitaRojaPage = () => (
  <Layout>
    <SEO title="Spectacle du Petit Chaperon Rouge" />
    <section className="hero has-background-black has-text-justify has-text-white is-size-5 p-4">
      <h1 className="title is-2 has-text-centered has-text-pcr">Caperucita Roja</h1>
      <h3 className="has-text-centered"><i>Teatro de títeres « a la vista »</i></h3>
      <div className="hero-body columns is-multiline is-vcentered">
        <div className="column is-offset-2 is-3 has-text-centered">
          <StaticImage width={328} src="../images/affiches/afficheCapu.jpg" alt="caperucita roja" style={{ borderRadius: 8 }} />
        </div>
        <div className="column is-offset-1 is-5 is-12-mobile"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease-out-back">
          <p>
            <b>...el más conocido de los cuentos merecía que nos detuviéramos… </b> <br />
            Esta historia de Caperucita roja posee tanto una dimensión simbólica como una función iniciadora
            importante. Está en nuestras manos honrar todas las fuerzas de las imágenes que nos brinda este cuento. </p>
        </div>
      </div>
      <div className="publicMaternellePrimaire" style={{ backgroundColor: "red" }}>Todo público a partir de 2 años y media</div>
      <div className="column is-offset-2 is-8">
        <h3 className="title is-4 has-text-centered has-text-pcr m-2">El origen</h3>
        <p><i> Me inspiré mucho de los escritos de Catherine Dasté que considera que el teatro para niños es como una síntesis de las artes, así como en los textos de Bruno Bettelheim que, además de dar al cuento
          virtudes terapéuticas, declara que el cuento de hadas es ante todo una obra de arte. De esta manera nació esta versión de Caperucita roja, que a la vez de ser fiel a la historia en la versión de los hermanos Grimm, es un espectáculo visual, musical y teatral totalmente lúdico.</i>
        </p>
      </div>
    </section>

    <section className="hero p-4">
      <div className="hero-body columns is-vcentered">
        <div class="column is-6">
          <h1 className="title is-3 has-text-centered has-text-pcr m-2">Fotos del espectáculo</h1>
          <div class="columns is-multiline is-ventered">
            <div className="column"><StaticImage width={512} src="../images/petitChap/dsc2431.jpg" alt="imagePetitChaperon" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/petitChap/loup25.jpg" alt="imagePetitChaperon" style={{ borderRadius: 4 }} /></div>
          </div><div className="columns is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/petitChap/grandmère1.jpg" alt="imagePetitChaperon" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/petitChap/larbre.jpg" alt="imagePetitChaperon" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/petitChap/petitchaperonseul.jpg" alt="imagePetitChaperon" style={{ borderRadius: 4 }} /></div>
            <div className="column is-4"><StaticImage width={512} src="../images/petitChap/dsc2445.jpg" alt="imagePetitChaperon" style={{ borderRadius: 4 }} /></div>
          </div>
        </div>
        <div className="column is-4 is-offset-1"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-easing="ease-out-back">
          <h1 className="title is-3 has-text-centered has-text-pcr m-2">Extractos Video</h1>
          <iframe
            src={"https://www.youtube.com/embed/LmPS2AUyDhw"}
            width="100%" height={328}
            title={"Caperucita Roja"}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section className="hero has-background-white p-4">
      <h1 className="title is-2 has-text-centered m-2">Extractos del libro de visitas</h1>
      <div className="hero-body columns is-multiline">
        <div className="column is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Un spectacle magnifique, riche en émotions. Les petits comme les grands se sont régalés.</b> <br /><i> - Mat les Plantes - Nantes</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Bravo pour ce spectacle captivant mélangeant les arts avec talent.</b> <br /><i> - L.Allain - IUFM  - Nantes</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-delay="1000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Tous, petits et grands émerveillés par ce spectacle exceptionnel, d’une qualité rarement égalée...Du jamais vu.</b> <br /><i> Ecole Joseph Rollo - Auray</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-offset-2 is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-delay="1500"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Un régal de poésie, d’émotion, de rire et de frisson qui a ravi petits et grands.    Bravo!</b><br /> <i>    Ecole Henri Wallon - Rennes</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-offset-1 is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-delay="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Merci de m’avoir offert ce fou rire!!</b> <br /><i> Une maîtresse</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
      </div>
    </section>
    <section className="hero p-4" style={{ backgroundColor: "red" }}>
      <div className="hero-body columns">
        <div className="card column has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">Roja, roja, roja… caperuza roja…</h1>
          <div className="card-content">
            <div className="content">
              <p>
                Así comienza con una canción esta historia tan conocida como el “lobo blanco” (más conocido
                incluso que la ruda)...pero sh...hete aquí ...que llega...está en la caja, te lo juro...<br />
                ...un lobo para armar…<br />
                ...incluso tiene el modo de empleo...<br />
                Pero sí, os lo juro es la verdadera historia de Caperucita roja, con el bizcocho, el tarrito de mantequilla, el picaporte, la abuelita, el cazador...y encima este lobo que entre dos risas se deleita de asustarnos…
              </p>
            </div>
          </div>
        </div>
        <div className="card column has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">La actuación</h1>
          <div className="card-content">
            <div className="content">
              <p>¡Sí! El espectáculo es adecuado tanto para niños de 2 1/ 2  años como para niños de 8 años y más. En efecto el espectáculo puede adaptarse según edades diferentes…así el lobo “montado a la vista”  no es exactamente lo mismo frente a niños de 3 años que ante niños mayores...para un público
                heterogéneo, la actuación es ante todo “ajustada” en función de los más pequeños. El actor enriquece y adapta su rol según el público.
              </p>
              <div className="columns has-text-pcr">
                <div className="column is-offset-1">
                  <a href="/pdf/tarifs-theatre-du-petit-pierre.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Consultar el PDF de los precios </p></a>
                </div>
                <div className="column">
                  <a href="/pdf/dossier-de-presse-fiche-technique-pcr.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Descargar el kit de prensa</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout >
)

export default CaperucitaRojaPage;