import React from 'react';
import './createPage.css';
import Signup from '../../components/signup/Signup';

const CreatePage: React.FC = () => {
	return (
		<div className='landing-container'>
			<div className='landing-left'>
				<div className='landing-content'>
					<p className='landing-title'>
						Add data to Remote DB{' '}
						<span>Chinook</span>
					</p>
					<p className='landing-subtitle'>
						Try it out !
					</p>
				</div>
			</div>
			<div className='landing-right'>
				<Signup />
			</div>
		</div>
	);
};

export default CreatePage;
