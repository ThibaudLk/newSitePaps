import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
/* import { Link } from 'react-scroll' */

const CompagniePage = () => (
  <Layout>
    <SEO title="à propos" />
    <section className="hero has-background-black">
      <div className="hero-body">
        <div className="container">
          <div className="has-text-centered">
            <h2 className="title is-2" style={{ color: "red" }}> La compagnie </h2>
            <br />
            <p style={{ color: "red" }}> Francis L.Kagenaar crée il y a plus de vingt ans le « Théâtre du Petit Pierre ».<br />
              Fidèle à la conception de Catherine Dasté qui définit le spectacle pour enfants comme étant une « synthèse des arts » <br />
              et accompagné d’artistes aux talents multiples,  il crée pour sa compagnie des spectacles de qualité réunissant de nombreux <br />
              moyens d’expression: théâtre, musique,  marionnette, masques, théâtre d’ombres, etc…<br />
            </p>
          </div>
          <br />
          <div className="columns">
            <div className="column is-full card has-background-white">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <StaticImage width={128} style={{ border: "1px solid white", borderRadius: 10 }} src="../images/tetefrancis.png" />
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Francis L.Kagenaar, <i>comédien-auteur</i></p>
                    <p class="subtitle is-6">Après une formation de violoncelliste, <b>Francis L.Kagenaar</b> s’oriente vers le spectacle musical. Tout jeune il part en tournée avec  le « <b>Théâtre des Quartiers d’Ivry </b>» alors sous la direction d’Antoine Vitez  Après, après une longue expérience auprès des enfants il décide de mêler ses compétences d’éducateur à son goût pour la scène.</p>
                  </div>
                </div>
                <div class="content">
                  <p>
                    Il crée alors le « Théâtre du Petit-Pierre » pour lequel il écrit et interprète de nombreuses pièces qui rassemblent humour, poésie et musique (<i>« Chant de Luciole et rêve d’enfant », « Le Magicien de la pleine lune »,  « Les trois cheveux d’or du diable », « Petite note », « Plum’ ou le manège des saisons », « Mais…Où est passé le silence? », « Boucle d’or », « Le Petit Chaperon rouge », « La 7ème fille de Maître Adalbert »</i>, etc…)<br />
                    Il écrit également pour les adultes qu’il questionne de façon drôle et à la fois profonde avec un « one man show » drôle et émouvant: <br />
                    « <b>Quand j’étais grand</b> ». Il est le violoncelliste du quatuor « <b>Quatre à la Quarte</b> » et joue aux côtés de <b>Brigitte Lafon</b> dans ses « <b>SHOW de DIVAS</b> » en tant que comédien et musicien.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column card has-background-white">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <StaticImage width={128} style={{ border: "1px solid white", borderRadius: 10 }} src="../images/tetepascal.png" />
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Pascal Godart, <i>metteur en scène</i></p>
                    <p class="subtitle is-6">
                      Il met en scène <b>Francis L.K</b> dans le conte « <b>Les trois cheveux d'or du diable</b> » et dans son  one man show  truculent : « <b>Quand j'étais grand</b> ».
                    </p>
                  </div>
                </div>
                <div class="content">
                  <p><b>Pascal Godart </b>commence sa formation de comédien au <b>Théâtre des Songes</b> à Paris sous la direction de <b>François Tardy</b> et joue dans différentes pièces : La maladie de la mort-Duras, Hamlet-Shakespeare, La mouette-Tchékhov)...Il crée plusieurs spectacles avec la <b>Compagnie Akounamatata</b> (Couleurs de femmes, Tita-Lou ) et anime des stages avec le <b>Milagro Théâtre</b> (Direction d’acteurs devant la caméra, création de films avec des collégiens sur les Droits de l’Enfant).<br />
                    A son arrivée en Loire-Atlantique il  rencontre <b>Claude Kagan</b> (Compagnie du Songe) et crée l’atelier théâtre "<b>Libre Parcours</b>" et des spectacles avec des groupes importants d’amateurs.
                  </p>
                </div>
              </div>
            </div>
            <div className="column card has-background-white">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <StaticImage width={128} style={{ border: "1px solid white", borderRadius: 10 }} src="../images/teteodile.png" />
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Odile Bouvais, <i>metteur en scène</i></p>
                    <p class="subtitle is-6">
                      Elle  met en scène Francis L.K dans « La 7ème fille de Maître Adalbert »
                    </p>
                  </div>
                </div>
                <div class="content">
                  <p>Comédienne chevronnée <b>Odile Bouvais</b> a toujours eu à cœur de partager sa passion avec le plus grand nombre. <br />
                    Son goût pour les univers poétiques et son intérêt pour l’art du décalage la pousse naturellement vers le clown. Elle travaille entre autres pour « <b>Le Rire Médecin</b> » (interventions dans les hôpitaux). Avec le même appétit elle s’intéresse à la marionnette et œuvre au sein de nombreuses compagnies comme dernièrement la « <b>Compagnie Garin Trousseboeuf</b> ». Son parcours de comédienne enrichi de toutes ces expériences la pousse naturellement vers la mise en scène où elle excelle, par exemple auprès du <b>théâtre Pom’</b>.
                  </p>
                </div>
              </div>
            </div>

            <div className="column card has-background-white">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <StaticImage width={128} style={{ border: "1px solid white", borderRadius: 10 }} src="../images/tetebrigitte.png" />
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Brigitte Lafon, <i>chanteuse d’opéra</i></p>
                    <p class="subtitle is-6">Elle joue le rôle de Carmen dans « <b>Enchanté</b> »</p></div>
                </div>
              </div>
              <div class="content">
                <p>N’hésitant pas à sauter en parachute de plus de 4000 mètres…ou à se jeter à l’eau (niveau III de plongée sous-marine), cette montpelliéraine diplômée de l’Ecole du Louvre, choisit de se consacrer au chant en entrant au <b>CNSMD de Paris</b>.
                  Consacrée « Soliste de l’Année » en 1988 par l’ « <b>Union Européenne des Radios</b> », elle participe à des émissions télévisées et radiophoniques, enregistre des CD (certains en première mondiale), tourne des films d’opéra et devient l’invitée régulière des plus grandes scènes et festivals internationaux. Elle se produit en France (Théâtre des Champs Elysées, Théâtre du Châtelet, Salle Pleyel…) comme à l’étranger (Italie, Allemagne, Suisse, Irlande, Israël, Liban, Maroc, Canada, USA, Chine…).
                  Spécialiste de technique vocale et titulaire du CA de professeur de chant, elle enseigne depuis de nombreuses années lors de master classes.
                  <b>Brigitte Lafon</b> crée et met en scène ses
                  «<b>SHOW de DIVAS</b>», spectacles d’« opéra-humour » accessibles à tous les publics, dans le but de  partager son goût du rire et de la musique avec le plus grand nombre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout >
)
export default CompagniePage;
