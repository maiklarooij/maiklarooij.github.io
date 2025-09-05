import BaseData from './base';

const left = { title: BaseData.fullName, icon: 'i-carbon-code' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: 'Publications', icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: 'Thoughts', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'CV', icon: 'i-carbon-document', href: '/resume' }
];

const NavBarData = { left, items };

export default NavBarData;
