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
		`I'm Maik, a tall (yes, above 2 meters indeed), Dutch guy currently pursuing a dual-PhD at the intersection of (Generative) Information Retrieval and Open Government. You can either find me in The Hague, doing advisory work at the <a href="https://www.rvihh.nl/" class="font-medium underline hover:font-bold" target="_blank"><img src="https://www.google.com/s2/favicons?sz=16&domain_url=https://rvihh.nl" alt="example.com favicon" class="w-4 h-4 mr-2 inline-block align-middle">'Rijksorganisatie voor Informatiehuishouding' (RvIHH)</a> within the Ministry of Interior and Kingdom Relations, or at the <a href="https://uva.nl" class="font-medium underline hover:font-bold" target="_blank"><img src="https://www.google.com/s2/favicons?sz=16&domain_url=https://uva.nl" alt="example.com favicon" class="w-4 h-4 mr-2 inline-block align-middle">University of Amsterdam</a> as a part of the <a href="https://opengov.nl" class="font-medium underline hover:font-bold" target="_blank"><img src="https://www.google.com/s2/favicons?sz=16&domain_url=https://opengov.nl" alt="example.com favicon" class="w-4 h-4 mr-2 inline-block align-middle">ICAI OpenGov Lab</a> and <a href="https://irlab.science.uva.nl/" class="font-medium underline hover:font-bold" target="_blank"><img src="https://www.google.com/s2/favicons?sz=16&domain_url=https://irlab.science.uva.nl" alt="example.com favicon" class="w-4 h-4 mr-2 inline-block align-middle">IRLab</a>. Want to chat about that over a cup of coffee? Feel free to reach out below!` ,
	links: [
		{ label: 'GitHub', href: 'https://github.com/maiklarooij', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/maik-larooij', icon: 'i-carbon-logo-linkedin' },
		// { label: 'Twitter', href: 'https://twitter.com', icon: 'i-carbon-logo-twitter' },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/maiklarooij.nl', icon: 'i-carbon-logo-bluesky' },
		{ label: 'Scholar', href: 'https://scholar.google.com/citations?user=YfZMihcAAAAJ', icon: 'i-carbon-education' },
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
