<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import ScreenshotCard from '$lib/components/common/screenshot/screenshot-card.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import type { Thought } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { marked } from 'marked';

	let { data }: { data: { item?: Thought } } = $props();


	let title = $derived(`${data?.item?.name ?? 'Not Found'} - Projects`);
	let banner = $derived(
		($mode == 'dark' ? data?.item?.logo.dark : data.item?.logo.light) ?? Assets.Unknown.light
	);
	
	let html = $state('<p>Loading...</p>');

	$effect(() => {
		(async () => {
		const res = await fetch(`/thoughts/${data?.item?.slug}.md`);
		const text = await res.text();
		html = await marked.parse(text);
		})();
	});

</script>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{data.item.name}</H1>
				<Muted>{data.item.type}</Muted>
				<Muted>{data.item.date}</Muted>
				<Separator />
			</div>
		</FancyBanner>
	{/if}
	<article class="prose max-w-full">{@html html}</article>
</BasePage>
