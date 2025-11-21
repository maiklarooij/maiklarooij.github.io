<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Thought } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { thought }: { thought: Thought } = $props();

</script>

<FancyCard
	color={thought.color}
	class="flex h-full flex-col"
	href={href(`/thoughts/${thought.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<!-- <Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={thought.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? thought.logo.dark : thought.logo.light} />
		</Avatar> -->
		<img src={$mode === 'dark' ? thought.logo.dark : thought.logo.light} alt={thought.name} class="h-32 rounded-md object-cover" />
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{thought.name}
					</TooltipTrigger>
					<TooltipContent>{thought.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{thought.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{thought.date}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(thought.shortDescription, 150)}</Muted
		>
		<Separator />
	</CardContent>
</FancyCard>
