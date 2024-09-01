import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

import backgroundImage from "../images/backgroundCochons.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faDownload } from '@fortawesome/free-solid-svg-icons'

const Les3petitsCochonsPage = () => (
  <Layout>
    <SEO title="Spectacle des 3 petits cochons" />
    <section className="hero has-background-black has-text-justify has-text-white is-size-5 p-4">
      <h1 className="title is-2 has-text-centered" style={{ color: "#FFC003" }}>La véritable histoire des 3 petits cochons</h1>
      <h3 className="has-text-centered"><i>Un spectacle écrit et mis en scène par Francis L.Kagenaar, comédien</i></h3>
      <div className="hero-body columns is-multiline is-vcentered">
        <div className="column is-offset-2 is-3 has-text-centered">
          <StaticImage width={328} src="../images/affiches/affiche3tiCoch.jpg" alt="affiche les 3 petits Cochons" style={{ borderRadius: 8, border: "2px solid #FFC003" }} />
        </div>
        <div className="column is-6 is-12-mobile"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease-out-back">
          <p> Il y a tellement de versions des «Petits Cochons», que Francis, le comédien,
            ne sait laquelle raconter. Fort heureusement, le loup de cette histoire, devenu vieux
            et doux comme un agneau, va l’aider et lui permettre de raconter  enfin... <br />
            la <i><b>«véritable histoire des Trois Petits Cochons».</b></i>
          </p>
        </div>
      </div>
      <div className="publicMaternellePrimaire" style={{ backgroundColor: "#FFC003" }}> public : maternelles & primaires</div>
      <div className="column is-offset-2 is-8">
        <p>
          Ce conte est traité ici de façon originale, avec joie et humour, mais aussi avec la volonté de respecter la «vraie» histoire des Trois Petits Cochons.  Les enfants vont donc à la rencontre de Bulle, de Bill et de Boss. Chaque petit cochon construit sa maison, avec plus ou moins de réussite, selon sa propre
          personnalité.<br />
          L’enfant constate à travers cette histoire que si l’effort apporte des satisfactions, il  peut  aussi permettre de se mettre à l’abri du danger!
        </p>
      </div>
    </section>

    <section className="hero p-4">
      <div className="hero-body columns is-vcentered">
        <div class="column is-6">
          <h1 className="title is-3 has-text-centered m-2">Photos du spectacle</h1>
          <div class="columns is-multiline is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/les3petitsCochons/Levieuxloupraconte.png" alt="images3petitsCochons" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/les3petitsCochons/LaMaisondeBulle.png" alt="images3petitsCochons" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/les3petitsCochons/LaMaisondeBoss.png" alt="images3petitsCochons" style={{ borderRadius: 4 }} /></div>
          </div><div className="columns is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/les3petitsCochons/Ilssenvont.png" alt="images3petitsCochons" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/les3petitsCochons/LaMaisondeMaman.png" alt="images3petitsCochons" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/les3petitsCochons/MaisondeBill.png" alt="images3petitsCochons" style={{ borderRadius: 4 }} /></div>
          </div>
        </div>
        <div className="column is-4 is-offset-1"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-easing="ease-out-back">
          <h1 className="title is-3 has-text-centered m-2">Extraits vidéo</h1>
          <iframe
            src={"https://www.youtube.com/embed/mAJ6yr1oiKY"}
            width="100%" height={328}
            title={"Vidéo des 3 Petits Cochons"}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section className="hero has-background-white p-4">
      <h1 className="title is-2 has-text-centered m-2">Extraits du Livre d'Or</h1>
      <div className="hero-body columns is-multiline">
        <div className="column is-offset-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Spectacle de très grand qualité et accessible des plus petits aux plus grands!</b> <br /><i>Ecole primaire publique Corseul</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
      </div>
    </section>
    <section className="hero has-background-black p-4" style={{ backgroundImage: 'url(' + backgroundImage + ')', backgroundSize: "cover", backgroundPosition: "bottom center" }}>
      <div className="hero-body columns">
        <div className="card column is-offset-2 is-8 has-background-white">
          <h1 className="title is-3 has-text-centered m-2 has-text-secondary">Les techniques utilisées</h1>
          <div className="card-content">
            <div className="content">

              <p>

                <h1 className="title is-5 m-2 has-text-secondary">La marionnette : </h1>
                Utilisée «à vue», que ce soit pour le vieux loup (grande marionnette) que pour les trois petits cochons et le jeune loup (petites marionnettes).
                <h1 className="title is-5 m-2 has-text-secondary">Le théâtre d’ombre : </h1>
                On voit la maison de la
                maman, puis le voyage des trois petits cochons
                jusqu’à la construction de leur maison.
                <h1 className="title is-5 m-2 has-text-secondary">La peinture : </h1>
                Le support du théâtre d'ombre est en partie peint à vue, derrière le castelet et sert de décor pour le théâtre d'ombres.
                <h1 className="title is-5 m-2 has-text-secondary">La musique : </h1>
                Il y a à la fois des chansons (chaque cochon a sa propre chanson) et de très belles mélodies, dont certaines sont chantées par Francis en voix de contre-ténor.
              </p>


              <h1 className="title is-4 has-text-centered m-2 has-text-secondary">Conditions</h1>
              <br />
              <p><u>Durée du spectacle :</u> <b>40 minutes</b> <br />
                <u>Temps d’installation :</u> <b>1h15</b><br />
                <u>Espace scénique :</u> <b>6 m d’ouverture - 4 m de profondeur</b><br />
                Obscurité non indispensable, mais pénombre souhaitée.<br />
                Jaugede 120 enfants (possibilité de faire 2 séances)</p>
            </div>
            <br />
            <div className="columns has-text-pcr has-text-centered">
              <div className="column">
                <a href="/pdf/tarifs-theatre-du-petit-pierre.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Consulter le PDF des tarifs </p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout >
)

export default Les3petitsCochonsPage;