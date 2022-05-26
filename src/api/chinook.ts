import axios from 'axios';


const baseUrl = process.env.REACT_APP_API_URL;

console.log(baseUrl);

const isValidEmail = (email: string) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
export const getCustomers = async () => {

	const result = await axios.get(
		`${baseUrl}/users`
	);
	return result.data.data;
};

export const createCustomers = async (
	firstName: string,
	email: string,
	lastName: string
) => {
	if (!firstName) throw new Error('FirstName cannot be empty');
	if (!email) throw new Error('Email cannott be empty');
	if (!lastName) throw new Error('LastName cannot be empty');
	if (!isValidEmail(email)) throw new Error('Email must have a valid format');

	const body = {
		firstName,
		email,
		lastName,
	};
	const result = await axios.post(
		`${baseUrl}/users`,
		body
	);
	return result.data;
};