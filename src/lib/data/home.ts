import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		`I'm Maik, a tall (yes, above 2 meters indeed), Dutch guy currently pursuing a dual-PhD at the intersection of (Generative) Information Retrieval and Open Government. You can either find me in The Hague, doing advisory work at the 'Rijksorganisatie voor Informatiehuishouding' (RvIHH) within the Ministry of Interior and Kingdom Relations, or at the University of Amsterdam as part of the ICAI OpenGov Lab. Want to chat about that over a cup of coffee? Feel free to reach out below!` ,
	links: [
		{ label: 'GitHub', href: 'https://github.com/maiklarooij', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/maik-larooij', icon: 'i-carbon-logo-linkedin' },
		// { label: 'Twitter', href: 'https://twitter.com', icon: 'i-carbon-logo-twitter' },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/maiklarooij.nl', icon: 'i-carbon-logo-bluesky' },
		{ label: 'Email', href: 'mailto:larooij@opengov.nl', icon: 'i-carbon-email' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
