<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Publication } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import { Badge } from '../ui/badge';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { it }: { it: Publication } = $props();

</script>

<FancyCard color={it.color} href={href(`/experience/${it.slug}`)}>
	<CardContent class="flex flex-col gap-8 sm:flex-row">
		<div class="flex flex-col gap-4">
			<CardTitle>{it.title}</CardTitle>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-calendar" />
						<div>{it.year}</div>
						<Icon icon="i-carbon-time" />
						<div>{it.authors}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Date range</TooltipContent>
			</Tooltip>
			<div class="py-2 text-sm text-muted-foreground">{ellipsify(it.shortDescription, 150)}</div>
		</div>
	</CardContent>
</FancyCard>
