<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import PublicationCard from '$lib/components/publications/publication-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import PublicationData from '$lib/data/publications';
	import { marked } from 'marked';
	import publications from '$lib/content/publications.md?raw';
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';

	const html = marked(publications);

	let search = $state('');

	let result = $derived(
		PublicationData.items.filter(
			(it) =>
				it.title.toLowerCase().includes(search.toLowerCase()) ||
				it.journal.toLowerCase().includes(search.toLowerCase()) ||
				it.description.toLowerCase().includes(search)
		)
	);

	const onSearch = (query: string) => (search = query);
</script>

<TitledPage title="Publications">
	<article class="prose max-w-full">{@html html}</article>
</TitledPage>

