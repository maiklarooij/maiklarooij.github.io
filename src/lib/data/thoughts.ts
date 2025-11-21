import Assets from './assets';
import type { Thought } from './types';

const items: Array<Thought> = [
	{
		slug: '20251121-master-project-publications',
		color: '#5e95e3',
		description:
			"How exciting! My Master thesis literature review, rewritten together with dr. Petter Törnberg, has now been published in the Artificial Intelligence Review journal! This paper discusses the central challenge of validation for generative social simulation using LLMs.",
		shortDescription:
			"How exciting! My Master thesis literature review, rewritten together with dr. Petter Törnberg, has now been published in the Artificial Intelligence Review journal! This paper discusses the central challenge of validation for generative social simulation using LLMs.",
		logo: Assets.AIReview,
		name: 'Master project publication 1/2!',
		date: '2025-11-21',
		type: 'Research',
	},
	{
		slug: '20251110-conversational-search',
		color: '#5e95e3',
		description:
			"My research is getting more form! Generative AI has changed the way we search and Conversational Search is thus a very exciting research area!",
		shortDescription:
			"My research is getting more form! Generative AI has changed the way we search and Conversational Search is thus a very exciting research area!",
		logo: Assets.ConvSearch,
		name: 'Conversational Search!',
		date: '2025-11-10',
		type: 'Research',
	},
	{
		slug: '20251101-hackaton-woo',
		color: '#5e95e3',
		description:
			"On Friday, October 31st, and Saterday, November 1st, the Ministry of the Interior and Kingdom Relations and the program Open Government (Programma Open Overheid) organised a hackaton to improve the internal process of responding to Woo-requests. David, Damiaan, Maik and Jos (PhD student @ Utrecht University) represented the OpenGov Lab as one of the ten teams that participated in the event!",
		shortDescription:
			"On Friday, October 31st, and Saterday, November 1st, the Ministry of the Interior and Kingdom Relations and the program Open Government (Programma Open Overheid) organised a hackaton to improve the internal process of responding to Woo-requests. David, Damiaan, Maik and Jos (PhD student @ Utrecht University) represented the OpenGov Lab as one of the ten teams that participated in the event!",
		logo: Assets.HackatonWoo,
		name: 'Participating in a hackaton!',
		date: '2025-11-01',
		type: 'Event',
	},
	{
		slug: '20251027-dir2025',
		color: '#5e95e3',
		description:
			"On Monday, October 27, the annual Dutch-Belgian Information Retrieval (DIR) conference took place at Radboud University Nijmegen. I presented my poster about WooGLe, a search engine for government information, and the accompanying dataset of government documents.",
		shortDescription:
			"On Monday, October 27, the annual Dutch-Belgian Information Retrieval (DIR) conference took place at Radboud University Nijmegen. I presented my poster about WooGLe, a search engine for government information, and the accompanying dataset of government documents.",
		logo: Assets.DIR2025,
		name: 'Presenting poster at DIR2025!',
		date: '2025-10-27',
		type: 'Research',
	},
	{
		slug: '20251017-thesis-fair',
		color: '#5e95e3',
		description:
			"On Friday, October 17th, a delegation (David, Jaap, Damiaan & Me) of the ICAI OpenGov Lab was present at the UvA (AI) Thesis Fair to talk to prospective thesis students!",
		shortDescription:
			"On Friday, October 17th, a delegation (David, Jaap, Damiaan & Me) of the ICAI OpenGov Lab was present at the UvA (AI) Thesis Fair to talk to prospective thesis students!",
		logo: Assets.ThesisFair,
		name: 'OpenGov Lab at UvA Thesis Fair!',
		date: '2025-10-17',
		type: 'Event',
	},
	{
		slug: '20251006-starting-at-rivm',
		color: '#5e95e3',
		description:
			"In October 2025, I have started my first external advisory assignment at RIVM (the Dutch National Institute for Public Health and the Environment). I will advise them on the 'active' publication of government information as the Wet open overheid (Woo) demands.",
		shortDescription:
			"In October 2025, I have started my first external advisory assignment at RIVM (the Dutch National Institute for Public Health and the Environment). I will advise them on the 'active' publication of government information as the Wet open overheid (Woo) demands.",
		logo: Assets.RIVM,
		name: 'First external assignment: RIVM!',
		date: '2025-10-06',
		type: 'Work',
	},
	{
		slug: '20251002-ideathon-democracy-accelerator',
		color: '#5e95e3',
		description:
			"On Thursday, October 2nd, Open State Foundation and the Social Technology Lab organised an Ideathon: Democracy Accelerator! Our idea, 'Quote of Context', was unanimously selected as the winning idea!",
		shortDescription:
			"On Thursday, October 2nd, Open State Foundation and the Social Technology Lab organised an Ideathon: Democracy Accelerator! Our idea, 'Quote of Context', was unanimously selected as the winning idea!",
		logo: Assets.Ideathon,
		name: 'Democracy Accelerator!',
		date: '2025-10-02',
		type: 'Event',
	},
	{
		slug: '20250929-starting-phd-journey',
		color: '#5e95e3',
		description:
			"My dual-PhD journey has now officially started! I'm excited to work on research topics around AI for Open Government, Information Retrieval, and Large Language Models. Feel free to reach out if you have any questions or suggestions!",
		shortDescription:
			"My dual-PhD journey has now officially started! I'm excited to work on research topics around AI for Open Government, Information Retrieval, and Large Language Models. Feel free to reach out if you have any questions or suggestions!",
		logo: Assets.ProfilePic,
		name: 'Starting my dual-PhD journey!',
		date: '2025-09-29',
		type: 'General',
	}
];

const title = 'Thoughts';

const ThoughtsData = { title, items };

export default ThoughtsData;
