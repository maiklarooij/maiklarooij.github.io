<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import ThoughtsData from '$lib/data/thoughts';

	let search = $state('');
	let result = $derived(
		ThoughtsData.items.filter((project) => {

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isSearched;
		})
	);


	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={ThoughtsData.title} {onSearch}>
	<div class="flex flex-1 flex-col gap-8">
		{#if result.length === 0}
			<EmptyResult />
		{:else}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each result as it (it.slug)}
					<ProjectCard project={it} />
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>
