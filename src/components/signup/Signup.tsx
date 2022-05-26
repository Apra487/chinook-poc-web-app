import React, { useState } from 'react';
import { createCustomers } from '../../api/chinook';

import './Signup.css';

const Login: React.VFC<{
}> = ({}) => {
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [firstName, setFirstName] = useState('');
	const [signupEmail, setSignupEmail] = useState('');
	const [lastName, setLastName] = useState('');

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!firstName || !signupEmail || !lastName) {
			setErrorMessage('FirstName, LastName, and email cannot be empty');
		}
		else {
		    try {
		        setErrorMessage("");
		        setLoading(true);

		        await createCustomers(firstName, signupEmail,  lastName);
		        setLoading(false);
		    } catch (error) {
		        setErrorMessage("error creating users");
		        setLoading(false);
		    } finally {
                setFirstName('');
                setSignupEmail('');
                setLastName('');
		    }
		}
	};

	let message = <></>;

	if (loading) message = <p>Loading...</p>;
	else if (errorMessage) message = <p>{errorMessage}</p>;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label className='signup-field'>
					<span>First Name</span>
					<br />
					<input
						type='text'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</label>
				<br />
				<label className='signup-field'>
					<span>First Name</span>
					<br />
					<input
						type='text'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</label>
				<br />
				<label className='signup-field'>
					<span>Email</span>
					<br />
					<input
						type='text'
						value={signupEmail}
						onChange={(e) => setSignupEmail(e.target.value)}
					/>
				</label>
				<br />
				<button className='signup-button' type='submit'>
					Add data
				</button>
			</form>
			{message}
		</div>
	);
};

export default Login;
