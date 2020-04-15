import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<Link to='/' className='navbar-brand text-warning'>
					Memory-books
				</Link>

				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#menu'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='menu'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<NavLink
								to='/Accueil'
								activeClassName='active'
								className='nav-link'
							>
								Accueil
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/Mémoires'
								activeClassName='active'
								className='nav-link'
							>
								Mémoire
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/Qui-suis-je'
								activeClassName='active'
								className='nav-link'
							>
								Qui suis-je ?
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
