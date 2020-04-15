import React, { Component } from 'react';
import Styles from './Memory.module.scss';

class Memory extends Component {
	render() {
		return (
			<div className={'container-fluid ' + Styles.memory__container}>
				{/* Présentation */}
				<div className='row d-flex justify-content-around align-items-center mb-0'>
					<div className='col-8 d-flex flex-column justify-content-center align-items-center pt-5 px-5 pb-0 ml-auto mr-auto'>
						<h1 className='display-4 text-warning'>Mes mémoires</h1>
						<hr className='mt-4 mb-5' />
						<p className='text-center text-white'>
							Voici une liste des mémoires que je réalise lors de
							mon apprentissage sur plusieurs langages
							informatique.
							<br />
							<br /> J'ai cette détermination de toujours vouloir
							apprendre...&nbsp; C'est étrange je n'avais
							aucunement cette ambition à l'école , les profs
							m'endormait... Enfin bref, là,&nbsp;
							<strong className='text-info'>
								j'ai trouvé dans le développement web une
								vocation
							</strong>
							, plutôt&nbsp;
							<strong className='text-info'>
								j'en n'ai fait ma passion
							</strong>
							.
							<br />
							<br />
							Et c'est donc pour celà que je vous propose de
							suivre ce que j'ai pu apprendre mais également ce
							que j'apprends encore aujourd'hui.
						</p>
					</div>
				</div>

				{/* Mes books */}
				<div className='row m-5'>
					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title'>
									Bash <i class='fas fa-code float-right'></i>
								</h4>
								<p className='card-text p-3'>
									Mes notes ici sont sur les commandes qui
									sont utilisés dans un terminal. Du mois,
									celles que j'utilise au quotidien.
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									<i class='fab fa-git-alt float-left'></i>
									Git / Github
									<i class='fab fa-github float-right'></i>
								</h4>
								<p className='card-text p-3'>
									Ici, Je note un maximum d'informations pour
									assimiler correctement le versionning. Le
									maîtriser est très important.
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									Markdow{' '}
									<i class='fab fa-markdown float-right'></i>
								</h4>
								<p className='card-text p-3'>
									Le Markdown permet d'avoir des README de
									qualité sur Github mais aussi de partager un
									code proprement sur discord.
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									<i class='fab fa-html5 float-left'></i>
									HTML - CSS
									<i class='fab fa-css3 float-right'></i>
								</h4>
								<p className='card-text p-3'>
									J'essai de faire un récapitulatif des points
									important pour le HTML et le CSS. Ce sont
									deux langages sont indispensable à tout
									développeur.
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									JavaScript
									<i class='fab fa-js float-right'></i>
								</h4>
								<p className='card-text p-3'>
									Mes notes ici vont-être nombreuses, c'est un
									langage merveilleux. Longtemps je l'ai
									détesté, aujourd'hui j'en suis barjot.
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									<i class='fab fa-react float-left'></i>
									React - Redux
								</h4>
								<p className='card-text p-3'>
									Après avoir survoler VueJS, découvert un peu
									Angular, je suis tombé sous le charme de
									REACT. Je noterai ici des choses que j'ai
									compris.
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									<i class='fab fa-node-js float-left'></i>
									Node.JS - Express
								</h4>
								<p className='card-text p-3'>
									Voulant me spécialiser dans la stack
									M.E.R.N, Je me dois d'apprendre à utiliser
									NodeJS. J'ai vraiment tout à apprendre,
									Express va .... à éditer
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-6 col-md-4 col-lg-3 my-3'>
						<div className='card'>
							<div className='card-body'>
								<h4 class='card-title text-center'>
									MongoDB - Mongoose
								</h4>
								<p className='card-text p-3'>
									Ici j'apprends à utiliser MongoDB ainsi que
									Mongoose. Ces deux technologies sont liés.
									Elles sont aussi des pré-requis dans la
									Stack M.E.R.N
								</p>
							</div>
							<div className='card-footer text-muted d-flex justify-content-between align-items-center'>
								<button
									className='btn btn-small btn-outline-info'
									type='button'
									disabled
								>
									Accès au mémoires...
								</button>
								0 mémoire
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Memory;
