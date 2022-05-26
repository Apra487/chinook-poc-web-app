import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import './Aliases.css';

import {
	getCustomers,
} from '../../api/chinook';

const Aliases: React.VFC<{}> = () => {
	const [customers, setuCustomers] = useState([]);

	const [loading, setLoading] = useState(false);
	const [firstLoad, setFirstLoad] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();



	useEffect(() => {
		const fetchCustomers = async () => {
			try {
				const result = await getCustomers();

				if (result) setuCustomers(result);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCustomers();
	}, []);

	const getCustomersFunc = async () => {
		try {
			const result = await getCustomers();
            if (result) setuCustomers(result);
		} catch (error) {
			console.log(error);
		} finally {
			setFirstLoad(true);
			setLoading(false);
		}
	};


	let message = <></>;

	if (loading) {
		message = <p>Loading...</p>;
	} else if (errorMessage) {
		message = <p>{errorMessage}</p>;
	} else if (firstLoad && customers.length === 0) {
		message = <p>No aliases found</p>;
	}

	return (
		<div className='alias-container'>
			<div className='alias-btn-container'>
				<button
					className='alias-reload'
					type='button'
					onClick={getCustomersFunc}
				>
					reload
				</button>
				<button
					className='alias-reload'
					type='button'
					onClick={()=> history.push("/create-data")}
				>
					Add Data
				</button>
			</div>

			{message}
			{customers.length !== 0 && (
				<table className='aliases-table'>
					<thead>
						<tr>
							<td>Id</td>
							<td>First Name</td>
							<td>Last Name</td>
							<td>Email</td>
						</tr>
					</thead>
					<tbody>
						{customers.map((alias: any) => (
							<tr
								key={alias.CustomerId}
								className='aliases-table-row'
							>
								<td>{alias.CustomerId}</td>
								<td>{alias.FirstName} </td>
								<td>{alias.LastName}</td>
								<td>{alias.Email}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Aliases;
