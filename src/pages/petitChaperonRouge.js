import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faDownload } from '@fortawesome/free-solid-svg-icons'

const PetitChaperonRougePage = () => (
  <Layout>
    <SEO title="Spectacle du Petit Chaperon Rouge" />
    <section className="hero has-background-black has-text-justify has-text-white is-size-5 p-4">
      <h1 className="title is-2 has-text-centered has-text-pcr">Le Petit Chaperon rouge</h1>
      <h3 className="has-text-centered"><i>Un spectacle écrit et mis en scène par Francis L.Kagenaar, comédien</i></h3>
      <div className="hero-body columns is-multiline is-vcentered">
        <div className="column is-offset-2 is-3 has-text-centered">
          <StaticImage width={328} src="../images/affiches/afficheChap.jpg" alt="petitchap" style={{ borderRadius: 8 }} />
        </div>
        <div className="column is-offset-1 is-5 is-12-mobile"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease-out-back">
          <p> La plus célèbre de toutes les histoires méritait une attention toute particulière. C’est chose faite avec cette adaptation <b>poétique, musicale, très colorée </b>et <b>remplie d’humour</b> du<b> Petit Chaperon rouge</b>.<br />
            Dans cette version des frères Grimm, (contrairement à celle de Perrault), le Petit Chaperon rouge ressort du ventre du loup: l’histoire est ainsi « rassurante » et, comme dirait le célèbre psychanalyste Bruno Bettelheim, « réparatrice ».
          </p>
        </div>
      </div>
      <div className="publicMaternellePrimaire" style={{ backgroundColor: "red" }}> public : maternelles & primaires</div>
      <div className="column is-offset-2 is-8">
        <h3 className="title is-4 has-text-centered has-text-pcr m-2"> Notes de mise en scène :</h3>
        <p><i> « Mon souci est de préserver le sens profond de ce conte, de respecter son <b>rôle éducatif</b> tout en lui donnant un aspect <b>totalement ludique</b>. L’utilisation de la marionnette « construite » et utilisée « à vue » permet une «<b> distanciation </b>»  du jeune public avec les différentes émotions vécues par les personnages.<br />
          Ainsi, l’enfant peut par exemple <b>jouer à se faire peur sans n’avoir jamais peur lui-même</b> et passer par toute une palette d’émotions (joie, tristesse, colère etc…). »</i></p><p style={{ textAlign: "right" }}><i>Francis L.Kagenaar</i></p>
      </div>
    </section>

    <section className="hero p-4">
      <div className="hero-body columns is-vcentered">
        <div class="column is-6">
          <h1 className="title is-3 has-text-centered has-text-pcr m-2">Photos du spectacle</h1>
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
          <h1 className="title is-3 has-text-centered has-text-pcr m-2">Extraits vidéo</h1>
          <iframe
            src={"https://www.youtube.com/embed/bgG6iz2bEjs"}
            width="100%" height={328}
            title={"Vidéo du Petit Chaperon Rouge"}
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
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">La forme</h1>
          <div className="card-content">
            <div className="content">
              <p> L’histoire est racontée à l’aide de <b>marionnettes-objets</b> qui sont manipulées « <b>à vue</b> ».<br />
                Dans ce spectacle d’une grande richesse où la <b>couleur est omniprésente</b>, le décor s’inspire de l’œuvre de <b>Miro</b> (le <b>rouge</b> est tout particulièrement mis à l’honneur).<br />
                La <b>musique</b> ponctue le récit et la <b>chanson</b> du <b>Petit Chaperon rouge</b> accompagne la petite héroïne tout au long de ce spectacle poétique et coloré.</p>
            </div>
          </div>
        </div>
        <div className="card column has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">L’espace scénique</h1>
          <div className="card-content">
            <div className="content">
              <p>Il s’agit d’un « boite noire » (3m x 3m):  L’espace est délimité par des rideaux noirs sur les côtés et en fond de scène, ainsi que par un sol noir.  La lumière éclaire l’espace scénique sans déborder sur la salle ce qui permet une <b>très bonne mise en valeur du spectacle</b>.</p>
            </div>
            <br />
            <h1 className="title is-4 has-text-centered m-2 has-text-secondary">Modalités techniques</h1>
            <div className="content">
              <p>
                <u>Durée du spectacle :</u> <b>45 minutes</b> <br />
                <u>Temps d’installation :</u> <b>1h00</b><br />
                <u>Espace scénique :</u> <b>4 m d’ouverture - 3 m de profondeur</b><br />
                Obscurité non indispensable, mais pénombre souhaitée.
              </p>
            </div>
          </div>
        </div>
        <div className="card column has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">Adaptabilité</h1>
          <div className="card-content">
            <div className="content">
              <p>La construction et la manipulation « à vue » des marionnettes permet de <b>s’adapter à l’âge des enfants</b>. <br />
                Ainsi le loup d’un spectacle proposé aux petites sections (2-3 ans) n’est plus le même que celui présenté aux grandes sections (5-6 ans). Il n’y a plus aucune limite à son côté effrayant quand il s’agit d’enfants plus grands encore qui peuvent hurler de peur (et de plaisir). Si ce spectacle qui <b>fait l’unanimité</b> est jubilatoire pour les enfants, il l’est aussi  pour les adultes, et également pour le comédien qui s’en donne à cœur joie et mène son public où il veut, un peu comme un chef d’orchestre mène son orchestre.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="card column is-offset-1 is-10 has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">Quelques pistes d’exploitation pédagogique</h1>
          <div className="card-content">
            <div className="content">
              <p> L’histoire peut être abordée <b>en amont</b> : le spectacle sera alors l’aboutissement d’un travail effectué sur les différentes thématiques du conte. Le spectacle peut aussi être le <b>point de départ</b> d’un projet: Différents axes de travail peuvent alors être exploités en fonction de l’âge des enfants et des objectifs  des enseignants.<br />
                <b>Pour les plus petits</b> : travail sur le fond et la chronologie de l’histoire - travail sur les couleurs (et plus particulièrement le rouge qui est bien présent dans le spectacle) - travail sur le « schéma corporel »  (la construction des personnages dans le spectacle est un bon support) - Le thème du loup et bien d’autres thèmes peuvent être abordés…<br />
                <b>Pour les plus grands </b>: <br /><br />
                <u>Sur le spectacle :</u>  - Comment le spectacle s’approprie cette histoire (moyens d’expression choisis, techniques utilisées etc…) - Développement de thématiques liées au spectacle (les couleurs, le peintre Miro, la construction « à vue » de marionnettes, l’utilisation de la voix (en direct et enregistrée)) - Apprentissage des chansons. <br />
                <br />
                <u>Sur l’histoire :</u> - Comparaison avec d’autres versions du Petit Chaperon rouge - Exploitation du vocabulaire - Transformations possibles de l’histoire  (Nous mettons à la disposition des enseignants une bibliothèque de très nombreuses versions du Petit Chaperon rouge) - Les enfants peuvent à leur tour raconter cette histoire en utilisant d’autres techniques (pate à modeler, grandes marionnettes etc…)
                Il y a de très nombreuses suites pédagogiques et créatives à donner à ce spectacle, que ce soit autour de la compréhension de l’histoire, de l’expression, ou dans l’utilisation de techniques diverses. </p>
              <div className="columns has-text-pcr">
                <div className="column is-offset-1">
                  <a href="/pdf/tarifs-theatre-du-petit-pierre.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Consulter le PDF des tarifs </p></a>
                </div>
                <div className="column">
                  <a href="/pdf/dossier-de-presse-fiche-technique-pcr.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Télécharger le dossier de presse et la fiche technique</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout >
)

export default PetitChaperonRougePage;