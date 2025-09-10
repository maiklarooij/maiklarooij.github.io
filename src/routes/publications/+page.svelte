<script lang="ts">
	import { marked } from 'marked';
	import publications from '$lib/content/publications.md?raw';
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';

	const html = marked(publications);
</script>

<TitledPage title="Publications">
	<article class="prose max-w-full">{@html html}</article>
</TitledPage>

