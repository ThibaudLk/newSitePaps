import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ toggleNavbar, isActive }) => {
	return (
		<div style={{ borderBottom: '3px solid #FFC003', textAlign: 'center' }}>
			<header style={{ marginBottom: 8 }}>
				<h1 className="title is-text-red">
					<Link to="/">
						<StaticImage src="../images/logo.png" alt="Logo" width={96} height={96} style={{ borderRadius: 32 }} />
					</Link>
					<p>Théâtre du Petit Pierre</p>
				</h1>
				<p className="subtitle"> Spectacles conçus et réalisés par Françis L.Kagenaar </p>
			</header>
			<nav className="navbar is-black is-size-4" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<button className={`navbar-burger burger link-button ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarTop" onClick={toggleNavbar}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>
				</div>
				<div id="navbarTop" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div class="navbar-start">
					</div>
					<div className="navbar-center">
						<Link to="/" className="navbar-item">
							Accueil
						</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<p class="navbar-link">
								Les Spectacles
							</p>
							<div class="navbar-dropdown is-boxed">
								<Link to="/petitChaperonRouge" class="navbar-item has-text-black">
									Le petit chaperon rouge
								</Link>
								<Link to="/lilyEtLeLoup" class="navbar-item has-text-black">
									Lily et le Loup
								</Link>
								<Link to="/les3petitsCochons" class="navbar-item has-text-black">
									Les 3 petits cochons
								</Link>
								<Link to="/les3cheveuxdOr" class="navbar-item has-text-black">
									Les 3 cheuveux d'Or du Diable
								</Link>
							</div>
						</div>
						<Link to="/compagnie/" className="navbar-item">
							La Compagnie
						</Link>
						<Link to="/contact/" className="navbar-item">
							Contact
						</Link>
					</div>
					<div className="navbar-end">
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
