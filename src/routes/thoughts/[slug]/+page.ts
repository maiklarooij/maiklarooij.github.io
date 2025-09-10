import ThoughtsData from '$lib/data/thoughts';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = ThoughtsData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
