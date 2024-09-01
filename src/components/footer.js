import React from 'react'
import '../style/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<footer id="footer" className="has-background-white has-text-black">
       		<p className="copyright"> Créer avec <a href="https://www.gatsbyjs.org/">Gatsby.js</a> et beaucoup de <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> par <a href="https://thibaud-larriere.netlify.app">DevDurable</a></p>
    	</footer>
	)
};

export default Footer;
