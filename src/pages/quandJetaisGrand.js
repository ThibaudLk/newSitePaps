import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faDownload } from '@fortawesome/free-solid-svg-icons'


const QuandJetaisGrandPage = () => (
  <Layout>
    <SEO title="Spectacle Quand j'étais grand" />
    <section className="hero has-background-black has-text-justify has-text-white is-size-5 p-4">
      <h1 className="title is-2 has-text-centered has-text-lily">Quand j'étais Grand</h1>
      <h3 className="has-text-centered"><i>Un spectacle de Francis L.Kagenaar, comédien - mise en scène Pascal Godart</i></h3>
      <div className="hero-body columns is-multiline is-vcentered">
        <div className="column is-offset-2 is-3 has-text-centered">
          <StaticImage width={328} src="../images/affiches/afficheGrand.jpg" alt="affiche Quand jétais Grand" style={{ border: "1px solid white", borderRadius: 8 }} />
        </div>
        <div className="column is-offset-1 is-5 is-12-mobile"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="500"
          data-sal-easing="ease-out-back">
          <p> « Tout petit, devant le quatuor à cordes de ma grand-mère et sous l’œil insistant de ma mère, je me décide pour le plus gros : le violoncelle.
            Après avoir désespéré de nombreux professeurs de renom, j’obtiens un Premier Prix de Souffrance à l’unanimité au Conservatoire National de Versailles, et nourris toujours mon rêve de GSI («Grand Soliste International»). <br />
            «J’en saigne» dans différentes écoles de musique, et m’acharne en de fugitives apparitions au sein d’orchestres très classiques. Là, trouvant les femmes jolies, je travaille plus que jamais mon instrument…<br />
            Lassé par de multiples échecs, je décide d’en finir enfin avec ce modèle écrasant de « Grand Soliste ».</p>
        </div>
      </div>
      <div className="column is-offset-2 is-8">
        <h3 className="title is-4 has-text-centered has-text-pcr m-2"> Notes de mise en scène :</h3>
        <p>
          <i> Ainsi naît « <b>Quand j’étais grand</b> » spectacle jubilatoire en même temps que démonstration de la mise à mort du « tyran intérieur » . Dans ce combat sans merci, plein de tendresse et d’humour, chacun en prise avec ses propres modèles pourra se reconnaître… » </i>   <b>Francis L.Kagenaar.</b>
        </p>
      </div>
    </section>

    <section className="hero p-4">
      <div className="hero-body columns is-vcentered">
        <div class="column is-6"
          data-sal="slide-right"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <h1 className="title is-3 has-text-centered has-text-pcr m-2">Photos du spectacle</h1>
          <div class="columns is-multiline is-ventered">
            <div className="column"><StaticImage width={512} src="../images/quandJetaisGrand/accouchement.png" alt="imageQuandJetaisGrand" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/quandJetaisGrand/confettis.png" alt="imageQuandJetaisGrand" style={{ borderRadius: 4 }} /></div>
          </div><div className="columns is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/quandJetaisGrand/avecleloup.png" alt="imageQuandJetaisGrand" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/quandJetaisGrand/chezlepsy.png" alt="imageQuandJetaisGrand" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/quandJetaisGrand/souslevoile.png" alt="imageQuandJetaisGrand" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/quandJetaisGrand/clown.png" alt="imageQuandJetaisGrand" style={{ borderRadius: 4 }} /></div>
          </div>
        </div>
        <div className="column is-4 is-offset-1"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-easing="ease-out-back">
          <h1 className="title is-3 has-text-centered has-text-pcr m-2">Extraits vidéo</h1>
          <iframe
            src={"https://www.youtube.com/embed/8LNmA4wVzhI"}
            width="100%" height={328}
            title={"Vidéo de Quand j'étais grand"}
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
            <b>« C’est une vraie performance d’acteur... »</b> <br /><i>(Th. de Cordemais)</i>
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
            <b>« Bravo!!! on en redemande... »</b> <br /><i>(Centre culturel R.Havard - Plessé)</i>
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
            <b>« J’ai ri, j’ai pleuré... Je ne sais plus très bien où j’habite… merci !!! »  </b> <br /><i>(festival Solo - La Chapelle Bouëxic)</i>          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-offset-2 is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-delay="1500"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>« C’est du grand art. Un acte militant pour aider notre grand à (re) devenir petit. »</b><br /> <i>(Centre culturel R.Havard - Plessé)</i>
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
            <b>« La preuve absolue que l’on peut faire rire aux éclats d’une façon intelligente et subtile. La scène du psy est un morceau de choix… bravo, on en parlera autour de nous. » </b> <br /><i>(Chapelle - Conservatoire de Cholet)</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
      </div>
    </section>
    <section className="hero p-4" style={{ backgroundColor: "red" }}>
      <div className="hero-body columns">
        <div className="card column is-8 has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">La forme</h1>
          <div className="card-content">
            <div className="content">
              <p> « Il en va d’un spectacle comme d’une vie humaine : un début, une fin, et entre les deux des tentatives, des questionnements, des actions. Le tout étant au final de l’ordre de l’éphémère, de ce qui ne reviendra pas... </p>
              <p style={{ textIndent: "2em" }}>Nous n’avons pas voulu faire le récit d’une existence, mais donner à la voir avec ses situations burlesques, tragiques, quotidiennes. Max n’est pas un enfant, il parle de sa voix d’homme qui connaît son destin. Il revient l’évoquer devant les spectateurs, sous forme de scènes symboliques, épurées : la compagnie obsessionnelle du violoncelle, l’affrontement avec le père supposé, la prise de conscience du secret qui entoure sa naissance, les premiers émois amoureux, les rencontres féminines hantées par les démons de Max qui renonce toujours à ce qu’il désire, jusqu’au jour où il assume enfin sa vraie destinée de petit homme qui doit s’accepter entièrement pour grandir… <br />
                Spectacle musical, « <b>Quand j’étais grand</b> » est peuplé de personnages emblématiques: le professeur de conservatoire, le jury du concours, les bons élèves toujours enclins à exhiber leur talent, et bien d’autres. <br />
                <b>Francis L.Kagenaar</b> les interprète tous à merveille, accompagné parfois par des accessoires surprenants, et surtout par son expérience d'acteur aux énergies multiples. »   <b>Pascal Godart</b>
              </p>
            </div>
          </div>
        </div>
        <div className="card column has-background-white">
          <h1 className="title is-3 has-text-centered m-2 has-text-secondary">Modalités techniques</h1>
          <div className="card-content">
            <div className="content">
              <p><u>Durée du spectacle :</u> <b>1h15'</b> <br />
                <u>Temps d’installation :</u> <b>3h00</b><br />
                <u>Espace scénique :</u> <b>6 m d’ouverture - 5 m de profondeur</b><br />
                Obscurité non indispensable, mais pénombre souhaitée.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="card column is-offset-1 is-10 has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">Tarifs et dossier de presse</h1>
          <div className="card-content">
            <div className="content">
              <div className="columns has-text-pcr">
                <div className="column is-offset-1">
                  <a href="/pdf/tarifs-theatre-du-petit-pierre.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Consulter le PDF des tarifs </p></a>
                </div>
                <div className="column">
                  <a href="/pdf/fiche-tech-quand-jetais-grand.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Télécharger la fiche technique</p></a>
                </div>
                <div className="column">
                  <a href="/pdf/dossier-presse-quand-jetais-grand.pdf" target="_blank"><p><FontAwesomeIcon icon={faDownload} size="2x" /> Télécharger le dossier de presse</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout >
)

export default QuandJetaisGrandPage;