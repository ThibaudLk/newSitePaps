import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faDownload } from '@fortawesome/free-solid-svg-icons'

const LilyEtLeLoupPage = () => (
  <Layout>
    <SEO title="Spectacle du Petit Chaperon Rouge" />
    <section className="hero has-background-black has-text-justify has-text-white is-size-5 p-4">
      <h1 className="title is-2 has-text-lily has-text-centered">Lily et le Loup</h1>
      <h3 className="has-text-centered"><i>Un spectacle écrit et mis en scène par Francis L.Kagenaar, comédien</i></h3>
      <div className="hero-body columns is-multiline is-vcentered">
        <div className="column is-offset-2 is-3 has-text-centered">
          <StaticImage width={328} src="../images/affiches/afficheLily.jpg" alt="affiche Lily et le Loup" style={{ borderRadius: 8, border: "2px solid white" }} />
        </div>
        <div className="column is-6 is-12-mobile">
          <p> Maître Adalbert Tripette et Dame Perrine ont six jolies
            petites filles rieuses et joueuses.
            Dame Perrine qui attend  de nouveau un bébé a très peur que ce soit encore une petite fille car
            son mari, qui veut à tout prix un garçon, serait alors
            très en colère. <br />
            Nous ne savons pas encore s’il s’agira d’une  petite fille
            ou d’un petit garçon, mais nous savons
            qu’ un loup viendra mettre son grain de sel et apprendre à Maître Adalbert Tripette que :
            «fille vaut un garçon (nom de nom!)»
            ...pour le bien de tous!!!</p>
        </div>
      </div>
      <div className="publicMaternellePrimaire" style={{ backgroundColor: "purple" }}> public : maternelles & primaires</div>
      <div className="column is-offset-2 is-8">
        <p>Librement inspiré du  livre de <b><i>Didier Herlem</i></b> (« L’histoire du petit garçon qui était une petite fille ») <br />
          <b><font color="purple">« Lily et le Loup »</font></b> est un spectacle de <b>théâtre masqué</b>, de <b>marionnettes</b>, de <b>théâtre d’ombres</b>. La musique y est très présente tant par les <b>nombreuses comptines</b> que par la <b>voix de contre-ténor</b> du comédien/chanteur. Différentes scénettes forment le décor et illustrent les multiples univers qui  composent cette histoire : <b>la maison du loup, l’univers de Dame Perrine et de ses filles, l’espace de Maitre Adalbert Tripette</b> et enfin l’espace du <b>conteur</b> et de la <b>musique</b>… </p>
      </div>
    </section>

    <section className="hero p-4">
      <div className="hero-body columns is-vcentered">
        <div class="column is-6">
        <h1 className="title is-3 has-text-centered has-text-lily m-2">Photos du spectacle</h1>
          <div class="columns is-multiline is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/lily/dpavecsesfilles.jpg" alt="imageLily" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/lily/ombresavecpoules.jpg" alt="imageLily" style={{ borderRadius: 4 }} /></div>
          </div><div className="columns is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/lily/matcouteau.jpg" alt="imageLily" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/lily/lilydanslatanièreavecleloup.jpg" alt="imageLily" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/lily/dpaccouche.jpg" alt="imageLily" style={{ borderRadius: 4 }} /></div>
          </div>
        </div>
        <div className="column is-4 is-offset-1">
          <div className="video">
            <h1 className="title is-3 has-text-centered has-text-lily m-2">Extraits vidéo</h1>
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
      </div>
    </section>
    <section className="hero has-background-white p-4" style={{ borderTop: "4px solid purple" }}>
      <h1 className="title is-2 has-text-centered m-2">Extraits du Livre d'Or</h1>
      <div className="hero-body columns is-multiline">
        <div className="column is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Spectacle très accessible à tous les enfants, (y compris les petites sections), grâce à des trouvailles ingénieuses et très visuelles, une présence formidable, et une qualité musicale (instruments et chants)</b> <br /><i>Dominique Poirson.  Ecole  Maternelle Anita Conti – La Ferrière</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Merci pour ce spectacle. Nous prenons toujours autant de plaisir à découvrir vos créations qui sont à chaque fois des merveilles. Bravo encore pour les décors, les masques… </b>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Spectacle magique mêlant poésie, chant, masques, ombres… <br /> On adore,  on en redemande <br /> Continuez !!! (nom de nom)</b> <br /><i>Mat Publique - Soullans</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-offset-2 is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>…Un très beau spectacle, très accessible, même aux enfants de petites sections…Une thématique très intéressante, une mise en scène qui capte toute l’attention, des petits et des plus grands. <br /> Je recommande vivement « La 7ème fille de Maître Adalbert ». </b> <i>Salomé Jourdan . Directrice de l’école  maternelle des Agênets –Nantes</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <div className="column is-offset-1 is-4"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>Sous le charme autant que les enfants. Ce mélange est vraiment riche en émotions et se différencie des spectacles vus précédemment. </b> <br /><i>Monique Bourland - Ecole  Maternelle Anita Conti – La Ferrière</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
      </div>
    </section>
    <section className="hero p-4" style={{ backgroundColor: "purple" }}>
      <div className="hero-body columns">
        <div className="card column is-offset-2 is-8 has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">Les exploitations possibles pour les écoles</h1>
          <div className="card-content">
            <div className="content">

              <p><b><u>Pour les petites sections maternelle, le comédien présente les masques dans les classes avant le spectacle.</u></b>
                <br />
                Ce moment de contact est riche et indispensable pour sécuriser les plus petits qui viennent parfois pour la 1ère fois au spectacle. Il peut être très intéressant de <b>lire l’histoire en amont du spectacle</b>. (le texte originel est envoyé en amont dans une version <b>PDF</b>).<br />
                <br />
                <h1 className="title is-4 has-text-centered m-2 has-text-secondary">Pistes de travail</h1>
                <i><ul><li>Récolter ce que les enfants ont retenu du spectacle, </li>
                  <li>Retrouver les évènements et la chronologie de l’histoire,</li>
                  <li>Comparer le texte originel avec le spectacle, </li>
                  <li>Travailler sur le vocabulaire de ce conte (différemment selon qu’il s’agit des petits ou des grands)</li>
                  <li>Répertorier les différentes techniques utilisées dans le spectacle (conte, masques, marionnettes, ombres). </li>
                  <li>Se réapproprier les techniques utilisées = utilisation très originale des masques (système d’aimant) des ombres, de la marionnette…</li>
                  <li> Exploiter les moments musicaux du spectacle: </li>
                  <li>Les quelques comptines du spectacle peuvent facilement être reprises par les enfants. </li>
                  <li>Il sera très facile de retrouver les airs des morceaux lyriques très connus (sur internet, ou sur des CD. Les enfants pourront les réécouter).</li>
                  <li>La thématique du spectacle pourra bien sûr être explorée à différents niveaux et suivant l’âge des enfants.</li></ul></i>
              </p>
              <p>
                Pour les tous petits il sera possible d’aborder les notions de féminin et de masculin par les objets (le « un » ou  « une »), par les animaux (« mâle » ou « femelle ») et sur les êtres humains (« fille » ou « garçon », « homme » ou «femme »).<br />
                Pour les plus grands la thématique pourra bien sûr être développée. Un grand nombre de questions pourront être abordées (les différences entre les hommes et les femmes, les questions de force physique, les rôles de chacun, l’égalité, etc…). Tout ceci peut susciter des échanges et engendrer des discussions passionnantes avec les enfants.
              </p>


              <h1 className="title is-4 has-text-centered m-2 has-text-secondary">Modalités techniques</h1>
              <br />
              <p><u>Durée du spectacle :</u> <b>40 minutes</b> <br />
                <u>Temps d’installation :</u> <b>1h15</b><br />
                <u>Espace scénique :</u> <b>6 m d’ouverture - 4 m de profondeur</b><br />
                Obscurité non indispensable, mais pénombre souhaitée.</p>
            </div>
            <br />
            <div className="columns has-text-lily has-text-centered">
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

export default LilyEtLeLoupPage;