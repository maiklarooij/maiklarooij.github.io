import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Publication } from './types';

const title = 'Publications';

const items: Array<Publication> = [
	{
		title: "Do large language models solve the problems of agent-based modeling? A critical review of generative social simulations",
		authors: ["Larooij, M.", "Tornberg, P."],
		year: 2025,
		journal: "Journal of Testing",
		links: [{ to: "https://example.com", label: "View Publication", newTab: true }],
		slug: "test-publication",
		name: "Test Publication",
		logo: { light: Assets.Unknown.light, dark: Assets.Unknown.dark },
		description: "A test publication for demonstration purposes.",
		shortDescription: "A test publication.",
		color: "#FF5733",
	}
];

const PublicationsData = { title, items };

export default PublicationsData;
