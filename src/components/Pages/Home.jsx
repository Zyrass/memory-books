import React, { Component } from 'react';
import Styles from './Home.module.scss';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className={'container ' + Styles.home__container}>
				<div className={Styles.home__presentation}>
					<h1 className='text-warning mb-5'>Memory Books</h1>
					<p className='lead mb-4'>
						Je m'appel&nbsp;
						<span className='text-info'>Alain Guillon</span> et je
						vous souhaite la bienvenue sur ce site.&nbsp;
						<span className='text-info'>Memory Books</span> voit le
						jour afin de me créer avant tout des anti-sèches sur des
						syntaxes que j'aurais oublié.
						<br />
						<br />
						<span className='text-muted'>
							Après tout, si je peux contribuer à vous apprendre
							quelques petites choses, j'en serais plus que ravi.
							A titre perso, j'ai pour phylosophie le partage.
							Pour moi le savoir ne sert strictement à rien si il
							n'est pas partagé.
						</span>
					</p>

					<div className='row mt-5'>
						<Link
							to='/Mémoires'
							className='btn btn-outline-warning btn-lg mr-5'
						>
							Mes mémoires
						</Link>

						<Link
							to='/Qui-suis-je'
							className='btn btn-outline-info btn-lg ml-5'
						>
							Qui suis-je ?
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
