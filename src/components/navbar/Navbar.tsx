import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar: React.VFC<{

}> = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-left'>
				<Link to='/' className='navbar-title'>
					Chinook
				</Link>
			</div>

			<div className='navbar-right'>
				<ul>
					<>
						<li>
							<Link to='/'>view dashboard</Link>
						</li>
					</>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
