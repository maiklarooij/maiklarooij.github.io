import Assets from './assets';
import type { Thought } from './types';

const items: Array<Thought> = [
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
