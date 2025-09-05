<script lang="ts">
	export let icon: `i-carbon-${string}`;
	export let className = '';
</script>

<style>
	.i-carbon-logo-bluesky {
		--un-icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTEuMzg4Yy0uOTA2LTEuNzYxLTMuMzcyLTUuMDQ0LTUuNjY1LTYuNjYyYy0yLjE5Ny0xLjU1LTMuMDM0LTEuMjgzLTMuNTgzLTEuMDMzQzIuMTE2IDMuOTc4IDIgNC45NTUgMiA1LjUyOGMwIC41NzUuMzE1IDQuNzA5LjUyIDUuNGMuNjggMi4yOCAzLjA5NCAzLjA1IDUuMzIgMi44MDNjLTMuMjYuNDgzLTYuMTU3IDEuNjctMi4zNiA1Ljg5OGM0LjE3OCA0LjMyNSA1LjcyNi0uOTI3IDYuNTItMy41OWMuNzk0IDIuNjYzIDEuNzA4IDcuNzI2IDYuNDQ0IDMuNTljMy41NTYtMy41OS45NzctNS40MTUtMi4yODMtNS44OThjMi4yMjUuMjQ3IDQuNjQtLjUyMyA1LjMxOS0yLjgwM2MuMjA1LS42OS41Mi00LjgyNS41Mi01LjM5OWMwLS41NzUtLjExNi0xLjU1LS43NTItMS44MzhjLS41NDktLjI0OC0xLjM4Ni0uNTE3LTMuNTgzIDEuMDMzYy0yLjI5MyAxLjYyMS00Ljc2IDQuOTA0LTUuNjY1IDYuNjY0Ii8+PC9zdmc+);
		-webkit-mask: var(--un-icon) no-repeat;
		mask: var(--un-icon) no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
		background-color: currentColor;
		color: inherit;
		display: inline-block;
		vertical-align: middle;
		font-size: 1em;
		width: 1em;
		height: 1em;
	}
</style>

<i class={`flex-shrink-0 ${className} ${icon}`}></i>
