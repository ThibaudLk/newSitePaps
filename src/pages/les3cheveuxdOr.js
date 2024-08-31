import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faDownload } from '@fortawesome/free-solid-svg-icons'

const Les3cheveuxdOrPage = () => (
  <Layout>
    <SEO title="Spectacle du Petit Chaperon Rouge" />
    <section className="hero has-background-black has-text-justify has-text-white is-size-5 p-4">
      <h1 className="title is-2 has-text-centered" style={{ color: "#FFC003" }}>Les 3 cheveux d’Or du Diable </h1>
      <h3 className="has-text-centered"><i>Un spectacle écrit et mis en scène par Francis L.Kagenaar, comédien - Mise en scène Pascal Godart</i></h3>
      <div className="hero-body columns is-multiline is-vcentered">
        <div className="column is-offset-2 is-3 has-text-centered">
          <StaticImage width={328} src="../images/affiches/affiche3ChevOr.jpg" alt="affiche les 3 cheveux d'Or du Diable" style={{ borderRadius: 8 }} />
        </div>
        <div className="column is-6 is-12-mobile">
          <p> On a prédit à un « enfant du bonheur » qu’il épouserait la fille du roi à l’âge de quatorze ans... Apprenant cela, ce roi, méchant et orgueilleux, cherche à se débarrasser de cet enfant trop encombrant. <br />
            Toutes ses tentatives ayant échouées, il décide alors de mettre l’enfant à l’épreuve: <br />
            L’enfant (devenu un valeureux jeune homme) ne pourra épouser sa fille que s’il parvient à lui ramener <b>trois cheveux d’or de la tête du diable...</b>
          </p>
        </div>
      </div>
      <div className="publicMaternellePrimaire" style={{ backgroundColor: "#FFC003" }}> à partir de 5 ans </div>
      <div className="columns">
      <div className="column is-offset-1 is-5">
        <h3 className="title is-4 has-text-centered has-text-pcr m-2"> Notes sur l'histoire </h3>
        <p><i> L’univers symbolique que nous propose ce conte est <b>particulièrement riche </b>et en fait l’un des plus<b> fascinants</b> que nous aient légués les <b>frères Grimm</b>.
          <br />Afin de s’accomplir, le héros entame une quête. Il laisse derrière lui tout ce qui constituait jusque là son monde. Il traverse des épreuves, risque sa vie, joue son destin. Son périple constitue une <b>initiation</b>. Sur ses pas, l’enfant  pressent ce que signifiera pour lui l’entrée dans la vie adulte.
        </i></p>
      </div>
      <div className="column is-offset-1 is-5">
        <h3 className="title is-4 has-text-centered has-text-pcr m-2"> Le spectacle </h3>
        <p> <i>Cette histoire est mise en scène avec talent et originalité par Pascal Godart. Ce conte extrêmement foisonnant aux personnages riches en couleur nécessitait une mise en scène vivante et dynamique :<br />
          « L’utilisation des instruments de musique (violoncelle, accordéons, maracas) et l’énergie communicative de son interprète <b>Francis L.Kagenaar</b> apporte encore une dimension supplémentaire à ce récit passionnant que l’on pourrait qualifier de « <b>conte théâtralisé</b> » ». 
          </i></p>
          <p style={{ textAlign: "right" }}><i><b>Pascal Godart</b> </i> </p>
        </div>
      </div>
    </section>

    <section className="hero p-4">
      <div className="hero-body columns is-vcentered">
        <div class="column is-6">
        <h1 className="title is-3 has-text-centered has-text-pcr m-2">Photos du spectacle</h1>
          <div class="columns is-multiline is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/3cheveuxdOr/1485.jpg" alt="image3cheveuxdOr" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/3cheveuxdOr/1468.jpg" alt="image3cheveuxdOr" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/3cheveuxdOr/1555.jpg" alt="image3cheveuxdOr" style={{ borderRadius: 4 }} /></div>
          </div><div className="columns is-vcentered">
            <div className="column"><StaticImage width={512} src="../images/3cheveuxdOr/1575.jpg" alt="image3cheveuxdOr" style={{ borderRadius: 4 }} /></div>
            <div className="column"><StaticImage width={512} src="../images/3cheveuxdOr/1587.jpg" alt="image3cheveuxdOr" style={{ borderRadius: 4 }} /></div>
            <div className="column is-4"><StaticImage width={512} src="../images/3cheveuxdOr/1595.jpg" alt="image3cheveuxdOr" style={{ borderRadius: 4 }} /></div>
          </div>
        </div>
        <div className="column is-4 is-offset-1">
          <div className="video">
            <h1 className="title is-3 has-text-centered has-text-pcr m-2">Extraits vidéo</h1>
            <iframe
              src={"https://www.youtube.com/embed/9kN3haXy0lQ"}
              width="100%" height={328}
              title={"Vidéo des 3 cheveux d'Or"}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
    <section className="hero has-background-white p-4">
      <h1 className="title is-2 has-text-centered m-2">Extraits du Livre d'Or</h1>
      <div className="hero-body columns is-multiline">
        <div className="column is-offset-2 is-8"
          data-sal="slide-down"
          data-sal-duration="2000"
          data-sal-easing="ease-out-sine">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <p className="is-italic">
            <b>« Bravo et encore merci pour votre spectacle si captivant!
              Les enfants ont su apprécier vos dons de comédien, de conteur et de musicien. Quant aux enseignants, tout aussi passionnés que les enfants, ils se sont plu à reconnaître unanimement votre talent et vos multiples compétences.<br />
              Bravo! un grand moment. » </b> <br />
            <i>L’équipe pédagogique de l'école Saint-Exupéry - Laval</i>
          </p>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
      </div>
    </section>
    <section className="hero p-4" style={{ backgroundColor: "#FFC003" }}>
      <div className="hero-body columns">
        <div className="card column is-offset-2 is-8 has-background-white">
          <h1 className="title is-2 has-text-centered m-2 has-text-secondary">Quelques pistes d’exploitation pédagogique</h1>
          <div className="card-content">
            <div className="content">
              <p> La grande richesse de cette histoire permet d’envisager de nombreuses pistes de travail. Celles-ci seront bien sûr différentes si les enfants ont pris connaissance du conte avant le spectacle. <br />
                <br />
                <u>Énumération de quelques axes d’exploration du conte :</u> </p><br />
              <p>
                1 - Interroger les enfants pour savoir ce qu’ils ont retenu du spectacle et pouvoir faire un résumé de l’histoire. <br />
                2 - Reprendre « de mémoire » l’histoire pour essayer d’en retrouver la chronologie.<br />
                3 - Ce récit étant extrêmement fourni en évènements comme en personnages, il est souhaitable dans un 2ème temps de s’aider du texte pour modifier ou affiner la chronologie établie par les enfants. <br />
                4 - Faire la liste de tous les personnages de l’histoire et définir les qualités et spécificités de chacun.<br />
                5 - Enumérer les épreuves que doit affronter l’enfant « né coiffé ».<br />
                6 - Comprendre le sens de ce conte, des épreuves, et des efforts accomplis par l’enfant. <br />
                7 - Réfléchir et échanger avec les enfants quant aux rapprochements possibles avec leur quotidien.<br />
                8 - Comprendre et se réapproprier le vocabulaire de ce récit.<br />
                9 - Il est très intéressant que les enfants puissent exprimer la façon dont ils imaginent les personnages, les lieux, les situations. <br />
                10 - Ce travail peut déboucher par une démarche créative où les enfants vont raconter à leur tour et à leur façon cette histoire.<br /></p>
              <p><i>De très nombreuses pistes de travail sont possibles autour de ce conte. Vous trouverez en pièce jointe un dossier concernant le travail effectué sur ce conte par une école de la ville de Rouen.</i></p>



              <h1 className="title is-4 has-text-centered m-2 has-text-secondary">Modalités techniques</h1>
              <br />
              <p><u>Durée du spectacle :</u> <b>40 minutes</b> <br />
                <u>Temps d’installation :</u> <b>1h00</b><br />
                <u>Espace scénique :</u> <b>4 m d’ouverture - 3 m de profondeur</b><br />
                Obscurité non indispensable, mais pénombre souhaitée.</p>
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

export default Les3cheveuxdOrPage;