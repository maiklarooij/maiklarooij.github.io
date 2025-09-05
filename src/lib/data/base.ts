const firstName = 'Maik';
const lastName = 'Larooij';
const suffix = 'Maik';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
